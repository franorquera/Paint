import "../Styles/PaintGrid.css";
import React, { Component } from "react";

class PaintGrid extends Component {
    constructor() {
        super()
        this.state = {
            painting: false,
        }
    }

    startPainting = () => {
        this.setState({ painting: true });
    }

    stopPainting = () => {
        this.setState({ painting: false });
    }

    draw = (event) => {
        if (!this.painting) return;
        console.log(event)
    }

    catchMousePosition = (evento) => {
        let positionX = evento.clientX;
        let positionY = evento.clientY;
        let grid = evento.target.getContext('2d');
        grid.beginPath();
        grid.moveTo(100, 100);
        grid.lineTo(120, 140);
        grid.stroke();
        console.log(positionX, positionY);
    }

    render() {
        return (
            <div className="grid">
                <canvas onMouseMove={this.painting && this.draw} onMouseDown={this.startPainting} width="500px" height="500px"></canvas>
            </div>
        )
    }
}

export default PaintGrid;