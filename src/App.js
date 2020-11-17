import react from 'react';
import BasicRoute from './view/layout/BasicRoute';
import {BrowserRouter} from 'react-router-dom'
import './App.less';
class App extends react.Component {
    render() {
        return (          
          <BrowserRouter>
              <div className="App">
                  <BasicRoute/>
              </div>
          </BrowserRouter>
        )
    };
   
  
}

export default App;
