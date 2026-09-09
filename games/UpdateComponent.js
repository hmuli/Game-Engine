class UpdateComponent extends Component {
    position

    start() {
        this.position = new Vector2(50, 50)
    }

    update() {

        // Movement
        if (Input.keysDown.includes("ArrowLeft")) {
            // Go left
            this.position.x = this.position.x - 2
        }
        
        if (Input.keysDown.includes("ArrowRight")) {
            // Go right
            this.position.x = this.position.x + 2
        }
        
        if (Input.keysDown.includes("ArrowUp")) {
            // Go up
            this.position.y = this.position.y - 2
        }
        
        if (Input.keysDown.includes("ArrowDown")) {
            // Go down
            this.position.y = this.position.y + 2
        }
    }
}