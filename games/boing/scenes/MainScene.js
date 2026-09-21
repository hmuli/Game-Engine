class MainScene extends Scene {
    constructor() {
        super()
        this.instantiate(new PlayerObject(), new Vector2(50, 50), Math.PI)
        this.instantiate(new WorldObject(), new Vector2(0, 700), Math.PI)
    }
}