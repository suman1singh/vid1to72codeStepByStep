import React from 'react'
import { useSearchParams } from 'react-router-dom'

export default function Filter() {
    const [searchParams, setSearchParams]=useSearchParams();
    console.warn(searchParams.get('age'))
    console.warn(searchParams.get('city'))
    const age=searchParams.get('age');
    const city=searchParams.get('city');

  return (
    <div>
        <h1>
            This is filters page
        </h1>
        <h3>Age is: {age}</h3>
        <h3>city is: {city}</h3>
        <button onClick={()=>setSearchParams({age:50})} >Set age in query parameter</button> <br />
        <button onClick={()=>setSearchParams({city:'Delhi', age:60})} >Set city in query parameter</button> <br />
        <input type="text" onChange={(e)=>setSearchParams({text:e.target.value,age:15})} placeholder="set text to query parameter" />
    </div>
  )
}
