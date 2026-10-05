class GenericLevel extends Scene {
    constructor() {
        super()
        this.instantiate(new MainGameObject(), new Vector2(50, 300))
        this.instantiate(new PointsGameObject(), new Vector2(20, 10))
        Camera.main.backgroundColor = "cyan"
    }
}