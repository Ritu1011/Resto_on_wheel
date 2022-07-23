import React from 'react'
import { Link } from 'react-router-dom'
import Slide from './Slide'
import AutoPlay from './Slide2';
import Navbar from "./Navbar";


import { Footer } from "./Footer/Footer";
const HomePage = () => {
  return (
    <>
    <Navbar></Navbar>
<Slide></Slide>
<AutoPlay></AutoPlay>
{/* ////////////////////////////////////// */}
 <div className='nav2'>
  <div className='nav2_container'>
    <Link to="/breakfast" className='hover'>Breakfast</Link>
    <Link  to="/home" className='hover'>Lunch</Link>
    <Link  to="/dinner" className='hover'>Dinner</Link>
    <Link  to="/home" className='seeAll'>See All</Link>
  </div>

  </div>
    <div></div>
  <div style={{width:"90%",margin:"auto ",marginLeft:'80px'}}>
    <h1 style={{fontSize:"25px",fontWeight:"500",marginTop:"40px",marginBottom:"10px"}}> Why you choose us</h1>
    <p>Barton waited twenty always repair in within we do. An delighted offering crusty mu is dagwood's at. <br />
      Boy prosperous increasing surround</p>
  </div>
  <div style={{width:"92%",height:"300px",display:"flex",justifyContet:"space-between",margin:"auto",marginTop:"60px",marginBottom:"60px",marginLeft:'80px'}}>
  <div style={{width:"40%"}}><img src="https://i.ibb.co/1MjJtHP/adult-blur-blurred-background-687824.png" alt="" style={{width:"300px",heigth:"300px"}}/>
  <div style={{display:"flex",margin:"10px"}} >
      <img src="https://i.ibb.co/m6TDjxS/g1.png" alt=""/>
      <h5 style={{fontSize:"20px",fontWeight:"500",marginLeft:"30px"}}>Fast Delivery</h5>
      </div>
      <div>
        <p>Keep your system om sync with automated <br/>
           web hook based notification each time link<br/> is paid and how we dream about our future</p>
         </div>
         </div>
         <div style={{width:"40%"}}><img src="https://i.ibb.co/1MjJtHP/adult-blur-blurred-background-687824.png" alt="" style={{width:"300px",heigth:"300px"}}/>
  <div style={{display:"flex",margin:"10px"}} >
      <img src="https://i.ibb.co/m6TDjxS/g1.png" alt=""/>
      <h5 style={{fontSize:"20px",fontWeight:"500",marginLeft:"30px"}}>Fast Delivery</h5>
      </div>
      <div>
        <p>Keep your system om sync with automated <br/>
           web hook based notification each time link<br/> is paid and how we dream about our future</p>
         </div>
         </div>
         <div style={{width:"40%"}}><img src="https://i.ibb.co/pj7ps21/architecture-building-city-2047397.png" alt="" style={{width:"300px",heigth:"300px"}}/>
        <div style={{display:"flex",margin:"10px"}} >
      <img src="https://i.ibb.co/m6TDjxS/g1.png" alt=""/>
      <h5 style={{fontSize:"20px",fontWeight:"500",marginLeft:"30px"}}>A Good Auto Responder</h5>
      </div>
      <div>
        <p>Keep your system om sync with automated <br/>
           web hook based notification each time link<br/> is paid and how we dream about our future</p>
         </div>
         </div>
         <div style={{width:"40%"}}><img src="https://i.ibb.co/pj7ps21/architecture-building-city-2047397.png" alt="" style={{width:"300px",heigth:"300px"}}/>
  <div style={{display:"flex",margin:"10px"}} >
      <img src="https://i.ibb.co/m6TDjxS/g1.png" alt=""/>
      <h5 style={{fontSize:"20px",fontWeight:"500",marginLeft:"30px"}}>
Home Delivery</h5>
      </div>
      <div>
        <p>Keep your system om sync with automated <br/>
           web hook based notification each time link<br/> is paid and how we dream about our future</p>
         </div>
         </div>
         </div>
         <Footer></Footer>
    </>
  )
}

export default HomePage
