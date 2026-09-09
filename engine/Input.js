class Input {
    static keysDown = []

    static keydown(event) {
        // Do no repeat input of the same key
        if (!Input.keysDown.includes(event.code)) {
            Input.keysDown.push(event.code)
        }
    }

    static keyup(event) {
        // Remove released key from array
        let index = Input.keysDown.indexOf(event.code)
        Input.keysDown.splice(index, 1)
    }
}