import React from 'react'
import { useParams, useLocation } from 'react-router-dom'

export default function User51() {
  const paramsr = useParams();
  const {name}= paramsr;
  const location=useLocation();
  console.log(location)
  console.log(name)
  return (
    <div>
        <h1>This is {name}'s Page</h1>
    </div>
  )
}
