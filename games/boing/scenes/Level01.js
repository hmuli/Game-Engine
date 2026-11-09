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
        this.instantiate(new SurfaceObject(points), new Vector2(0, 0))


        // Obstacle 1
        points = [
            new Vector2(0, -100),
            new Vector2(0, 0),
            new Vector2(100, 0),
            new Vector2(100, -100),
        ]
        this.instantiate(new SurfaceObject(points), new Vector2(0, 0))


        // Obstacle 2
        points = [
            new Vector2(0, -100),
            new Vector2(0, 0),
            new Vector2(600, 0),
            new Vector2(600, 0),
        ]
        this.instantiate(new SurfaceObject(points), new Vector2(100, 0))


        // Obstacle 3
        points = [
            new Vector2(0, -50),
            new Vector2(0, 0),
            new Vector2(200, 0),
            new Vector2(200, -50),
        ]
        this.instantiate(new SurfaceObject(points), new Vector2(300, -200))

        // Obstacle 4
        points = [
            new Vector2(0, -50),
            new Vector2(0, 0),
            new Vector2(200, 0),
            new Vector2(200, -50),
        ]
        this.instantiate(new SurfaceObject(points), new Vector2(700, -400))


        // Obstacle 5
        points = [
            new Vector2(0, -50),
            new Vector2(0, 0),
            new Vector2(200, 0),
            new Vector2(200, -50),
        ]
        this.instantiate(new SurfaceObject(points), new Vector2(1100, -300))

        // Obstacle 6
        points = [
            new Vector2(0, -300),
            new Vector2(0, 0),
            new Vector2(200, 0),
            new Vector2(200, 0),
        ]
        this.instantiate(new SurfaceObject(points), new Vector2(1600, 0))


        // Obstacle 7
        points = [
            new Vector2(0, -800),
            new Vector2(0, 0),
            new Vector2(200, 0),
            new Vector2(200, -800),
        ]
        this.instantiate(new SurfaceObject(points), new Vector2(2000, -100))

        // Obstacle 6
        points = [
            new Vector2(0, -900),
            new Vector2(0, 0),
            new Vector2(200, 0),
            new Vector2(200, -900),
        ]
        this.instantiate(new SurfaceObject(points), new Vector2(2500, 0))
    }
}