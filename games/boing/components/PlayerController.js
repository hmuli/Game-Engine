class PlayerController extends Component {

    // Constants
    baseRunSpeed = 170
    baseFallSpeed = 60
    baseJumpPower = -800

    playerSize = 80

    gravity = 0.08
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

        // Jump implementation
        if (Input.keysDown.includes("ArrowUp")) {
            // Trigger a jump
            if (this.canJump)
                this.jumping = true
        } 

        // Gravity implementation
        let playerPos = new Vector2(this.transform.position.x, this.transform.position.y)
        let world = GameObject.findGameObjectsWithTag("World")
        // console.log(world)
        if (world) {
            let worldPos = world[0].transform.position
            if (playerPos.y < worldPos.y - (this.playerSize + this.playerSize / 2)) {

                if (Math.abs(this.velocity) < 30) {
                    this.velocity = this.baseFallSpeed
                }
                console.log(this.velocity)
                
                this.velocity = this.velocity + Math.abs(this.velocity) * this.gravity
                this.transform.position.y = this.transform.position.y + Time.deltaTime * this.velocity
            } else {
                this.canJump = true

                // Ensure that the player does not fall through the world
                this.transform.position.y = worldPos.y - (this.playerSize + this.playerSize / 2)

                if (this.jumping) {
                    this.canJump = false
                    this.jumping = false
                    this.velocity = this.baseJumpPower
                    this.transform.position.y = worldPos.y - 1 - (this.playerSize + this.playerSize / 2)
                    console.log(this.velocity)
                } else {
                    this.velocity = 0
                }
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