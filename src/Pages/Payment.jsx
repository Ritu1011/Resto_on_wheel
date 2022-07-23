

import "./Checkout.css"
import { useState } from "react"
import {ImCross}from 'react-icons/im';
import { useNavigate } from "react-router-dom";
import "./Payment.css"
export const Payment =()=>{
    const navigate = useNavigate()
    const [modal, setModal] = useState(false);
  
    const [payment,setpayment]=useState({
        CVV:"",
        name:"",
        expiry:"",
        })
        

       
    const toggleModal = () => {
      setModal(!modal);
    };
   if(modal) {
      document.body.classList.add('active-modal')
    } else {
      document.body.classList.remove('active-modal')
    }


   const handledataAdd=(e)=>{
    setpayment({
        ...payment,
        [e.target.id]:e.target.value
    })
   }
   const handlpayment=(e)=>{
    e.preventDefault()
    toggleModal()
   }

   const orderPlaced=()=>{
    alert ("your order has been successfull Placed")
    navigate("/orderpacled")
   }
    return (

    < > 
         <div  className="detailsB">
               <h1>Payment Information</h1>
            </div>
            
               <hr />
               <div className="addnew">
                   <p>Card Details</p>
                   <button onClick={toggleModal} style={{fontSize:"15px", width: "20%",
                   marginTop:"30px",height:"35px",background:"#f1492c"}}>+ Card Details</button>
               </div>
               {modal && ( <div className="overlay" >
        <div className="mainpay">
        <div className="title">
            <div>
                <button onClick={toggleModal} ><ImCross/></button>
            </div>
           </div>

           <form  style={{height:"500px"}}>
        
       
           <div id="pay_leftbox1">
                 <div id="for_option">
                   <div id="wallet">
                       <div className="image"><img src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530172217/marketing/vvew3rcvwfjrhknifj1z.png" /></div>
                       <div className="imagebox">
                        WALLET</div>
                   </div>
                    <div id="UPI">
                        <div className="image"><img src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1581576219/marketing/p0w0w4crcgcthkom8j23.png" /></div>
                    <div className="imagebox">
                        UPI
                    </div>
                </div>
                     <div id="card" style={{backgroundColor:"white"}}>
                        <div className="image"><img src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530172186/marketing/p45zk16fua8dmxany3up.png" /></div>
                        <div className="imagebox" >CARDS</div>
                     </div>
                     <div id="netbanking">
                        <div className="image"><img src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530172229/marketing/bsnk5fvtd4b6xffsvjdm.png" /></div>
                        <div className="imagebox" >INTERNET BANKING</div>
                     </div>
                     <div id="ondelivery">
                        <div className="image"><img src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530172202/marketing/pyzcsicqsnwawi4yrpo7.png" /></div>
                        <div className="imagebox">PAY ON DELIVERY</div>
                     </div>
                
                </div>
                
                 <div id="detials">
                      <div id="CandD"><h4>Credit & Debit Cards</h4>
                        </div>
                        <div id="carddetail">
                             <div id="pay_CardNumbar">
                                <label><p>Card Numbar</p></label>
                                <input type="Number" placeholder="XXXX XXXX XXXX"  onChange={handledataAdd} id="CVV"/>
                        
                        </div>
                         
                         <div id="ExpirySecurity">
                            <div id="expirydata"> <label><p>Expiry Date</p></label>
                                <input type="text" placeholder="MM/YY" 
                                onChange={handledataAdd} id="expiry"/></div>
                            <div id="Securitycode"> <label><p>Security Code</p></label>
                                <input type="text" placeholder="XXXX"   onChange={handledataAdd} id="code"/></div>
                            </div>
                    <div id="name_on_card">
                        <input type="text" placeholder="Name On Card" onChange={handledataAdd} id="name"/>
                    </div>
                        </div>
                        <div id="basic_info">
                            <div id="checkbox">
                             <input id="cx_box" type="checkbox" />
                            </div>
                           <div id="for_details"><p>Your card details will be saved securely for future transactions, based on the industry standards.</p></div>
                        <div id="button2">
                            <button  onClick={handlpayment}>Save Details</button>
                            </div>
                        <div id="endbox">
                        <div id="av_logo"> <p>We support domestic credit and debit cards of following brands</p></div>
                        <div id="paylogo">
                        
                           <div className="logo_X"><img src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530098811/marketing/szfylmvspyj5ccvhesnp.png" /></div>
                        
                            <div className="logo_X"><img src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530098792/marketing/vujtyvkwxchd16egv0wt.png" /></div>
                            <div className="logo_X"><img src="https://res.cloudinary.com/du8msdgbj/image/upload/q_auto,f_auto/v1530098898/marketing/rv6lj5fubobesvsomlzr.png" /></div>
                    
                        </div>
                        </div>
                        </div>
                        
                     </div>
                     </div>
            
       
        </form>
    </div>
    </div>)}
               <div className="addressdetails">
               <div>Name: {payment.name}</div>
                   <div>CVV: {payment.CVV}</div>
                   <div>Expir Data: {payment.expiry}</div>
               </div>
              <button className="pay" style={{marginTop:"50px",background:" #f1492c",color:'white'}} onClick={orderPlaced}>Proceed To Payment</button>
           
        </>
        
 
    
)}
