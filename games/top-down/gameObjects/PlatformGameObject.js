class PlatformGameObject extends GameObject {
    constructor() {
        super("PlatformGameObject", [], "default")
        this.addComponent(new Polygon(), {fillStyle: "orange", points: Assets.triangle})
        this.addComponent(new Collider())
        this.transform.scale = new Vector2(11, 11)
    }
}