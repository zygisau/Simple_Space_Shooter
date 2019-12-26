import Utils from './utils';
import 'yuki-createjs'

export default class DrawingService {
	constructor() {}
	static drawPlayer = function(graphics, x, y) {
		graphics.beginFill('#fff');
		graphics.drawPolyStar(x, y, 20, 3, 0, -90);
		graphics.endFill();
	};

	static drawBullet(graphics, x, y) {
		graphics
			.beginFill('#fff')
			.drawCircle(x, y, 4)
			.endFill();
	}
	static createDrawBullet = function(x, y) {
		const bullet = new createjs.Shape();
		this.drawBullet(bullet.graphics, x, y);
		bullet.name = 'shape';
		
		return bullet;
	};
	static createDrawEnemy = (x, y) => {
		const enemy = new createjs.Shape();
		const size = Utils.getRandomInt(50, 100);
		enemy.graphics
			.beginFill('#f35')
			.drawRect(x-size/2, y-size/2, size, size)
			.endFill();
		
		enemy.width = size; 
		enemy.height = size;
		enemy.name = 'enemy';
		return enemy;
	};
	static drawEnemy(x, y, size, graphics, color) {
		graphics
		.beginFill(color)
		.drawRect(x, y, size, size)
		.endFill();
	}
	static drawPoint(x, y, radius, color) {
		const point = new createjs.Shape();
		point.graphics
			.beginFill(color)
			.drawCircle(x, y, radius)
			.endFill();

		return point;
	}

	static drawScore(x, y, score) {
		const text = new createjs.Text();
		text.set({
			text: score.toString(10),
			textAlign: "center",
			textBaseline: "middle",
			font: '70px "Segoe UI Semilight"',
			color: '#FFF',
			x: x,
			y: y
			});
		return text;
	}

	static drawGameOver(x, y) {
		const text = new createjs.Text();
		text.set({
			text: 'GAME OVER',
			textAlign: "center",
			textBaseline: "middle",
			font: '200px "Segoe UI Semilight"',
			color: '#FFF',
			x: x,
			y: y
			});

		return text;
	}

	static drawGameOverDetails(x, y) {
		const text = new createjs.Text();
		text.set({
			text: 'click to restart',
			textAlign: "center",
			textBaseline: "middle",
			font: '40px "Segoe UI Semilight"',
			color: '#FFF',
			x: x,
			y: y
			});

		return text;
	}
}