class TextLabel extends Component {
    fillStyle = "black"
    text = "[BLANK]"

    draw(ctx) {
        let position = this.transform.position

        ctx.save()

        // ctx.translate(position.x, position.y)
        // ctx.scale(this.transform.scale.x, this.transform.scale.y)
        // ctx.rotate(this.transform.rotation)

        ctx.fillStyle = this.fillStyle
        ctx.fillText(this.text, 0, 0)

        ctx.restore()
    }
}