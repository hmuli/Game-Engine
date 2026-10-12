class PlayerController extends Component {

    // Constants
    baseRunSpeed = 170
    baseFallSpeed = 60
    baseJumpPower = -800

    maxFallSpeed = 800

    playerSize = 80

    gravity = 0.1
    inertia = 1.05

    runSpeed = 0
    velocity = 0

    runDirection = "none"
    running = false
    canJump = false
    jumping = false
    onGround = false

    update() {

        // Movement
        if (Input.keysDown.includes("ArrowLeft")) {
            // Go left
            this.runDirection = "left"
            this.running = true
            this.runSpeed = this.baseRunSpeed

            this.transform.position.x = this.transform.position.x - Time.deltaTime * this.runSpeed
            // this.transform.scale.x = Math.abs(this.transform.scale.x) * -1

        } else if (this.runDirection == "left") {
            this.running = false
        }
        
        if (Input.keysDown.includes("ArrowRight")) {
            // Go right
            this.runDirection = "right"
            this.running = true
            this.runSpeed = this.baseRunSpeed

            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.runSpeed
            // this.transform.scale.x = Math.abs(this.transform.scale.x)

        } else if (this.runDirection == "right") {
            this.running = false
        }

        // Jump implementation
        if (Input.keysDown.includes("ArrowUp")) {
            // Trigger a jump
            if (this.canJump)
                this.jumping = true
        }

        // Gravity implementation
        if (this.onGround) {
            // We're touching the ground, move on to jump logic
            this.canJump = true

            if (this.jumping) {
                this.canJump = false
                this.jumping = false
                this.velocity = this.baseJumpPower
                this.transform.position.y = this.transform.position.y - this.playerSize - 1
                console.log(this.velocity)
            } else {
                this.velocity = 0
            }
        } else {
            // We're falling, apply gravity
            if (Math.abs(this.velocity) < this.baseFallSpeed) {
                this.velocity = this.baseFallSpeed
            }
            // console.log(this.velocity)
            
            if (this.velocity < this.maxFallSpeed)
                this.velocity = this.velocity + Math.abs(this.velocity) * this.gravity

            this.transform.position.y = this.transform.position.y + Time.deltaTime * this.velocity
        }

        // Collision implementation
        let surfaces = GameObject.findGameObjectsWithTag("Surface")
        for (const surface of surfaces) {
            let worldPos = surface.transform.position
            let playerPos = new Vector2(this.transform.position.x, this.transform.position.y)
        
            // Ensure that the player does not fall through solid ground
            if (playerPos.y < worldPos.y - this.playerSize) {
                this.onGround = false
            } else {
                this.onGround = true
                this.transform.position.y = worldPos.y - this.playerSize
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

        // Update camera
        Camera.main.transform.position = this.transform.position.clone()
    }
}