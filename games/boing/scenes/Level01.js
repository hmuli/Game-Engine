class Level01 extends Scene {
    constructor() {
        super("gray")
        this.instantiate(new LevelManagerObject())

        let points

        // World surface
        points = [
            new Vector2(0, 300),
            new Vector2(0, 0),
            new Vector2(3000, 0),
            new Vector2(3000, 300),
        ]
        this.instantiate(new WorldObject(points), new Vector2(0, 0))

        // Obstacle 1
        points = [
            new Vector2(600, -100),
            new Vector2(200, -100),
            new Vector2(200, 0),
            new Vector2(600, 0),
        ]
        this.instantiate(new WorldObject(points), new Vector2(0, 0))
    }
}