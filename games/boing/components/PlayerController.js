class PlayerController extends Component {

    // Constants
    baseRunSpeed = 170
    baseFallSpeed = 300
    baseJumpPower = 600

    gravity = 1.05
    inertia = 1.05
    playerHeight = 80

    runSpeed = this.baseRunSpeed
    fallSpeed = this.baseFallSpeed
    jumpPower = this.baseJumpPower

    runDirection = "none"
    running = false

    update() {

        // Movement
        if (Input.keysDown.includes("ArrowLeft")) {
            // Go left
            this.runDirection = "left"
            this.running = true
            this.runSpeed = this.baseRunSpeed

            this.transform.position.x = this.transform.position.x - Time.deltaTime * this.runSpeed
            this.transform.scale.x = Math.abs(this.transform.scale.x) * -1

        } else if (this.runDirection == "left") {
            this.running = false
        }
        
        if (Input.keysDown.includes("ArrowRight")) {
            // Go right
            this.runDirection = "right"
            this.running = true
            this.runSpeed = this.baseRunSpeed

            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.runSpeed
            this.transform.scale.x = Math.abs(this.transform.scale.x)

        } else if (this.runDirection == "right") {
            this.running = false
        }

        if (Input.keysDown.includes("ArrowUp")) {
            // Jump
            this.transform.position.y = this.transform.position.y - Time.deltaTime * this.jumpPower
        }
        
        // Gravity implementation
        let playerPos = new Vector2(this.transform.position.x, this.transform.position.y)
        let world = GameObject.find("World")
        console.log(world)
        if (world) {
            let worldPos = world.transform.position
            if ((playerPos.y < worldPos.y - this.playerHeight)) {
                this.fallSpeed = this.fallSpeed * this.gravity
                this.transform.position.y = this.transform.position.y + Time.deltaTime * this.fallSpeed
            } else {
                this.fallSpeed = this.baseFallSpeed

                // Ensure that the player does not fall through the world
                this.transform.position.y = worldPos.y - this.playerHeight
            }
        }
        
        // Make the player slide before they come to a complete stop horizontally
        if (!this.running && !(this.runDirection == "none")) {

            this.runSpeed = this.runSpeed / this.inertia

            if (this.runSpeed > 1) {
                if (this.runDirection == "left") {
                    this.transform.position.x = this.transform.position.x - Time.deltaTime * this.runSpeed
                } else if (this.runDirection == "right") {
                    this.transform.position.x = this.transform.position.x + Time.deltaTime * this.runSpeed
                }
            } else {
                // Finally reset the direction
                this.runDirection == "none"
            }
        }
    }
}