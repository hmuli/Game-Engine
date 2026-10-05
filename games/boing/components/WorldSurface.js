class WorldSurface extends Component {
    
    draw(ctx) {

        let position = this.transform.position

        ctx.save()

        ctx.translate(position.x, position.y)

        ctx.beginPath()
        ctx.lineTo(0, 300)
        ctx.lineTo(0, 0)
        ctx.lineTo(3000, 0)
        ctx.lineTo(3000, 300)

        ctx.fillStyle = "green"
        ctx.fill()

        ctx.restore()
    }
}