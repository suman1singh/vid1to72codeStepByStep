import React from 'react'
import { useParams } from 'react-router-dom'

export default function User51() {
  const paramsr = useParams();
  const {name}= paramsr;
  console.log(name)
  return (
    <div>
        <h1>This is {name}'s Page</h1>
    </div>
  )
}
