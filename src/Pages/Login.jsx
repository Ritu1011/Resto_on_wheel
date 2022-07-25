import React from 'react'
import logo from "../img/logo.png"
import { Link, useNavigate } from 'react-router-dom'
import "./Login.css"
import { useState } from 'react'
const Login = () => {
  const [inpval, setInpval] = useState({
      email: "",
      password: ""
  })
var navigate=useNavigate()
  const [data, setData] = useState([]);
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

    const getuserArr = localStorage.getItem("useryoutube");
    console.log(getuserArr);

    const { email, password } = inpval;
   
   if (email === "") {
      alert('email field is requred');
        } 
    else if (!email.includes("@")) {
        alert('plz enter valid email addres');
    } 
    else if (password === "") {
         alert('password field is requred')
    } else if (password.length < 5) {
        alert("password should  have atleast 5 char")
    }  else {

        if (getuserArr && getuserArr.length) {
            const userdata = JSON.parse(getuserArr);
            const userlogin = userdata.filter((el, k) => {
                return el.email === email && el.password === password
            });

            if (userlogin.length === 0) {
                alert("invalid details")
            } else {
             localStorage.setItem("user_login", JSON.stringify(userlogin))
             alert("user login successfully");
                navigate("/home")
            }
        }
    }

}

  return (
    
    <>
    <form className='loginBox'>
      <img className='.loginBox_img' src={logo} alt="" style={{wigth:"100px",height:"100px",marginBottom:"",margin:" 30px auto  "}}/>
     
      <input type="email" placeholder='Email....' name='email' onChange={getdata}/>
      <input type="password" placeholder='Password' name='password' onChange={getdata}/><br />
      
      <button className="login_btn" variant="primary" onClick={addData} type="submit">Log In</button>
      <p>Don't have an account? <Link to="/" className='sign_link'> Sign up </Link></p>
      <div style={{display:"flex"}} className="google"> <p>

      Continue With Google 
        </p> 
      <img src="https://red-onion-food.netlify.app/static/media/g.3e6e2816.svg" alt="" /></div>
    </form> 
    </>
  )
}

export default Login