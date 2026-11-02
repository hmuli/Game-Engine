class WorldObject extends GameObject {
    constructor(points) {
        super("WorldObject", ["Surface"], "world")
        this.addComponent(new Polygon(), {fillStyle: "green", points: points})
        this.addComponent(new Collider(), {points: points})
    }
}