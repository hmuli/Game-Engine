class GenericLevel extends Scene {
    constructor() {
        super()
        let mainGameObject = this.instantiate(new MainGameObject(), new Vector2(50, 300))
        this.instantiate(new PointsGameObject(), new Vector2(20, 10))
        // Camera.main.backgroundColor = "cyan"

        let helperGameObject = this.instantiate(new HelperGameObject(), new Vector2(80, 100))

        helperGameObject.transform.setParent(mainGameObject.transform)
    }
}