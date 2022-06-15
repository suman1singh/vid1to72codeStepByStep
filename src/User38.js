import React from 'react' 

export default function User38(props) {
    const data={name:"Singh Suman", email:"ecesuman132@gmail.com"}
  return (
    <div>
        <h2>User Name:</h2>
        <button onClick={()=>props.alert(data)} >click me</button>
    </div>
  )
}
