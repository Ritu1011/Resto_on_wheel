import { Link } from "react-router-dom";
import React from 'react'
import logo from "../img/logo.png"
import '../App.css';
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const Navbar = () => {
  const [cartCount,setCartCount]=useState(0)
 
        

  
  return (
    <>
    <nav >
    <div className="left_nav">
     <Link to="/"> <img className="logo" src={logo} alt="" /></Link>
    </div>
    <div className="right_nav">
    <Link to="/menupage" className="Link">Menu</Link>
    <Link to="/location" className="Link">Location</Link>
    <Link to="/cart" className="Link">Cart:{cartCount}</Link>
     <Link to="/signIn" className="Link2 nav_button">Sign Up</Link>
     
    </div>
      </nav>
    </>
  )
}
// color: #dc543c;
export default Navbar
