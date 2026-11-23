class Enemybject extends GameObject {
    constructor() {
        super("Enemy", [], "characters")

        // Movement
        this.addComponent(new RigidBody(), {gravity: 400})
        // this.addComponent(new EnemyController())
        
        // Body
        this.addComponent(new Polygon(), {fillStyle: "rgb(255, 0, 0)", points: [
            new Vector2(0, 0),
            new Vector2(0, 80),
            new Vector2(80, 80),
            new Vector2(80, 0),
        ]})

        // Collision
        this.addComponent(new Collider())
    }
}