class Engine {
    // Static variables
    static canvas
    static ctx
    static layers = ["default", "UI"]
    static aspectRatio
    static cameraWidthInWorldSpace
    static letterBoxingWidth = 0
    static letterBoxingHeight = 0 

    static start(nextScene, settings) {
        // Select the canvas element
        Engine.canvas = document.querySelector("#canv")

        // Use 2D context
        Engine.ctx = Engine.canvas.getContext("2d")

        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)
        addEventListener("mousedown", Input.keydown)
        addEventListener("mouseup", Input.keyup)
        addEventListener("mousemove", Input.mousemove)
        addEventListener("contextmenu", e=>e.preventDefault())

        SceneManager.nextScene = nextScene

        if (settings) {
            Engine.layers = settings.layers
            Engine.aspectRatio = settings.aspectRatio
            Engine.cameraWidthInWorldSpace = settings.cameraWidthInWorldSpace
        }

        // Run the game loop when possible
        requestAnimationFrame(Engine.gameLoop)
    }

    static gameLoop() {
        SceneManager.update()

        // Update and draw the screen
        Engine.update()
        Engine.draw()

        Time.update()

        // Run the game loop when possible
        requestAnimationFrame(Engine.gameLoop)
    }

    static update() {
        SceneManager.currentScene.start()
        SceneManager.currentScene.update()
    }

    static draw() {
        // Update screen size to match browser window
        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight

        SceneManager.currentScene.draw(Engine.ctx)
    }
}