import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./component/About";
import Home from "./component/Home";
import NavBar from "./component/NavBar";
import Page404 from "./component/Page404";
import User51 from "./component/User51";

export default function AppVid48() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/user51/:name" element={<User51 />} />
          <Route path="/*" element={<Navigate to="/" />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
