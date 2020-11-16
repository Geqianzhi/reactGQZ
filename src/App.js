import react ,{Suspense}from 'react';
import {Switch,BrowserRouter} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './router'
import './App.less';
class App extends react.Component {
    render() {
        return (          
          <div className="App">
              <BrowserRouter>
                <Switch>
                  <Suspense fallback={<div>loading</div>}>
                      {renderRoutes(routes)}
                  </Suspense>
                </Switch>
              </BrowserRouter>
          </div>
        )
    };
   
  
}

export default App;
