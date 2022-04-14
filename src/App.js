import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      Counter: { counter }

      <button onClick={() => {setCounter(counter + 1)}}>Increment</button>
      <button onClick={() => {setCounter(counter - 1)}}>Decrement</button>
    </div>
  );
}

export default App;
