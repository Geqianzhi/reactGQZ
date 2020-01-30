import React from 'react';
import './App.scss';
import { Button, Pagination} from 'antd';
function App() {
  return (
    <div >
      <Button>夏天凿冰吃瓜，冬天围炉取暖</Button>
      <Pagination showQuickJumper defaultCurrent={2} total={500}  />
    </div>
  );
}

export default App;
