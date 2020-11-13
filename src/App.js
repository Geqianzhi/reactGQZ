import react ,{Suspense}from 'react';
import {HashRouter,Switch} from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './router'
import './App.less';
class App extends react.Component {
    render() {
        return (          
          <div className="App">
              <HashRouter>
                <Switch>
                  <Suspense fallback={<div>loading</div>}>
                      {renderRoutes(routes)}
                  </Suspense>
                </Switch>
              </HashRouter>
          </div>
        )
    };
   
  
}

export default App;
