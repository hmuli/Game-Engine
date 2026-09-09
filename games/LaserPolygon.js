class LaserPolygon extends Component {
    
    draw(ctx) {
        let position = this.transform().position

        ctx.save()

        ctx.translate(position.x, position.y)

        ctx.beginPath()
        ctx.lineTo(0, 0)
        ctx.lineTo(20, 30)
        ctx.lineTo(-20, 30)

        ctx.fillStyle = "green"
        ctx.fill()

        ctx.restore()
    }
}