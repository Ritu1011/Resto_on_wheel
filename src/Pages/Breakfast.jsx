
// import React, { useState,useEffect } from "react";
// import CandidateCard from "./BreakfastCart";
// import Button from "./Button";
// import "../App.css"


// import axios from "axios"

// const Breakfast = () => {
//     const [data, setData] = useState([]);
//     const [error, setErroe] = useState(false);
//     const [loading, setLoading] = useState(true);
//     const [page,setPage] =useState(1)
//     const [salary,setSalary] =useState("asc")
  
  
  
//     useEffect(() => {
//       fatchCanditeData({page,salary})
//     },[page,salary])
  
//      const fatchCanditeData=async({page,salary}) => {
//         setLoading(true)
//       axios({
//         method :"get",
//         url:" http://localhost:8080/Breakfast",
//         params:{
//           _page:page,
//           _limit:5,
//           _sort:"salary",
//           _order:salary
//         }
//       })
//     .then(res=>{
//       setData(res.data)
//       setLoading(false)
//     })
//     .catch(err=>{
//       setErroe(true)
//       setLoading(false)
//     })
//     }
//    // console.log(data)
//   function handleSalary(salary){
//     if(salary=="asc"){
//       setSalary("desc")
//     }
//     else{
//       setSalary("asc")
//     }
   
//   }


//   return (
    
//     <>
//     <div className="App1">
//       <div>
//         { loading && <div id="loading-container">...Loading</div>}
//         <button className="sorting_btn"  onClick={()=>handleSalary(salary)} >Sort </button>
//         {/* <Button title="PREV" id="PREV" disabled={page===1}   onClick={()=>setPage(page-1)}/>
//         <Button id="NEXT" title="NEXT" onClick={()=>setPage(page+1)}/> */}
        
//       </div>
//       <div>
//       {data.map((item) => 
//         < CandidateCard key={item.id} {...item}/>
//       )}
//       </div>
//     </div>
//     </>
//   )
// }

// export default Breakfast


import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Style.css"




function Breakfast() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page,setPage] =useState(1)
  

  useEffect(() => {
    setLoading(true);
    axios({
      url: " http://localhost:8080/Breakfast",
      method: "GET",
      params:{
        _page:page,
        _limit:8,
        }
    })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, [page]);
  console.log(data);
  return (
    <>
    <div className="container">
      {loading && <div>...Loading</div>}
      {data.map((item) => (

        <div  key={item.id}>
          <div><Link to={`/breakfast/${item.id}`}><img src={item.img} alt="" /></Link>  </div>
          <div className="description">
          <h3 > {item.name}</h3>
          <h4> {item.price}</h4>
          </div>
          </div>
      ))}
    </div>
    
  
    
    </>
  );
}

export default Breakfast;