class PlayerObject extends GameObject {
    constructor() {
        super("Player", [], "characters")
        this.addComponent(new PlayerController()) // Input
        this.addComponent(new PlayerCharacter()) // Avatar
    }
}