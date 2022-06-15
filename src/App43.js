import React,{ useRef }  from 'react'
import User43 from './User43'

export default function App43() {
    let inputRef=useRef(null);
    function updateInput()
    {
        inputRef.current.value="1200"
        inputRef.current.focus();
        // inputRef.current.style.color="pink"
        // inputRef.current.style.display="none"
    }
  return (
    <div>
        <h1>forwardRef in React</h1>
        <User43 ref={inputRef}/>
        <button onClick={updateInput}>Update InputBox</button>
    </div>
  )
}
