import React from 'react'
import { useState } from 'react'

export default function StateDemo() {
    const [count, setCount] = useState(0)
    function incrementCount() {
        setCount(count + 1);
    }
    function decrementCount() {
        setCount(count - 1);
    }
  return (
    <div>
        <button onClick={incrementCount}>Increment Count</button>
        <button onClick={decrementCount}>Decrement Count</button>
        <button onClick={() => setCount(0)}>Reset Count</button>
        <p>Count: {count}</p>
    </div>
  )
}
