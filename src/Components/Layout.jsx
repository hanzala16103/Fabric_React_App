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

  return (
    <>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <PageCard
            title={'Shapes'}
            buttons={[
              { btnTitle: "Add Rectangle", AddShape: addRect },
              { btnTitle: "Add Triangle", AddShape: addTriangle },
              { btnTitle: "Add Circle", AddShape: addCircle },
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
