//import logo from './logo.svg';
import React from 'react';
import './App.css';

const styles = {
  error: {
    color:"blue"
  }
}

function App() {
  const [count, setCount] = React.useState(0);
  const [error, setError] = React.useState(true);

  const DecrementFunc = () => {
    if(count !== 0){
      setCount(count-1)
    } else {
      setError(false)
    }
  }

  const IncFunct = () => {
    if(!error){
      setError(!error)
      setCount(count + 1)
    } else {
      setCount(count + 1)
    }
  }
  return (
    <div className="App" data-test="component-app">
      <h1>Counter Application</h1>
      <h3 data-test="counter-display">The current value is:&nbsp; 
        <span data-test="count">{count}</span>
      </h3>
      <button data-test="increment-button" onClick={IncFunct}>Increment</button>
      <button data-test="decrement-button" onClick={DecrementFunc}>Decrement</button>
      <br/>
      <span className={error ? "hidden" : ""} data-test="error-message" style={styles.error}>Can not go below 0</span>
    </div>
  );
}

export default App;
