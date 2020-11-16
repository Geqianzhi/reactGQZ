import react from 'react';
import BasicRoute from './view/layout/BasicRoute'
import './App.less';
class App extends react.Component {
    render() {
        return (          
          <div className="App">
              <BasicRoute/>
          </div>
        )
    };
   
  
}

export default App;
