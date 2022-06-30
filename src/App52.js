import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import Navbar52 from "./component/Navbar52";
import User51 from "./component/User51";
import "./App.css"
import Filter from "./component/Filter";
import Contact from "./component/Contact";
import Company from "./component/Company";
import Channel from "./component/Channel";
import Other from "./component/Other";
import Login from "./component/Login";
import Protected from "./component/Protected";

export default function AppVid48() {
  return (
    <div>
      <BrowserRouter>
      <Navbar52 />
        <Routes>
          <Route path="/" element={<Protected Cmp={Home} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/filter" element={<Protected Cmp={Filter} />} />
          <Route path="/about" element={<Protected Cmp={About} />} />
          <Route path="/user51/:name" element={<User51 />} />
          <Route path="/*" element={<Navigate to="/" />}/>
          <Route path="/contact/" element={<Contact />}>
            <Route path="company" element={<Company />}/>
            <Route path="channel" element={<Channel />}/>
            <Route path="other" element={<Other />}/>
          </Route>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
}
