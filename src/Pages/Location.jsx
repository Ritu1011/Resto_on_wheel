// import React, { useState } from 'react'

// const Location = () => {
//   const [state,setState]=useState(true)
//   const toggle=()=>{
//     setState(!state)
//   }

//   return (
//     <>

//     <div>
//     <div style={{margin:"auto",border:"1px solid black",width:"50%",height:"400px"}}>
// <button onClick={toggle} className={'toogle-button' + (state ? "toggle==close":"")}>
// {state ?'close' : 'open'}
// </button>


//     </div>
//     </div>
//     </>
//   )
// }

// export default Location
import React, { useState } from "react";
import "./Location.css"



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
          <div className="modal-content">
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
     <p></p>
     </div>
     
    </>
  )
}

export default Location