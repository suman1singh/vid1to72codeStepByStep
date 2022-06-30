import React from 'react'
import { Link,NavLink } from 'react-router-dom'

export default function Navbar52() {
  return (
    <div>
        <ul className='navbar52'>
            <li><NavLink className="nav-bar-link" style={({isActive})=>{return {backgroundColor: isActive?'green':'red'}}} to="/">Home</NavLink></li>
            <li><NavLink className="nav-bar-link" style={({isActive})=>{return {backgroundColor: isActive?'green':'red'}}} to="/about">About</NavLink></li>
            <li><NavLink className="nav-bar-link" style={({isActive})=>{return {backgroundColor: isActive?'green':'red'}}} to="/contact">Contact</NavLink></li>
            <li><NavLink className="nav-bar-link" style={({isActive})=>{return {backgroundColor: isActive?'green':'red'}}} to="/filter">Filter</NavLink></li>
            <li><NavLink className="nav-bar-link" style={({isActive})=>{return {backgroundColor: isActive?'green':'red'}}} to="/login">Login</NavLink></li>
        </ul>
    </div>
  )
}
