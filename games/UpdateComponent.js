class UpdateComponent extends Component {
    timeSinceLastLaser

    start() {
        this.timeSinceLastLaser = 0
    }

    update() {
        this.timeSinceLastLaser += 1

        // Movement
        if (Input.keysDown.includes("ArrowLeft")) {
            // Go left
            this.transform.position.x = this.transform.position.x - 2
        }
        
        if (Input.keysDown.includes("ArrowRight")) {
            // Go right
            this.transform.position.x = this.transform.position.x + 2
        }
        
        if (Input.keysDown.includes("ArrowUp")) {
            // Go up
            this.transform.position.y = this.transform.position.y - 2
        }
        
        if (Input.keysDown.includes("ArrowDown")) {
            // Go down
            this.transform.position.y = this.transform.position.y + 2
        }

        if (this.timeSinceLastLaser > 2) {
            this.timeSinceLastLaser = 0
            instantiate(new LaserGameObject(), this.transform.position.clone())
        }
    }
}