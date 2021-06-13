import { useState, useEffect, useRef } from "react";
import "../Styles/PaintGrid.css";

const PaintGrid = () => {
    // States
    const [painting, setPainting] = useState(false);
    const [grid, setGrid] = useState('');
    const canvas = useRef();

    // Load Component & set Grid
    useEffect(() => {
        setGrid(canvas.current.getContext('2d'))
    }, []);

    // Functions
    const startPainting = (event) => {
        setPainting(true);
        draw(event);
    }

    const stopPainting = () => {
        setPainting(false);
        grid.beginPath();
    }

    const draw = (event) => {
        if (!painting) return;
        grid.lineWith = 100;
        grid.lineCap = 'square';
        grid.lineTo(event.clientX, event.clientY);
        grid.stroke();
    }

    return (
        <div className="grid">
            <canvas ref={canvas} onMouseMove={draw} onMouseDown={startPainting} onMouseUp={stopPainting} width="500px" height="500px"></canvas>
        </div >
    )
}

export default PaintGrid;