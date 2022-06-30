import React, { useState } from 'react'

export default function App69() {
    const [count, setCount]=useState(1)
    function updateCounter()
    {
        // let rand=Math.floor(Math.random()*10)
        // setCount((pre)=>{
        //     console.log(pre);
            // if(pre-rand>5)
            // {
            //     alert("difference is greater than 5")
            // }
            // if(pre<5)
            // {
            //     alert("low value") 
            // }
            // return rand;
            
            for(let i=0;i<5;i++)
            {
                setCount((pre)=>pre+1)
            }
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={updateCounter}>Click me to update counter</button>
    </div>
  )
}
