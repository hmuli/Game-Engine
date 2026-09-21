class WorldObject extends GameObject {
    constructor() {
        super("World")
        this.addComponent(new WorldSurface())
    }
}