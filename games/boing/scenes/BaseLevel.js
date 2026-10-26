class BaseLevel extends Scene {
    constructor() {
        super()
        this.instantiate(new PlayerObject(), new Vector2(0, -600))
        this.instantiate(new ScoreObject(), new Vector2(0, 10))
    }
}