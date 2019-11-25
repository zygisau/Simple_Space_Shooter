import {QuadTree, Box, Point, Circle} from 'js-quadtree';

export default class CollisionService {
    constructor() {}

    init(width, height) {
        this.playerTree = new QuadTree(new Box(0, 0, width, height));
    }

    addPlayer(x, y, radius) {
        this.playerTree = new QuadTree(new Circle(x, y, radius));
    }

    addEnemy(x, y, width, height) {
        // this.tree.insert(new Box(x, y, width, height));
    }
}