class WorldObject extends GameObject {
    constructor() {
        super("World", ["World"], "world")
        this.addComponent(new WorldSurface())
    }
}