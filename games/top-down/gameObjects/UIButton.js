class UIButton extends RectGameObject {
    constructor() {
        super("UIButton", [], "UI")
        this.addComponent(new Polygon(), {fillStyle: 'green', points: Assets.square, alpha: .5})
        this.transform.useLetterBoxing = false
    }
}