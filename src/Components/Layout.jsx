import React from 'react';
import PageCard from "./Card";
import CanvasBoard from "./Canvas";
import { useSelector } from 'react-redux';
import { fabric } from 'fabric';
function Layout() {
  const canvas = useSelector((state) => state.canvas.canvasInstance);

  const addRect = () => {
    if (canvas) {
      const newRect = new fabric.Rect({
        left: 100,
        top: 200,
        width: 60,
        height: 60,
        fill: 'purple'
      });
      newRect.animate('angle', 45, {
        onChange: canvas.renderAll.bind(canvas)
      });
      canvas.add(newRect);
      canvas.renderAll();
    }
  };
  const addTriangle = () => {
    if (canvas) {
      const newTri = new fabric.Triangle({
        left: 200,
        top: 200,
        width: 60,
        height: 60,
        fill: 'purple',
        selectable:true
      });
      canvas.add(newTri);
      canvas.renderAll();
    }
  };
  const addCircle = () => {
    if (canvas) {
      const newCircle = new fabric.Circle({
        left: 300,
        top: 200,
        radius: 30,
        fill: 'purple',
        selectable: true
      });
      canvas.add(newCircle);
      canvas.renderAll();
    }
  };
  const addImage = () => {
    if (canvas) {
      const imageUrl = 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

      fabric.Image.fromURL(imageUrl, (img) => {
        img.set({
          left: 150,
          top: 150,
          scaleX: 0.5,
          scaleY: 0.5,
          selectable: true,
          flipX:true
        });

        canvas.add(img);
        canvas.renderAll();
      });
    }
  };
  const addText=()=>{
    if (canvas) {
      const text = new fabric.Textbox('Text object, with different properties of font styling.', {
        fontStyle: 'italic',
        fontFamily: 'Delicious',
        stroke: '#ff1318',
        strokeWidth: 1,
        textBackgroundColor: 'rgb(0,200,0)',
        isDesignText:true
      })
      canvas.add(text);
      canvas.renderAll();
    }
  }
  const groupAllObjects = () => {
    if (!canvas) return;

    const objects = canvas.getObjects().concat(); // Clone to avoid live reference

    if (objects.length === 0) return;

    // Remove all objects, but keep canvas settings
    objects.forEach(obj => canvas.remove(obj));

    const group = new fabric.Group(objects, {
      left: 100,
      top: 100,
      selectable: true
    });

    canvas.add(group);
    canvas.setActiveObject(group);
    canvas.renderAll();
  };
  const ungroupObjects = () => {
    if (!canvas) return;

    const activeObject = canvas.getActiveObject();

    if (activeObject && activeObject.type === 'group') {
      const items = activeObject._objects;

      activeObject._restoreObjectsState();
      canvas.remove(activeObject);

      items.forEach(item => {
        canvas.add(item);
      });

      canvas.renderAll();
    }
  };
  const saveCanvas = () => {
    if (canvas) {
      const json = JSON.stringify(canvas.toJSON());
      localStorage.setItem("myCanvas", json);
      alert("Canvas saved!");
      canvas.getObjects().forEach(obj => canvas.remove(obj));
      canvas.renderAll();
    }
  };
  const loadCanvas = () => {
    if (canvas) {
      const saved = localStorage.getItem("myCanvas");
      if (saved) {
        canvas.loadFromJSON(saved, () => {
          canvas.renderAll();
          alert("Canvas loaded!");
        });
      } else {
        alert("No saved canvas found!");
      }
    }
  };
const downloadCanvas=()=>{
  if (canvas) {
    const svg = canvas.toSVG();
  }
}



  return (
    <>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <PageCard
            title={'Shapes'}
            buttons={[
              { btnTitle: "Add Rectangle", AddShape: addRect },
              { btnTitle: "Add Triangle", AddShape: addTriangle },
              { btnTitle: "Add Circle", AddShape: addCircle },
              { btnTitle: "Add Image", AddShape: addImage },
              { btnTitle: "AddText", AddShape: addText },
              { btnTitle: "Group All", AddShape: groupAllObjects },
              { btnTitle: "Ungroup", AddShape: ungroupObjects },
              { btnTitle: "Save Canvas", AddShape: saveCanvas },
              { btnTitle: "Load saved Canvas", AddShape: loadCanvas },
            ]}
          />
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <CanvasBoard />
        </div>
        <PageCard
          title={'Properties'}

        />
      </div>
    </>
  );
}

export default Layout;
