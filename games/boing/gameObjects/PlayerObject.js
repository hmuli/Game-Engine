class PlayerObject extends GameObject {
    constructor() {
        super("Player", [], "characters")
        this.addComponent(new PlayerController()) // Input
        
        // Body
        this.addComponent(new Polygon(), {fillStyle: "rgb(0, 80, 255)", points: [
            new Vector2(0, 0),
            new Vector2(0, 80),
            new Vector2(80, 80),
            new Vector2(80, 0),
        ]})

        // Eyes
        this.addComponent(new Polygon(), {fillStyle: "white", points: [
            // Left
            new Vector2(20, 10),
            new Vector2(20, 40),
            new Vector2(30, 40),
            new Vector2(30, 10),

            // Right
            new Vector2(50, 10),
            new Vector2(50, 40),
            new Vector2(60, 40),
            new Vector2(60, 10),
        ]})

        // Smile
        this.addComponent(new Polygon(), {fillStyle: "black", points: [
            // Part 1
            new Vector2(10, 50),
            new Vector2(30, 50),
            new Vector2(20, 60),
            
            // Part 2
            new Vector2(25, 55),
            new Vector2(30, 60),
            
            // Part 3
            new Vector2(60, 60),
            new Vector2(30, 70),
        ]})

        // Hair
        this.addComponent(new Polygon(), {fillStyle: "black", points: [
            // Part 1
            new Vector2(0, 0),
            new Vector2(0, 30),
            new Vector2(10, 10),

            // Part 2
            new Vector2(80, 20),
            new Vector2(80, 0),
        ]})
    }
}