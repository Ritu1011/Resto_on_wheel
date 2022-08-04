import { Link, useNavigate } from "react-router-dom";
import React from 'react'
import logo from "../img/logo.png"
import '../App.css';
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
// FaShoppingCart
import Serachbar from "./Serachbar";
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  const navigate=useNavigate()

  const handleName = (e) => {
    // e.preventDefault();
      navigate("/")
    localStorage.removeItem("user_login");
    window.location.reload();
  }

    
  
  return (
    <>
    <nav >
    <div className="left_nav">
     <Link to="/home"> <img className="logo" src={logo} alt="" /></Link>
    </div>
    <div>
     <Serachbar></Serachbar>
    </div>
    <div className="right_nav">
    <Link to="/menupage" className="Link">Menu</Link>
    <Link to="/location" className="Link">Location</Link>
    <Link to="/cart" className="Link"><FaShoppingCart style={{color:"#f1492c",marginTop:"5px"}}></FaShoppingCart></Link>
    
   <button className="Link2 nav_button" onClick={handleName}>Sign out</button>
     
    </div>
      </nav>
    </>
  )
}
// color: #dc543c;
export default Navbar
