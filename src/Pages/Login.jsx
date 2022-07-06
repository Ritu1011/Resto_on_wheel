import React from 'react'
import logo from "../img/logo.png"
import { Link } from 'react-router-dom'
import "./Login.css"
const Login = () => {
  return (
    <>
    <div className='loginBox'>
      <img className='.loginBox_img' src={logo} alt="" style={{wigth:"100px",height:"100px",marginBottom:"",margin:" 30px auto  "}}/>
     
      <input type="text" placeholder='Email....'/>
      <input type="text" placeholder='Password'/><br />
      
      <button className="login_btn">Log In</button>
      <p>Don't have an account? <Link to="/signin" className='sign_link'> Sign up </Link></p>
      <div style={{display:"flex"}} className="google"> <p>

      Continue With Google 
        </p> 
      <img src="https://red-onion-food.netlify.app/static/media/g.3e6e2816.svg" alt="" /></div>
    </div>
    </>
  )
}

export default Login