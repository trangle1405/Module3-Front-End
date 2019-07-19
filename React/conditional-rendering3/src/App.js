import React,{Component} from 'react';
import './App.css';

class App extends Component{
  constructor(){
    super()
    this.state = {
      unreadMessages : ["u"]
    }
  }
render(){
  return(
    <div>
      {
        this.state.unreadMessages.length >0 &&
        <h2> ban co {this.state.unreadMessages.length} thu chua doc!</h2>
      }
    </div>
  )
}

}

export default App;
