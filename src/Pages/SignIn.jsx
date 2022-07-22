import React from 'react'
import logo from "../img/logo.png"
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
import {  toast } from 'react-toastify';
import { useState } from 'react';
const SignIn = () => {
  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    date: "",
    password: ""
    
})
const navigate=useNavigate()
const [data,setData] = useState([]);
console.log(inpval);
const getdata = (e) => {
  // console.log(e.target.value);
   const { value, name } = e.target;
  // console.log(value,name);
       setInpval(() => {
      return {
          ...inpval,
          [name]: value
      }
  })
}
const addData = (e) => {
  e.preventDefault();

  const { name, email, date, password} = inpval;

  if (name === "") {
    alert('name field is requred!');
      
  } 
  else if (email === "") {
    alert('email field is requred');
      } 
  else if (!email.includes("@")) {
      alert('plz enter valid email addres');
  } 
  else if (password === "") {
       alert('password field is requred')
  } else if (password.length < 5) {
      alert("password should  have atleast 5 char")
  } 

  else {
   console.log("data added succesfully");
   alert("singn In successfully")
   localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));
   navigate("/login")
  }
 
}

  return (
    <>
    <form className='loginBox'>
      <img className='.loginBox_img' src={logo} alt="" style={{wigth:"100px",height:"100px",marginBottom:"",margin:" 30px auto  "}}/>
      <input type="text" placeholder='Name....' name='name' onChange={getdata}/>
      <input type="email" placeholder='Email....'  name='email' onChange={getdata}/>
      <input type="password" placeholder='Password' name='password' onChange={getdata}/><br />
      


      <button className="login_btn" variant="primary" onClick={addData} type="submit"> Submit</button>
      <p> <Link to="/login" className='sign_link'> Already have an account </Link></p>
      <div style={{display:"flex"}} className="google"> <p>

      Continue With Google 
        </p> 
      <img src="https://red-onion-food.netlify.app/static/media/g.3e6e2816.svg" alt="" /></div>
    </form>
    </>
  )
}

export default SignIn