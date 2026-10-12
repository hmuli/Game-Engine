class WorldObject extends GameObject {
    constructor(points) {
        super("World", ["Surface", "World"], "world")
        this.addComponent(new Polygon(), {fillStyle: "green", points: points})
    }
}