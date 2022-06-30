import React, { useEffect, useState } from "react";

export default function App63and66() {
  const [data, setData] = useState([]);
  const [name,setName]=useState("");
  const [age,setAge]=useState("");
  const [count,setCount]=useState("");
  useEffect(() => {
    getData()
  }, []);
  function getData(){
    fetch("https://api.agify.io/?name=meelad").then((res) => {
      res.json().then((resp) => {
        console.log("result", resp);
        setData(resp);
        setName(resp.name);
        setAge(resp.age);
        setCount(resp.count);
      })
    })
  }
  function deleteUser(name){
    fetch(`https://api.agify.io/?name=meelad/${name}`,{
      method:'DELETE'
    }).then((result)=>{
      result.json().then((resp)=>{
        console.log(resp)
        getData()
      })
    })
  }
  return (
    <div>
      <h1>1. GET API Call</h1>
      <h1>2. Delete Data with API call</h1>
      <div>
      <h2>Name is {data.name}</h2>
      <h2>Age is{data.age}</h2>
      <h2>Count is{data.count}</h2>
      <button onClick={()=>deleteUser(data.name)} >Delete</button>
      </div>
      <div>
        <input type="text" value={name} /><br />
        <input type="text" value={age} /><br />
        <input type="text" value={count} /><br />
        <button>Update User</button>
      </div>
    </div>
  );
}
