class WorldSurface extends Component {
    
    draw(ctx) {

        let position = this.transform.position

        ctx.save()

        ctx.translate(position.x, position.y)

        ctx.beginPath()
        ctx.lineTo(0, window.innerHeight)
        ctx.lineTo(0, 0)
        ctx.lineTo(window.innerWidth, 0)
        ctx.lineTo(window.innerWidth, window.innerHeight)

        ctx.fillStyle = "green"
        ctx.fill()

        ctx.restore()
    }
}