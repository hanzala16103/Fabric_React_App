import React, {useRef} from 'react';
import { Card } from 'antd';
import PageCard from "./Card";
import CanvasBoard from "./Canvas";
function Layout() {
  const canvasRef = useRef(null);



  const handleAddShape = () => {

  };

  return (
    <>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <PageCard
          title={'Shapes'}
          btnTitle="Add Rectangle"
          AddShape={handleAddShape}
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
