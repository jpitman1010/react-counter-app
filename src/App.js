import React, { useState } from "react";
import "tailwindcss/tailwind.css";


const App = () => {

  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1)
  };

  const decrement = () => {
    setCount(count - 1)
  };

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