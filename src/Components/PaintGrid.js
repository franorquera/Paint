import "../Styles/PaintGrid.css";

const PaintGrid = ({ startPainting, stopPainting, draw, canvas}) => {
    return (
        <canvas className="grid" ref={canvas} onMouseMove={draw} onMouseDown={startPainting} onMouseUp={stopPainting} width="800px" height="800px"></canvas>
    )
}

export default PaintGrid;