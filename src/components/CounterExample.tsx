import React from 'react'
import {useState} from 'react'

const CounterExample = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }
    const decrement = () => {
        setCount(count - 1);
    }
  return (
    <div>
          <h1 style={{ fontWeight: "bold" }}>Counter Example</h1>
          <h2>Count: {count}</h2>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default CounterExample
