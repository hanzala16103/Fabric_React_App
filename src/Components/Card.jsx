import React from 'react';
import {Button, Card} from 'antd';
function PageCard(props) {
  return (
    <>
      <Card title={props.title} variant="borderless" style={{width: 300,height: '100vh', background: 'rgb(210 209 209)'}}>
        <Button type="primary" onClick={props.AddShape}>
          {props.btnTitle}
        </Button>
      </Card>
    </>
  );
}

export default PageCard;
