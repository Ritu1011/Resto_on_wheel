import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


export default class AutoPlay extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

    return (
        <>
        
        <h1 style={{fontSize:"40px",fontWeight:"600",color:"#f1492c",textAlign:"center",marginTop:"40px"}}>Variety of Food</h1>
      <div style={{width:"91%",height:"300px",margin:"auto",boxShadow:" rgba(0, 0, 0, 0.24) 0px 3px 8px",marginTop:"40px"}}>
        <Slider {...settings}>
          <div  style={{border:"2px solid black",background:"teal",width:"100px",height:"300px"}}>
            <img src="https://i.ibb.co/QC0KJPt/breakfast4.png" alt="" style={{width:"300px",height:"300px"}} />
           
          </div>
          <div>
          <img src="https://i.ibb.co/YWxtdqc/breakfast1.png" alt="" style={{width:"300px",height:"300px"}} />
          </div>
          <div>
          <img src="https://i.ibb.co/Kmvyhdn/dinner6.png" alt="" style={{width:"300px",height:"300px"}} />
          </div>
          <div>
          <img src="https://i.ibb.co/QC0KJPt/breakfast4.png" alt="" style={{width:"300px",height:"300px"}} />
          </div>
          <div>
          <img src="https://i.ibb.co/Ph7HZpK/lunch1.png" alt="" style={{width:"300px",height:"300px"}} />
          </div>
          <div>
          <img src="https://i.ibb.co/5BPBJKH/lunch3.png" alt="" style={{width:"300px",height:"300px"}} />
          </div>
        </Slider>
      </div>
      </>
    );
  }
}