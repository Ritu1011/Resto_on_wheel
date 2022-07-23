

import "./Checkout.css"
import { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import {ImCross}from 'react-icons/im';
import { useNavigate } from "react-router-dom";
import { Payment } from "./Payment";
import Navbar from "./Navbar";

import "./Payment.css"
export const Checkout =()=>{
    const navigate = useNavigate()
    const [modal, setModal] = useState(false);
    const [data,setData] = useState([]);
    const [address,setaddress]=useState({
        fullname:"",
        mobile:"",
        line:"",
        country:"",
        city:"",
        state:"",
        pincode:"",

    })
    const toggleModal = () => {
      setModal(!modal);
    };
   if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }


   const handledata=(e)=>{
    setaddress({
        ...address,
        [e.target.id]:e.target.value
    })
   }
   const handleaddress=(e)=>{
    e.preventDefault()
    toggleModal()
   }
console.log("adde",address)
    return (
<>
<Navbar></Navbar>
    <div className="checkout"> 
        <div className="rightB">
            <div  className="detailsB">
               <h1>Contact Information</h1>
            </div>
            <div className="name" >
                   <p >Full Name:{address.fullname}</p>
                   <p>Phone Number:{address.mobile}</p>
               </div>
               <hr />
               <div className="addnew">
                   <p>Delivery Address</p>
                   <button onClick={toggleModal} style={{fontSize:"15px", width: "20%",
                   marginTop:"30px",height:"35px",background:"#f1492c"}}>+ Add address</button>
               </div>
               {modal && ( <div className="overlay" >
        <div className="mainAdd">
        <div className="title">
            <div>
                <button onClick={toggleModal} ><ImCross/></button>
            </div>
           </div>

           <form  style={{height:"400px"}}>
        <div className="name_no" >
            <div>
                <p className="heading" style={{marginBottom:"10px"}}>Full Name</p>
                <input type="text" placeholder="Enter Full Name" id="fullname" onChange={handledata} />
                <p className="heading" style={{marginTop:"20px"}}>Mobile Number</p>
                <input type="Number" placeholder="Enter Mobile Number" style={{marginTop:"20px"}} id="mobile" onChange={handledata} />
            </div>
            <div>
                
             
            </div>
        </div>
       
        <div className="add">
            <p>Address</p>
            <input type="text" className="addline"  placeholder="Address" id="line" onChange={handledata}/><br />
            <input type="text" placeholder="Pincode" id="pincode" onChange={handledata}/><br />
            <input type="text" placeholder="Country"  id="country" onChange={handledata}/><br />
            <input type="text" placeholder="City"   id="city" onChange={handledata}/><br />
            <input type="text" placeholder="State" id="state" onChange={handledata}/>
        </div>
        <div className="butt">
            <button  className="butt1" onClick={handleaddress}>Save and use this Address</button>
            <button  className="butt2">Cancel</button>
        </div>
        </form>
    </div>
    </div>)}
               <div className="addressdetails">
                   <div>Address Line: {address.line}</div>
                   <div>City: {address.city}</div>
                   <div>State: {address.state}</div>
                   <div>Country: {address.country}</div>
                   <div>Pincode: {address.pincode}</div>
               </div>
              
           
        </div>
        <div className="leftB">
          <Payment></Payment>

        </div>
    </div>
    
    </>
    
)}
