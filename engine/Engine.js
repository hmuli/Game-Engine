class Engine {
    // Static variables
    static canvas
    static ctx
    static layers = ["default", "UI"]

    static start(nextScene, Settings) {
        // Select the canvas element
        Engine.canvas = document.querySelector("#canv")

        // Use 2D context
        Engine.ctx = Engine.canvas.getContext("2d")

        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)
        addEventListener("mousedown", Input.keydown)
        addEventListener("mouseup", Input.keyup)
        addEventListener("mousemove", Input.mousemove)

        SceneManager.nextScene = nextScene

        if (Settings) {
            Engine.layers = Settings.layers
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