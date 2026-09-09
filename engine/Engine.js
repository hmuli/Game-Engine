class Engine {
    // Static variables
    static canvas
    static ctx
    static currentScene

    static start() {
        // Select the canvas element
        Engine.canvas = document.querySelector("#canv")

        // Use 2D context
        Engine.ctx = Engine.canvas.getContext("2d")

        addEventListener("keydown", Input.keydown)
        addEventListener("keyup", Input.keyup)

        Engine.currentScene.start()

        // Run the game loop when possible
        requestAnimationFrame(Engine.gameLoop)
    }

    static gameLoop() {
        // Update and draw the screen
        Engine.update()
        Engine.draw()

        // Run the game loop when possible
        requestAnimationFrame(Engine.gameLoop)
    }

    static update() {
        Engine.currentScene.update()
    }

    static draw() {
        // Update screen size to match browser window
        Engine.canvas.width = window.innerWidth
        Engine.canvas.height = window.innerHeight
        
        Engine.currentScene.draw(Engine.ctx)
    }
}