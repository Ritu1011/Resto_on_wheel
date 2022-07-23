import React, { useState } from 'react'

const Slide = () => {

  const z = JSON.parse(localStorage.getItem("user_login"));
  const handleName = () => {
    localStorage.removeItem("user_login");
    window.location.reload();
  };

  return (
    
    <>
    <section className="banner-aria">
       
    <div className="row">
      <div className=" banner-content">
        <h2>Best food waiting for your belly</h2>
        <div className="banner-input">
         <h2>  Welcome <span>

          
          {z==null ? "":z.map(el => <span>{el.name}</span>)}
        
          {/* {z == null ? "" : z}  */}
          </span> </h2>
           
          </div>
          </div>
        
          </div>
          </section>
    </>
  )
}

export default Slide