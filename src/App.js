import React, { useState, useEffect } from "react";
import "tailwindcss/tailwind.css";

//using componentDidMount and componentDidUpdate to show differences
//between using this and next lesson: useEffect.  useEffect is cleaner, 
//better code to use.
// class App extends Component {

//   state = {
//     count: 0
//   };
//  increment = () => {
//     this.setState({
//       count: this.state.count + 1
//     });
//   };
//  decrement = () => {
//     this.setState({
//       count: this.state.count - 1
//     });
//   };

//   componentDidMount() {
//     document.title = `Clicked ${this.state.count} times.`
//     //this only runs the very first time, but when state is updated,
//     //you would have to use componentDidUpdate
//   };
//   componentDidUpdate() {
//     document.title = `Clicked ${this.state.count} times.`
//   };
//   //these changes can be seen in the title(in header) of the document.

// render()  {
//     return (
//       <div >
//         <div><h2>Counter App</h2></div>
//         <div style={{paddingLeft:10, paddingRight:10, paddingTop:4, paddingBottom:4, margin:20}}><button onClick={this.increment}>Increase Counter</button></div>
//         <div style={{paddingLeft:10, paddingRight:10, paddingTop:4, paddingBottom:4, margin:20}}><button onClick={this.decrement}>Decrease Counter</button></div>
//         <div>Clicked {this.state.count} times.</div>
//       </div>

//     )};
// }

// export default App;















const App = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  };

  const decrement = () => {
    setCount(count - 1)
  };

  useEffect(() => {
    document.title = `Clicked ${this.state.count} times.`
  });
  //replaces componentDidMount and componentDidUpdate with only 1 method needing to be used.


  return (

    <div >
      <div><h2>Counter App</h2></div>
      <div style={{paddingLeft:10, paddingRight:10, paddingTop:4, paddingBottom:4, margin:20}}>
        <button onClick={increment}>
          Increase Counter
        </button></div>
      <div style={{paddingLeft:10, paddingRight:10, paddingTop:4, paddingBottom:4, margin:20}}>
        <button onClick={decrement}>
          Decrease Counter
        </button></div>
      <div>Clicked {count} times.</div>
    </div>

  );
};

export default App;