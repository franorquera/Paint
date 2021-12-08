import "../Styles/PaintGrid.css";

const PaintGrid = ({ startPainting, stopPainting, draw, canvas}) => {
    return (
        <canvas className="grid" ref={canvas} onMouseMove={draw} onMouseDown={startPainting} onMouseUp={stopPainting} width="1190" height="950"></canvas>
    )
}

export default PaintGrid;