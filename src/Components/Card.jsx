import React from 'react';
import {Button, Card} from 'antd';
function PageCard(props) {
  const buttons = props.buttons || [];
  return (
    <>
      <Card title={props.title} variant="borderless" style={{width: 300,height: '100vh', background: 'rgb(210 209 209)'}}>
        {buttons.map((button, index) => (
          <Button key={index} type="primary" onClick={button.AddShape} style={{ marginBottom: '10px' }}>
            {button.btnTitle}
          </Button>
        ))}
      </Card>
    </>
  );
}

export default PageCard;
