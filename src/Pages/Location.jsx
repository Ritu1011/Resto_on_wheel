
import React, { useState } from "react";
import "./Location.css"
import Navbar from "./Navbar";
import { Footer } from "./Footer/Footer";

const Location = () => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
    <Navbar></Navbar>
    <div className="mainLocation">
      <div>
    <div className=" banner-content">
      <h3 style={{fontSixe:"30px",color:"red",fontWidth:"600"}}>Find the location of the resto</h3>
      <button onClick={toggleModal} className="btn-modal">
        Indore
      </button>
     </div>
      </div>
      {modal && (
        <div className="modal">  
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content" style={{display:"flex"}}>
          <button className="close-modal" onClick={toggleModal} style={{fontSize:"20px",fontWeight:"500"}}>
              x
            </button>
          <table style={{width:"100%" ,marginTop:"35px",marginBottom:"30px",textAlign:"center"}}>
  <tr>
    <th>Area</th>
    <th>Opening time</th>
    <th>Closing time</th>
  </tr>
  <tr>
    <td>Bhawarkua</td>
    <td>7:30</td>
     <td>9:30</td>
    </tr>
  <tr>
  
  <td>MR-9</td>
  <td>10:00</td>
  <td>12:00</td>
  </tr>
  <tr>
  <td>Rajwada</td>
  <td>12:30</td>
  <td>2:30</td>
  </tr>
  <tr>
  <td>Chhappn</td>
  <td>3:00</td>
  <td>6:00</td>
  </tr>
</table> 
</div>
  </div>

      )}
    
     </div>
     <Footer></Footer>
    </>
  )
}

export default Location