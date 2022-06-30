import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Contact() {
  return (
    <div>
        <h1>Contact us page</h1>
        <h2>Here we have some other business</h2>
        <Link to="company">Company</Link><br />
        <Link to="channel">Channel</Link><br />
        <Link to="other">Other</Link>
        <Outlet />
    </div>
  )
}
