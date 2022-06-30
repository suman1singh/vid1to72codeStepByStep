import React from 'react'
import User70 from './User70'

export default function App70() {
    const [count, setCount]=React.useState(0)
  return (
    <div>
        <User70 countInc={count} />
        <button onClick={()=>setCount(Math.floor(Math.random()*10))}>Update Counter</button>
    </div>
  )
}
