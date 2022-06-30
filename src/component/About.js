import React from "react";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
      <h1>About page</h1>
      <p>This is about page of our awesome app</p>
      <p>Here we are learning about router</p>
      <Link to="/">Go to Home page</Link>
      <li>
        <Link to="/user51/suman" state={{profession:'engg', age: 25}}>Suman</Link>
      </li>
      <li>
        <Link to="/user51/shree">Shree</Link>
      </li>
    </div>
  );
}
