import React from 'react'
import { Link } from 'react-router-dom'

export default function Page404() {
  return (
    <div>
        <h1>Page404</h1>
        <p>Invalid URL</p>
        <Link to="/">Go to Home Page</Link>
    </div>
  )
}
