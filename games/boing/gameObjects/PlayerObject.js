class PlayerObject extends GameObject {
    constructor() {
        super()
        this.addComponent(new PlayerController()) // Input
        this.addComponent(new PlayerCharacter()) // Avatar
    }
}