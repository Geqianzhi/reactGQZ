import react from 'react';
import {ThemeContext, themes} from './context/context';
import ToolBar from './components/ToolBar';
import TabelTel from './components/TabelTel'
import './App.less';
class App extends react.Component {
    constructor(){
      super();
      this.state = {
        theme:themes.light
      }
    };
    toggleTheme = (v)=>{
      console.log(v)
      this.setState(state => (
        {
          theme:
            state.theme === themes.dark
            ? themes.light
            : themes.dark,
        }
      ))
    }
    render() {
        return (
          
          <div className="App">
              <ThemeContext.Provider value={this.state.theme}>
                  <ToolBar changetheme={this.toggleTheme.bind(this,'11111111')} />
              </ThemeContext.Provider>
              <TabelTel/>
          </div>
        )
    };
   
  
}

export default App;
