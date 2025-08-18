import './App.css'
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount(count - 1);
  };
  return (
    <>
    <div style={{textAlign: "center", marginTop: "50"}}>
      <h1>React Counter</h1>
      <p style={{font: "48px"}}>{count}</p>
    </div>
    <button onClick={handleDecrement} style={{marginRight: "10px"}}>Decrement</button>
    <button onClick={handleIncrement}>Increment</button>
    </>
  );
}

export default App
