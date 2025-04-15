import React, {useEffect} from 'react';
import { fabric } from 'fabric';
import { useDispatch } from 'react-redux';
import { setCanvas } from '../Store/reducers/CanvasSlice';
function CanvasBoard(props) {
  const dispatch = useDispatch();
  const addRectangle=()=>{

  }

  useEffect(() => {

    const fabricCanvas = new fabric.Canvas('app-canvas', {
      width:700,
      height: 500,
      backgroundColor: 'gray',
      selection: true
    });

    dispatch(setCanvas(fabricCanvas));

    fabricCanvas.on('mouse:down', function(options) {
      if (options.target) {
        console.log('an object was clicked! ', options.target.type);
      }
    });
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
