class Scene {
    gameObjects = []

    constructor(backgroundColor) {
        let cameraGameObject = new GameObject("MainCamera", ["MainCamera"])
        cameraGameObject.addComponent(new Camera())
        this.instantiate(cameraGameObject)
        if (backgroundColor) {
            cameraGameObject.getComponent(Camera).backgroundColor = backgroundColor
        }
    }

    instantiate(gameObject, position = new Vector2(0, 0), rotation = 0) {
        this.gameObjects.push(gameObject)
        gameObject.transform.position = position
        gameObject.transform.rotation = rotation
        return gameObject
    }

    start() {
        for (const gameObject of this.gameObjects) {
            gameObject.start()
        }
    }

    update() {

        // Call fixedUpdate before resolving collisions
        for (const gameObject of this.gameObjects) {
            gameObject.broadcastMessage("fixedUpdate")
        }

        // Collider
        const collidable = GameObject.findGameObjectsByType(Collider)

        // Handle mouse collisions
        if (Input.mousePosition) {
            let matrix = new DOMMatrix()
            matrix.translateSelf(Engine.canvas.width/2, Engine.canvas.height/2)

            if (Engine.cameraWidthWorldSpace) {
                const scalar = Engine.cameraWidthInWorldSpace / (Engine.canvas.width - Engine.letterBoxingWidth)
                ctx.scale(1/scalar, 1/scalar)
            }

            matrix.multiplySelf(Camera.main.transform.getWorldMatrix().inverse())

            let worldPositionDOMPoint = matrix.inverse().transformPoint(Input.mousePosition)
            let worldPosition = new Vector2(worldPositionDOMPoint.x, worldPositionDOMPoint.y)
            // console.log(worldPosition)
            for (const gameObject of collidable.filter(c=>c.layer!="UI")) {
                if (Collisions.isCollisionPointPolygon(worldPosition, gameObject)) {
                    gameObject.broadcastMessage("onMouseOver", [])
                }
            }
        }

        // Handle polygon collisions
        const physicalCollisions = []
        for (let i = 0; i < collidable.length; i++) {
            for (let j = i + 1; j < collidable.length; j++) {
                const one = collidable[i]
                const two = collidable[j]

                if (!one.getComponent(RigidBody) && !two.getComponent(RigidBody))
                    continue

                const minimumTransformVector = Collisions.isCollisionPolygonPolygon(collidable[i], collidable[j])
                if (minimumTransformVector) {
                    if (!one.getComponent(Collider).isTrigger && !two.getComponent(Collider).isTrigger) {
                        collidable[i].broadcastMessage("onCollisionStay", [collidable[j], minimumTransformVector])
                        collidable[j].broadcastMessage("onCollisionStay", [collidable[i], minimumTransformVector.scaled(-1)])
                        physicalCollisions.push({one: collidable[i], two: collidable[j], minimumTransformVector})
                    } else {
                        collidable[i].broadcastMessage("onTriggerStay", [collidable[j], minimumTransformVector])
                        collidable[j].broadcastMessage("onTriggerStay", [collidable[i], minimumTransformVector.scaled(-1)])
                    }
                }
            }
        }

        // Handle physics
        for (const physicalCollision of physicalCollisions) {
            if (physicalCollision.one.getComponent(RigidBody)) {
                physicalCollision.one.transform.position.plusEquals(physicalCollision.minimumTransformVector)
            }

            if (physicalCollision.two.getComponent(RigidBody)) {
                physicalCollision.two.transform.position.plusEquals(physicalCollision.minimumTransformVector.scaled(-1))
            }
        }

        for (const gameObject of this.gameObjects) {
            gameObject.update()
        }

        // Exclude destroyed gameObjects from scene
        let temp = []
        for (const gameObject of this.gameObjects) {
            if (!gameObject.markForDestroy)
                temp.push(gameObject)
        }
        this.gameObjects = temp
    }

    draw(ctx) {
        ctx.fillStyle = Camera.main.backgroundColor
        ctx.fillRect(0, 0, Engine.canvas.width, Engine.canvas.height)

        Engine.letterBoxingWidth = 0
        Engine.letterBoxingHeight = 0
        if (Engine.aspectRatio) {
            const currentAspectRatio = Engine.canvas.width / Engine.canvas.height
            if (Engine.aspectRatio > currentAspectRatio) {
                const maxHeight = Engine.canvas.width / Engine.aspectRatio
                Engine.letterBoxingHeight = Engine.canvas.height - maxHeight
            } else {
                const maxWidth = Engine.aspectRatio * Engine.canvas.height
                Engine.letterBoxingWitdh = Engine.canvas.width - maxWidth
            }
        }

        // Start camera code
        ctx.save()
        ctx.translate(Engine.canvas.width / 2, Engine.canvas.height / 2)
        
        if (Engine.cameraWidthWorldSpace) {
            const scalar = Engine.cameraWidthInWorldSpace / (Engine.canvas.width - Engine.letterBoxingWidth)
            ctx.scale(1/scalar, 1/scalar)
        }

        ctx.setTransform(ctx.getTransform().multiply(Camera.main.transform.getWorldMatrix().inverse()))

        for (const layer of Engine.layers.filter(l=>l!="UI")) {
            for (const gameObject of this.gameObjects.filter(go=>go.layer == layer)) {
                gameObject.draw(ctx)
            }
        }

        ctx.restore()
        // Stop camera code

        Engine.letterBoxingHeight = 100
        Engine.letterBoxingWidth = 100

        // Draw letterboxes
        ctx.fillStyle = "black"
        ctx.fillRect(0, 0, Engine.canvas.width, Engine.letterBoxingHeight/2)
        ctx.fillRect(0, Engine.canvas.height - Engine.letterBoxingHeight/2, Engine.canvas.width, Engine.letterBoxingHeight/2)
        
        ctx.fillRect(0, 0, Engine.letterBoxingWidth/2, Engine.canvas.height)
        ctx.fillRect(Engine.canvas.width - Engine.letterBoxingWidth/2, 0, Engine.letterBoxingWidth/2, Engine.canvas.height)

        //UI Layer
        //ctx.translate(0, Engine.letterBoxingHeight/2)
        for (const gameObject of this.gameObjects.filter(go=>go.layer == "UI")) {
            gameObject.draw(ctx)
        }
    }
}

function instantiate(gameObject, position = new Vector2(0, 0), rotation = 0) {
    return SceneManager.currentScene.instantiate(gameObject, position, rotation)
}