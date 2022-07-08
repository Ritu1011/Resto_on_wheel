import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const Cart = () => {
  const [addCart,setAddCart]=useState([])
  const [loading, setLoading] = useState(true);
const [data, setData] = useState([]);

useEffect(()=>{
  getData()
},[])
const getData=()=>{
 axios.get(`http://localhost:8080/cart`).then((res)=>{
 console.log(res.data,"cart")
 
  })
}

useEffect(() => {
  setLoading(true);
  axios({
    url: "http://localhost:8080/cart",
    method: "GET",
  })
    .then((res) => {
      setLoading(false);
      setData(res.data);
    })
    .catch((err) => {
      setLoading(false);
    });

},[]);

const total = data.map(pro =>Number(pro.price)).reduce((prev, curr) => prev + curr, 0);
let Deletedata=async(id)=>{
    await fetch(`http://localhost:8080/cart/${id}`, {
         method: "DELETE",
    })
    getData()   
  }



  return (
    <>
  <div className='cartContainer'>
  <div className='left'>
  {data.map((item) => (
          <div className="menu_container" key={item.id}>
          <div><img src={item.img} alt="" className="menu_img" /> </div>
          <div className="menu_description">
          <h3 > {item.name}</h3>
          <h4> {Number(item.price)}</h4>
          <button className="menu_add" onClick={()=>{Deletedata(item.id); window.location.reload()}} >Remove</button>
          {/* <Link to={`/menupage/${item.id}`}><button className="menu_details">Details</button></Link> */}
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
        <div className='totalprice'>00</div>
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
        <p style={{color:"gray",fontSize:"13px"}}>Save extra ₹12 using 12 SuperCoins on the next step
Available Balance 🪙 12</p>
        <button className='placeOrder'>PLACE ORDER</button>
     
      </div>
      
  </div>
</div>
    </>
  )
}

export default Cart


