import React from 'react'
import User38 from './User38'

export default function App38() {
    function parentAlert(item) {
        console.log(item)
        alert(item.email);
    }
  return (
    <div className='App'> 
        <h2>Lifting State Up</h2>
        <User38 alert={parentAlert} />
    </div>
  )
}
