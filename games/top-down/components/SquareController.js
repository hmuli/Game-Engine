class SquareController extends Component {
    speed = 100
    isGrounded = false
    rigidBody

    start() {
        this.isGrounded = false
        this.lastJumpTime = -100
        this.rigidBody = this.gameObject.getComponent(RigidBody)
    }

    fixedUpdate() {
        if (Input.keysDown.includes("ArrowLeft"))
            this.transform.position.x = this.transform.position.x - Time.deltaTime * this.speed
        
        // Go right
        if (Input.keysDown.includes("ArrowRight"))
            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.speed

        this.isGrounded = false
    }

    update() {
        
        // Go up
        if (Input.keysDown.includes("Space") && this.isGrounded) {
            this.rigidBody.velocity.y = -100
            this.lastJumpTime = Time.time
        }
        
        if (Input.keysDown.includes("Space") && Time.time - this.lastJumpTime < 0.3) {
            this.rigidBody.velocity.y = -100
        }
    }

    onTriggerStay(other, minimumTransformVector) {
        if (other.name == "CoinGameObject") {
            other.destroy()
        }
    }

    onCollisionStay(other, minimumTransformVector) {
        if (minimumTransformVector.y < 0 && this.rigidBody.velocity.y > 0) {
            this.rigidBody.velocity.y = 0
            this.isGrounded = false
        }

        if (minimumTransformVector.y > 0 && this.rigidBody.velocity.y > 0) {
            this.rigidBody.velocity.y = 0
        }
    }
}