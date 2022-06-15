import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Home Page...</h1>
      <p>This is home page of our awesome app</p>
      <p>Here we are learning about router</p>
      <Link to="/about">Go to About page</Link>
    </div>
  );
}
