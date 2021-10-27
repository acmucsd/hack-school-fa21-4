import React, { useState } from 'react'

const FunctionalCounter = (props) => {

  const [count, setCount] = useState(0)

  const decrement = () => {
    setCount(count - 1)
  }

  const increment = () => {
    setCount(count + 1)
  }

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={decrement}>{props.decrementLabel}</button>
        <button onClick={increment}>{props.incrementLabel}</button>
    </div>
  )
}

export default FunctionalCounter