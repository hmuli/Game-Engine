class PlayerController extends Component {

    // Constants
    runSpeed = 170
    jumpPower = -300
    inertia = 1.05

    canJump = false
    onGround = false
    colliding = false
    lastCollidable
    rigidBody

    start() {
        this.rigidBody = this.gameObject.getComponent(RigidBody)
    }

    onCollisionStay(collidable, minimumTransformVector) {
        // If the collidable is below the player
        if (minimumTransformVector.y < 0) {
            // Let the updater know that we are colliding with the ground
            // console.log("Grounded: " + minimumTransformVector.x + ", " + minimumTransformVector.y)
            this.onGround = true
        }

        // Allow for a wall jump if touching a different collidable
        if (this.lastCollidable != collidable) {
            console.log("Different collidable!")
            this.canJump = true
        }

        this.rigidBody.velocity.y = 0
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

        // Jump implementation
        if (Input.keysDown.includes("ArrowUp")) {

            // Trigger a jump
            if (this.onGround || this.canJump) {
                this.canJump = false
                this.rigidBody.velocity.y = this.jumpPower
                this.transform.position.y -= 1
            }
        }

        // Set to false until reset to true by onCollisionStay
        this.onGround = false

        // Update camera
        Camera.main.transform.position = this.transform.position.clone()
    }
}