import React from 'react';
import './App.scss';
import { Button,Input,DatePicker } from 'antd'
function App(){
  function onChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <div >
      <Button type="primary">夏天凿冰吃瓜，冬天围炉取暖</Button>
      <Input placeholder="Basic usage" />
      <DatePicker onChange={onChange} />
    </div>
  );
}

export default App;
