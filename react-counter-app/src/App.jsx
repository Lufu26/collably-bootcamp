import React, { useState } from "react";
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };

  return (
     <div style={{textAlign: 'center', marginTop: '50px'}}>
      <h1>React Counter</h1>
      
      <p style={{fontSize: '48px'}}>{count}</p>
      <div>
        <button onClick={handleDecrement} style={{marginRight: '10px'}}>Decrement</button>
        <button onClick={handleIncrement}>Increment</button>
      </div>
     </div>
  );
}

export default App;