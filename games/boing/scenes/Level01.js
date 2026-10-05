class Level01 extends Scene {
    constructor() {
        super()
        this.instantiate(new PlayerObject(), new Vector2(0, 0), Math.PI)
        this.instantiate(new WorldObject(), new Vector2(0, 600), Math.PI)
    }
}