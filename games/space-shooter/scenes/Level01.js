class Level01 extends Scene {
    constructor() {
        super()
        this.instantiate(new EnemyGameObject(), new Vector2(25, 300), Math.PI)
        this.instantiate(new LevelControllerGameObject())
    }
}