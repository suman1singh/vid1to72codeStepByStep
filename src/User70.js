import React, { useEffect, useRef } from 'react'

export default function User70(props) {
  const lastVal=useRef();
  useEffect(()=>{
    lastVal.current=props.countInc
    console.log(lastVal.current)
  })
  const previousProps=lastVal.current
  return (
    <div>
        <h1>Current Value:-{props.countInc}</h1>
        <h2>Previous Value:-{previousProps}</h2>
    </div>
  )
}
