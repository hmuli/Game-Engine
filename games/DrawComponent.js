class DrawComponent extends Component {
    
    draw(ctx) {
        let position = this.gameObject.components[0].position

        ctx.save()

        ctx.translate(position.x, position.y)

        ctx.lineTo(0, 0)
        ctx.lineTo(40, 60)
        ctx.lineTo(-40, 60)

        ctx.fillStyle = "black"
        ctx.fill()

        ctx.restore()
    }
}