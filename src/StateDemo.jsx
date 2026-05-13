import React from 'react'
import { useState, useEffect } from 'react'

export default function StateDemo() {
    const [count, setCount] = useState(0)
    function incrementCount() {
        setCount(count + 1);
    }
    function decrementCount() {
        setCount(count - 1);
    }
    useEffect(()=>{
        if(count % 5 === 0){
            alert("Count is a multiple of 5!");
        }
    },[count])
  return (
    <div>
        <button onClick={incrementCount}>Increment Count</button>
        <button onClick={decrementCount}>Decrement Count</button>
        <button onClick={() => setCount(0)}>Reset Count</button>
        <p>Button clicked:{count}</p>
    </div>
  )
}
