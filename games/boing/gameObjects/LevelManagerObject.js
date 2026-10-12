class LevelManagerObject extends GameObject {
    constructor() {
        super("LevelManagerObject")
        this.addComponent(new LevelController())
    }
}