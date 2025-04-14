import React, {useEffect} from 'react';
import { fabric } from 'fabric';

function CanvasBoard(props) {
  const addRectangle=()=>{

  }

  useEffect(() => {

    const fabricCanvas = new fabric.Canvas('app-canvas', {
      width:700,
      height: 500,
      backgroundColor: 'gray'
    });

    const rect = new fabric.Rect({
      left: 100,
      top: 100,
      fill: 'red',
      width: 50,
      height: 50,
    });
    const circle = new fabric.Circle({
      radius: 20, fill: 'green', left: 190, top: 100
    });
    const triangle = new fabric.Triangle({
      width: 20, height: 30, fill: 'blue', left: 50, top: 100
    });

    fabricCanvas.add(rect,circle,triangle);
    // fabricCanvas.setActiveObject(rect)
    fabricCanvas.renderAll();
    window.canvas=fabricCanvas;

  }, []);
  return (
    <>

        <div style={{ display: 'flex', justifyContent: 'center'}}>
          <canvas
            id='app-canvas'
          />
        </div>
    </>
  );
}

export default CanvasBoard;
