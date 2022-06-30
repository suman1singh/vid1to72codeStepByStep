import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Home() {
  const location=useLocation();
  console.log(location)
  const navgt=useNavigate();
  const navToPage=()=>{
   let x=false;
   if(x){
    navgt('/about')
   } else {
    navgt('/filter')
   }
  }
  const navToPageurl=(url)=>{
     navgt(url)
   }
  return (
    <div>
      <h1>Home Page...</h1>
      <p>This is home page of our awesome app</p>
      <p>Here we are learning about router</p>
      <Link to="/about">Go to About page</Link><br />
      <button onClick={()=>navgt('/about')}>Go to About page</button><br />
      <button onClick={()=>navgt('/filter')}>Go to Filter page</button><br />
      <button onClick={()=>navToPage()}>Go to About page by function</button><br />
      <button onClick={()=>navToPage()}>Go to Filter page by function</button><br />
      <button onClick={()=>navToPageurl('/about')}>Go to About page by function url</button><br />
      <button onClick={()=>navToPageurl('/filter')}>Go to Filter page by function url</button>
    </div>
  );
}
