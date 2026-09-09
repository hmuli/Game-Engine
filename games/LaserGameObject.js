class LaserGameObject extends GameObject {
    constructor() {
        super()
        this.addComponent(new LaserController())
        this.addComponent(new Polygon(), {fillStyle: "red", points:[
            new Vector2(0, 0),
            new Vector2(20, 30),
            new Vector2(-20, 30)
        ]})
    }
}