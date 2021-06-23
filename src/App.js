import { useState, useEffect, useRef } from "react";
import './App.css';
import PaintGrid from './Components/PaintGrid';
import Bar from './Components/Bar';
function App() {
  // States
  const [painting, setPainting] = useState(false);
  const [grid, setGrid] = useState('');
  const [paintColor, setPaintColor] = useState('#000000')
  const canvas = useRef();

  // Load Component & set Grid
  useEffect(() => {
    setGrid(canvas.current.getContext('2d'));
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
    const currentPositionX = event.clientX - canvas.current.offsetLeft;
    const currentPositionY = event.clientY - canvas.current.offsetTop;
    grid.lineWith = 100;
    grid.lineCap = 'square';
    grid.strokeStyle = paintColor;
    grid.lineTo(currentPositionX, currentPositionY);
    grid.stroke();
  }

  const paintingColor = (event) =>{
    setPaintColor(event.target.value);
  }
  return (
    <div className="App">
      <div className="center">
        <Bar paintingColor={paintingColor} paintColor={paintColor}/>
        <PaintGrid startPainting={startPainting} stopPainting={stopPainting} draw={draw} canvas={canvas}/>
      </div>
    </div>
  );
}

export default App;
