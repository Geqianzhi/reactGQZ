import React from 'react';
import './App.scss';
import { Button,Input,DatePicker } from 'antd'
function App(){
  const dataChange=(date, dateString)=>{
    console.log(date, dateString)
  }
  return (
    <div >
      <Button type="primary">夏天凿冰吃瓜，冬天围炉取暖</Button>
      <Input placeholder="Basic usage" />
      <DatePicker onChange={dataChange} picker="month" />
    </div>
  );
}

export default App;
