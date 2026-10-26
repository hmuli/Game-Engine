class UpdateComponent extends Component {
    timeSinceLastLaser
    speed = 200
    laserTime = 20

    start() {
        this.timeSinceLastLaser = 0
    }

    update() {
        this.timeSinceLastLaser += 1

        // Go left
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.position.x = this.transform.position.x - Time.deltaTime * this.speed
        
        // Go right
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.speed
        
        // Go up
        if (Input.keysDown.includes("ArrowUp"))
            this.transform.position.y = this.transform.position.y - Time.deltaTime * this.speed
        
        // Go down
        if (Input.keysDown.includes("ArrowDown"))
            this.transform.position.y = this.transform.position.y + Time.deltaTime * this.speed

        // Laser code
        // if (Input.keysUpThisFrame.includes("Space"))
        //     instantiate(new LaserGameObject(), this.transform.position.clone())
        
        // Laser code
        // if (this.timeSinceLastLaser > this.laserTime) {
        //     this.timeSinceLastLaser = 0
        //     instantiate(new LaserGameObject(), this.transform.position.clone())
        // }
        Camera.main.transform.position = this.transform.position.clone()
        // Camera.main.transform.scale = new Vector2(1/2, 1/2)
        
        // const enemies = GameObject.findGameObjectsWithTag("Enemy")
        // for (const enemy of enemies) {
        //     if (Collisions.isCollisionPolygonPolygon(this.gameObject, enemy)) {
        //         console.log("Collision")
        //     }
        // }
    }

    onCollisionStay(other) {
        console.log(other)
    }
    onMouseOver() {
        console.log("Mouse Over")
    }
}