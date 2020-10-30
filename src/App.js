import react from 'react';
import {ThemeContext, themes} from './context/context';
import ToolBar from './components/ToolBar';
import TabelTel from './components/TabelTel';
import {Button} from 'antd';
import './App.less';
class App extends react.Component {
    constructor(){
      super();
      this.state = {
        theme:themes.light,
        arr:[[1,2],[4,5],[7,8]]
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
    transpose = (arr) =>{
        let temp = Array.from({length:arr[0].length},()=>[]);
        for(let i=0,l=arr.length;i<l;i++){
            for(let j =0;j<arr[i].length;j++){
              temp[j].push(arr[i][j])
            }
        }
        console.log(temp)
        return temp;
    }
    render() {
        return (
          
          <div className="App">
              <ThemeContext.Provider value={this.state.theme}>
                  <ToolBar changetheme={this.toggleTheme.bind(this,'11111111')} />
              </ThemeContext.Provider>
              <TabelTel/>
              <Button onClick={this.transpose.bind(this,this.state.arr)}>点击</Button>
          </div>
        )
    };
   
  
}

export default App;
