import Utils from './js/services/utils'
import DrawingService from './js/services/drawing-service';
import {QuadTree, Box, Point, Circle} from 'js-quadtree';
import 'yuki-createjs';

export default class Game {
	speed = 7;

	constructor() {
		this.canvas = document.getElementById('canvas');
		this.stage = new createjs.Stage(this.canvas);
		this.stage.width = canvas.width;
		this.stage.height = canvas.height;
		this.bulletTree = new QuadTree(new Box(0, 0, this.stage.width, this.stage.height));

		this.sides = [
			{ // top
				x: 0,
				y: 0,
				width: this.stage.width,
				height: 20,
			},
			{ // right
				x: this.stage.width,
				y: 0,
				width: 20,
				height: this.stage.height,
			},
			{ // left
				x: 0,
				y: this.stage.height,
				width: this.stage.width,
				height: 20,
			},
			{ // bottom
				x: 0,
				y: this.stage.height,
				width: this.stage.width,
				height: 20,
			}
		];

		this.init();
		this.startGame();
	}

	getVelocityCoords(speed, shape, dotA, dotB) {
		const dx = (dotB.x - dotA.x);
		const dy = (dotB.y - dotA.y);
		const mag = Math.sqrt(dx * dx + dy * dy);
		shape.velocityX = (dx / mag) * speed;
		shape.velocityY = (dy / mag) * speed;
	}

	shoot(e, self) {
		const player = self.getPlayer();
		const bullet = DrawingService.createDrawBullet(player.x, player.y);
		bullet.name = 'bullet';
		bullet.x = player.x;
		bullet.y = player.y;
		bullet.regX = player.x;
		bullet.regY = player.y;
		
		this.getVelocityCoords(self.speed, bullet, { x: player.x, y: player.y }, { x: this.stage.mouseX, y: this.stage.mouseY });
		self.stage.addChild(bullet);
		self.stage.update();
	}

	getPlayer() {
		return this.stage.getChildByName('player');
	}

	drawPlayer() {
		const player = new createjs.Shape();
		const coords = { x: this.stage.width / 2, y: this.stage.height / 2 }
		DrawingService.drawPlayer(player.graphics, coords.x, coords.y);
		player.scaleY *= 1.5;
		player.name = 'player';
		player.x = coords.x;
		player.y = coords.y;
		player.regX = coords.x;
		player.regY = coords.y;

		this.stage.addChild(player);
	}

	generatePlace() {
		const cardinalDirection = Utils.getRandomInt(0, 3);
		const side = this.sides[cardinalDirection];

		const coords = {
			x: Utils.getRandomInt(side.x, side.x + side.width),
			y: Utils.getRandomInt(side.y, side.y + side.height)
		};

		return coords;
	}

	enemyInd = 0;
	createEnemy() {
		const enemyShapePos = this.generatePlace();
		const enemy = DrawingService.createDrawEnemy(enemyShapePos.x, enemyShapePos.y, this.enemyInd);
		enemy.name = this.enemyInd++;
		enemy.x = enemyShapePos.x;
		enemy.y = enemyShapePos.y;
		enemy.regX = enemyShapePos.x
		enemy.regY = enemyShapePos.y
		
		const player = this.getPlayer();
		this.getVelocityCoords(Utils.getRandomInt(1, this.speed), enemy, { x: enemy.x, y: enemy.y }, { x: player.x, y: player.y });
			
		this.stage.getChildByName('enemies').addChild(enemy);
	}

	init() {
		let self = this;
		document.addEventListener('click', e => this.shoot(e, self));
		this.drawPlayer();

		const enemyContainer = new createjs.Container();
		enemyContainer.name = "enemies";
		this.stage.addChild(enemyContainer);
		this.createEnemy();
		setInterval(() => {
			this.createEnemy()
		}, 500);
		
		this.stage.update();
	}

	startGame() {
		createjs.Ticker.interval = 25;
		createjs.Ticker.framerate = 40;
		let self = this;
		createjs.Ticker.on('tick', e => this.gameLoop(e, self));
	}

	calculateAngle(point1, point2) {
		let angle = Math.atan2(point2.y - point1.y, point2.x - point1.x);
		angle *= (180/Math.PI);

		if(angle < 0) {
			angle = 360 - (-angle);
		}

		return angle;
	}

	updateJetRotation() {
		const jet = this.getPlayer();
		jet.rotation = 90 + this.calculateAngle({ x: jet.x, y: jet.y }, { x: this.stage.mouseX, y: this.stage.mouseY });
	}

	updateBulletPos() {
		let child;
		let bullet;
		let enemyContainer = this.stage.getChildByName('enemies');
		for (let i = 0; i < this.stage.children.length; i++) {
			child = this.stage.children[i];
			if (child.name === 'bullet') {
				child.x += child.velocityX;
				child.y += child.velocityY;
				// child.regX = child.x;
				// child.regY = child.y;
			
				if (child.x < this.stage.x || child.x > (this.stage.width + this.stage.x)
					|| child.y < this.stage.y || child.y > (this.stage.height + this.stage.y)) {
					this.stage.removeChildAt(i);
				} else {
					bullet = new Circle(child.x, child.y, 4, { ind: i });
					this.bulletTree.insert(bullet);
				}
			}
		};
	}

	checkIfGameOver(enemy) {
		const x1 = enemy.x-enemy.width/2;
		const x2 = x1 + enemy.width;
		const y1 = enemy.y-enemy.height/2;
		const y2 = y1 + enemy.height;
		const player = this.getPlayer();

		if (player.x > x1 && player.x < x2
			&& player.y > y1 && player.y < y2) {
			this.gameOver();
		}
	}

	updateEnemiesPos() {
		const enemyContainer = this.stage.getChildByName('enemies');
		const player = this.getPlayer();
		let child;
		let enemy;
		for (let i = 0; i < enemyContainer.children.length; i++) {
			child = enemyContainer.children[i];

			// child.rotation = 90 + this.calculateAngle({ x: child.x, y: child.y }, { x: player.x , y: player.y })
			child.x += child.velocityX;
			child.y += child.velocityY;

			this.checkIfGameOver(child);
			// child.regX = child.x;
			// child.regY = child.y;

			if (child.x < -30 || child.x > (this.stage.width + this.stage.x + 30)
				|| child.y < -30  || child.y > (this.stage.height + this.stage.y + 30)) {
				enemyContainer.removeChild(child);
			} else {
				enemy = this.bulletTree.query(new Box(child.x-child.width/2, child.y-child.width/2, child.width, child.height));
				if (enemy.length !== 0) {
					console.log('remove');
					enemyContainer.removeChildAt(i);
					this.stage.removeChild(this.stage.getChildAt(enemy[0].data.ind));

					// enemyShape.graphics.clear();
					// DrawingService.drawEnemy(enemy.x, enemy.y, 20, enemy.graphics);
					// console.log(enemyContainer.removeChild(enemyShape));
				}
			}
		};
	}

	update() {
		this.updateJetRotation();

		this.bulletTree.clear();
		this.updateBulletPos();
		this.updateEnemiesPos();
	}
	
	draw() {
		this.stage.update();	
	}

	gameLoop(_e, self) {
		self.update();
		self.draw();    
	}

	gameOver() {
		console.log('fuck');
		this.stage.addChild(DrawingService.drawGameOver(this.stage.width/2, this.stage.height/2));
		this.stage.addChild(DrawingService.drawGameOverDetails(this.stage.width/2, this.stage.height/1.15));
		this.stage.update();
		createjs.Ticker.reset();

		document.addEventListener('click', () => window.location.href=window.location.href, false);
	}
}