class SquareGameObject extends GameObject {
    constructor() {
        super("SquareGameObject", [], "default")
        this.addComponent(new Polygon(), {fillStyle: "orange", points: Assets.triangle})
        this.addComponent(new UpdateController())
        this.addComponent(new Collider())
        this.addComponent(new RigidBody(), {gravity: 100})
        this.transform.scale = new Vector2(11, 11)
    }
}