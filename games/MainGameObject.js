class MainGameObject extends GameObject {
    constructor() {
        super()
        this.addComponent(new UpdateComponent())
        this.addComponent(new Polygon(), {fillStyle: "blue", points:[
            new Vector2(0, 0),
            new Vector2(40, 60),
            new Vector2(-40, 60)
        ]})
    }
}