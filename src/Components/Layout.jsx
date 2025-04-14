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
            ]}
          />
        <div style={{ flex: 1, display: 'flex', justifyContent: 'center' }}>
          <CanvasBoard />
        </div>
        <PageCard
          title={'Properties'}
          btnTitle=""
          AddShape={() => {}}
        />
      </div>
    </>
  );
}

export default Layout;
