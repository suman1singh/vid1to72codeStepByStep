import React, { useRef } from 'react'

export default function App42() {
    let inputRef=useRef(null)
    function handleInput() {
        console.log("function call")
        inputRef.current.value="200"
        inputRef.current.focus();
        inputRef.current.style.color="pink"
        inputRef.current.style.display="none"
    }
  return (
    <div>
        <h1>useRef in React</h1>
        <input type="text" ref={inputRef}/>
        <button onClick={handleInput}> handleInput </button>
    </div>
  )
}
