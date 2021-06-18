import React, { Component } from "react";
import "tailwindcss/tailwind.css"



class App extends Component {
  
  state = {
    count: 0
  };
 increment = () => {
    this.setState({
      count: this.state.count + 1
    });
  };
 decrement = () => {
    this.setState({
      count: this.state.count - 1
    });
  };

render()  {
    return (
      <div >
        <div><h2>Counter App</h2></div>
        <div style={{paddingLeft:10, paddingRight:10, paddingTop:4, paddingBottom:4, margin:20}}><button onClick={this.increment}>Increase Counter</button></div>
        <div style={{paddingLeft:10, paddingRight:10, paddingTop:4, paddingBottom:4, margin:20}}><button onClick={this.decrement}>Decrease Counter</button></div>
        <div>Clicked {this.state.count} times.</div>
      </div>

    )};
}

export default App;
