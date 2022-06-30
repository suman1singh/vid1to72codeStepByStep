import React, { useState } from 'react'

export default function App65() {
    const [name, setName]=useState("");
    const [age, setAge]=useState("");
    const [count, setCount]=useState("");

    function saveUser() {
        // console.log({name, age, count});
        let data={name, age, count}
        fetch("https://api.nationalize.io/?name=nathaniel",{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((res)=>{
            // console.log("result",res);
            res.json().then((resp)=>{
                console.log("resp",resp)
            })
        })
    }
  return (
    <div>
        <h1>
            POST API Example
        </h1>
        <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} name="name"/><br /><br />
        <input type="text" value={age} onChange={(e)=>{setAge(e.target.value)}} name="age"/><br /><br />
        <input type="text" value={count} onChange={(e)=>{setCount(e.target.value)}} name="count"/><br /><br />
        <button onClick={saveUser} type="button">Save new User</button>
    </div>
  )
}
