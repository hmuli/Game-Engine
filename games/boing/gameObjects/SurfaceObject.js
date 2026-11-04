class SurfaceObject extends GameObject {
    static num = 0
    constructor(points) {
        super("SurfaceObject" + SurfaceObject.num, ["Surface"], "world")
        this.addComponent(new Polygon(), {fillStyle: "green", points: points})
        this.addComponent(new Collider(), {points: points})
        SurfaceObject.num += 1
    }
}