import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios'
const Cart = () => {
  const [addCart,setAddCart]=useState([])
  useEffect(()=>{
    getData()
  },[])
  const getData=()=>{
    axios.get(`http://localhost:8080/cart`).then((res)=>{
   console.log(res.data,"cart")
    })
}

  return (
    <div>Cart</div>
  )
}

export default Cart