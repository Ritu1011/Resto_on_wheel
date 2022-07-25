import React from 'react'
import { useEffect } from 'react'
import Navbar from './Navbar'

import { useState } from 'react'
import "./Cart.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Cart = () => {
  const [loading, setLoading] = useState(true);
const [data, setData] = useState([]);
const navigate=useNavigate()
const [count,setCount]=useState(1)


const getData=()=>{
 axios.get(`https://resto-backed.herokuapp.com/cart`)
 .then((res) => {
  setLoading(false);
  setData(res.data);
  
})
.catch((err) => {
  setLoading(false);
});
}


useEffect(() => {
  getData()
  setLoading(true);
   },[]);
   

const total = data.map(pro =>Number(pro.price)).reduce((prev, curr) => prev + curr, 0);
// console.log(data,"cart")
let Deletedata=async(id)=>{
        console.log(id)
    await fetch(`https://resto-backed.herokuapp.com/cart/${id}`, {
         method: "DELETE",
         })
    getData()   
   
  }
  

  const postData1=()=>{
    alert("address")
}

const ADDMOREPRODUCT=()=>{
  if(count==5){
    alert("miximum limit reached")
    return
  
  }
  setCount(count+1)
}
const SUBMOREPRODUCT=(e)=>{
  if(count>1){
    setCount(count-1 )
    }
    else{
      alert("minimum limit reached")
    }
  }
  

  return (
    <>  
    <Navbar></Navbar>
  <div className='cartContainer'>
  <div className='left'>
  {data.map((item) => (
          <div className="menu_container" key={item._id}>
          <div><img src={item.img} alt="" className="menu_img" /></div>
          <div className="menu_description">
          <h3>{item.name}</h3>
          <div style={{display:"flex",width:"80px",height:"30px" ,justifyContent:"space-between",alignItems:"center",textAlign:"center"}}>
             <div style={{border:"1px solid black",width:"33.33%",height:"100%",cursor:"pointer"}} onClick={SUBMOREPRODUCT} >-</div>
             <div style={{border:"1px solid black",width:"33.33%",height:"100%"}}>{count}</div>
             <div style={{border:"1px solid black",width:"33.33%",height:"100%",cursor:"pointer"}} onClick={ADDMOREPRODUCT} >+</div>
           </div>
          <h4> {Number(item.price)}</h4>
         <button className="menu_add" onClick={()=>{Deletedata(item._id) }} >Remove</button>
          
          </div>
          </div>
          
      ))}
      
  </div>
  <div className='right'>
    <div className='pricedetails'>
      <div className='price'>
        <div className='pricename'>Price:</div>
        <div className='totalprice' >₹{total}</div>
        </div>
        <div className='price'>
        <div className='pricename'>Discount</div>
        <div className='totalprice'>0.00</div>
        </div>
        <div className='price'>
        <div className='pricename'>Delivery Charges</div>
        <div className='totalprice' style={{color:"#f1492c"}}>₹49</div>
        </div>
        <hr />
        <div className='price1'>
        <div className='pricename1'>Total Amount</div>
        <div className='totalprice1'>₹{total+49}</div>
        </div>
        <hr />
        <p style={{color:"gray",fontSize:"13px"}}></p>
        <button  onClick={()=>{
             navigate ("/checkout")
             return postData1()
            }}  className='placeOrder'>CHECKOUT</button>
     
      </div>
      
  </div>
</div>

    </>
  )
}

export default Cart


