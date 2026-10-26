class Input {
    static keysDown = []
    static keysDownThisFrame = []
    static keysUpThisFrame = []

    static mouseButtonsDown = []
    static mouseButtonsDownThisFrame = []
    static mouseButtonsUpThisFrame = []

    static mousePosition
    static mousePositionLastFrame
    static mouseDelta

    static mousemove(event) {
        if (Input.mousePosition) {
            Input.mousePositionLastFrame = Input.mousePosition
        }
        Input.mousePosition = new Vector2(event.clientX, event.clientY)
        
        if (Input.mousePositionLastFrame) {
            Input.mouseDelta = Input.mousePosition.minus(Input.mousePositionLastFrame)
        }
    }

    static mousedown(event) {
        if (!Input.mouseButtonsDown.includes(event.code)) {
            Input.mouseButtonsDown.push(event.code)
            Input.mouseButtonsDownThisFrame.push(event.code)
        }
    }

    static mouseup(event) {
        if (!Input.mouseButtonsDown.includes(event.code)) {
            Input.mouseButtonsDown.splice(index, 1)
            Input.mouseButtonsUpThisFrame.push(event.code)
        }
    }

    static keydown(event) {
        // Do no repeat input of the same key
        if (!Input.keysDown.includes(event.code)) {
            Input.keysDown.push(event.code)
            Input.keysDownThisFrame.push(event.code)
        }
    }

    static keyup(event) {
        // Remove released key from array
        let index = Input.keysDown.indexOf(event.code)
        Input.keysDown.splice(index, 1)
        Input.keysUpThisFrame.push(event.code)
    }

    static update() {
        Input.keysDownThisFrame = []
        Input.keysUpThisFrame = []
        Input.mouseButtonsDownThisFrame = []
        Input.mouseButtonsUpThisFrame = []
    }
}