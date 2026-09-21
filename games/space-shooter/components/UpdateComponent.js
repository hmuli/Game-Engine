class UpdateComponent extends Component {
    timeSinceLastLaser

    start() {
        this.timeSinceLastLaser = 0
    }

    update() {
        this.timeSinceLastLaser += 1

        // Go left
        if (Input.keysDown.includes("ArrowLeft")) {
            this.transform.position.x = this.transform.position.x + Time.deltaTime * this.speed
        
        // Go right
        if (Input.keysDown.includes("ArrowRight")) {
            this.transform.position.x = this.transform.position.x - Time.deltaTime * this.speed
        
        // Go up
        if (Input.keysDown.includes("ArrowUp")) {
            this.transform.position.y = this.transform.position.y - Time.deltaTime * this.speed
        
        // Go down
        if (Input.keysDown.includes("ArrowDown")) {
            this.transform.position.y = this.transform.position.y + Time.deltaTime * this.speed

        // Laser code
        if (this.timeSinceLastLaser > 80) {
            this.timeSinceLastLaser = 0
            instantiate(new LaserGameObject(), this.transform.position.clone())
        }
    }
}