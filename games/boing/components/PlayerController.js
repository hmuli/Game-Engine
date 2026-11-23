class PlayerController extends Component {

    // Constants
    baseRunSpeed = 170
    baseJumpPower = 300
    inertia = 1.05

    runSpeed = this.baseRunSpeed
    jumpPower = this.baseJumpPower
    wallJumpPower = this.baseJumpPower

    canJump = false
    canRun = false
    lastCollidable
    curMinTransVector
    rigidBody

    start() {
        this.rigidBody = this.gameObject.getComponent(RigidBody)
    }

    onCollisionStay(collidable, minimumTransformVector) {

        // Set curMinTransVector
        this.curMinTransVector = minimumTransformVector 
        
        // If the collidable is below the player
        if (minimumTransformVector.y < 0) {
            // Reset the y velocity
            this.rigidBody.velocity.y = 0

            // Enable running and jumping
            this.canRun = true
            this.canJump = true

            // Reset run direction
            this.runSpeed = Math.abs(this.runSpeed)
        }

        if (this.lastCollidable != collidable) {
            this.canJump = true
        }

        // Set last collidable
        this.lastCollidable = collidable
    }

    slide() {
        if (!this.running) {
            if (Math.abs(this.rigidBody.velocity.x) > 1) {
                this.rigidBody.velocity.x = this.rigidBody.velocity.x / this.inertia
            } else {
                this.rigidBody.velocity.x = 0
            }
        }
    }

    fixedUpdate() {

        // Reset the running state
        this.running = false

        // Movement
        if (this.canRun) {
            if (Input.keysDown.includes("ArrowLeft")) {
                // Go left
                this.running = true
                this.rigidBody.velocity.x = this.runSpeed * -1

            } else {
                this.slide()
            }
            
            if (Input.keysDown.includes("ArrowRight")) {
                // Go right
                this.running = true
                this.rigidBody.velocity.x = this.runSpeed

            } else {
                this.slide()
            }
        }

        // Jump implementation
        if (Input.keysDown.includes("ArrowUp")) {

            // Trigger a jump
            if (this.canJump) {
                this.canJump = false

                // Apply wall jump velocity if appropriate
                if (this.curMinTransVector.x > 0 && this.curMinTransVector.y == 0) {
                    // Wall is to the left of the player
                    this.runSpeed *= -1
                    this.rigidBody.velocity.x = this.wallJumpPower
                }

                if (this.curMinTransVector.x < 0 && this.curMinTransVector.y == 0) {
                    // Wall is to the right of the player
                    this.runSpeed *= -1
                    this.rigidBody.velocity.x = this.wallJumpPower * -1
                }

                this.rigidBody.velocity.y = this.jumpPower * -1
                this.transform.position.y -= 1
            }
        }

        // Set canJump to false
        this.canJump = false

        // Update camera
        Camera.main.transform.position = this.transform.position.clone()
    }
}