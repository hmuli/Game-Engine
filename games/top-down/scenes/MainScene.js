class MainScene extends Scene {
    constructor() {
        super()
        this.instantiate(new SquareGameObject(), new Vector2(0, 0), 0)
        this.instantiate(new EnemyGameObject(), new Vector2(0, 0), 0)

        const uiButton = this.instantiate(new UIButton())
        uiButton.transform.anchorMin = new Vector2(.5, 1)
        uiButton.transform.anchorMax = new Vector2(.5, 1)
        uiButton.transform.offsetUpperLeft = new Vector2(150, -50)
        uiButton.transform.offsetLowerRight = new Vector2(250, -50)

    }
}