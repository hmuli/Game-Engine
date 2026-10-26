class ScoreObject extends GameObject {
    constructor() {
        super("ScoreObject", ["Score"], "UI")
        this.addComponent(new TextLabel(), {text: "0 points"})
    }
}