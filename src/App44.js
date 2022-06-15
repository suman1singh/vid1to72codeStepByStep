import React, {useState} from 'react'

export default function App44() {
    const [val,setVal]=useState("84651386975\
    46")
    const [item,setItem]=useState("")
  return (
    <div>
        <h1>Controlled component</h1>
        <input type="text" value={val} onChange={(e)=>setVal(e.target.value)} />
        <input type="text" defaultValue="5258745" />
        <h3>
            Value {val}
        </h3>
        <input type="text" />
    </div>
  )
}
