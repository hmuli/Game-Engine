class PlayerCharacter extends Component {

    draw(ctx) {
        let position = this.transform.position
        let scale = this.transform.scale

        ctx.save()

        ctx.translate(position.x, position.y)
        ctx.scale(scale.x, scale.y)

        // Body
        ctx.beginPath()
        ctx.lineTo(0, 0)
        ctx.lineTo(0, 80)
        ctx.lineTo(80, 80)
        ctx.lineTo(80, 0)

        ctx.fillStyle = "rgb(0, 80, 255)"
        ctx.fill()

        // Left eye
        ctx.beginPath()
        ctx.lineTo(30, 10)
        ctx.lineTo(30, 40)
        ctx.lineTo(40, 40)
        ctx.lineTo(40, 10)

        ctx.fillStyle = "white"
        ctx.fill()

        // Right eye
        ctx.beginPath()
        ctx.lineTo(60, 10)
        ctx.lineTo(60, 40)
        ctx.lineTo(70, 40)
        ctx.lineTo(70, 10)

        ctx.fillStyle = "white"
        ctx.fill()

        // Smile (1)
        ctx.beginPath()
        ctx.lineTo(20, 50)
        ctx.lineTo(30, 60)
        ctx.lineTo(40, 60)
        ctx.lineTo(30, 50)

        ctx.fillStyle = "black"
        ctx.fill()

        // Smile (2)
        ctx.beginPath()
        ctx.lineTo(20, 50)
        ctx.lineTo(30, 60)
        ctx.lineTo(30, 60)
        ctx.lineTo(40, 50)

        ctx.fillStyle = "black"
        ctx.fill()

        // Smile (3)
        ctx.beginPath()
        ctx.lineTo(40, 70)
        ctx.lineTo(30, 60)
        ctx.lineTo(70, 60)
        ctx.lineTo(40, 70)

        ctx.fillStyle = "black"
        ctx.fill()

        // Hair (1)
        ctx.beginPath()
        ctx.lineTo(0, 0)
        ctx.lineTo(90, 0)
        ctx.lineTo(100, 10)
        ctx.lineTo(0, 10)

        ctx.fillStyle = "black"
        ctx.fill()

        // Hair (2)
        ctx.beginPath()
        ctx.lineTo(0, 10)
        ctx.lineTo(90, 20)
        ctx.lineTo(80, 0)

        ctx.fillStyle = "black"
        ctx.fill()

        // Hair (3)
        ctx.beginPath()
        ctx.lineTo(0, 0)
        ctx.lineTo(0, 30)
        ctx.lineTo(30, 0)

        ctx.fillStyle = "black"
        ctx.fill()

        ctx.restore()
    }
}