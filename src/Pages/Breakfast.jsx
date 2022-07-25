


import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Style.css"
import Navbar from "../Pages/Navbar";
import { Footer } from "./Footer/Footer";
function Breakfast() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    setLoading(true);
    axios({
      url: "https://resto-backed.herokuapp.com/breakfast",
      method: "GET",
      })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  }, []);
  console.log(data);

  const handelSort = (by) => {
    if (by == "PLH") {
      let sorted = data.sort((a, b) => {
        return a.price - b.price;
      });

      let newData = [...sorted];
      setData(newData);
    } else if (by == "PHL") {
      let sorted = data.sort((a, b) => {
        return b.price - a.price;
      });
      let newData = [...sorted];
      setData(newData);
    } 
  };
  return (
    <>
  <Navbar></Navbar>
    <select style={{marginTop:"20px",width:"200px",height:"40px" ,border:"2px solid black",marginLeft:"40px"}}
          id="itemsorter"
          onChange={(e) => {
            handelSort(e.target.value);
          }}
        >
          <option value="POP" >Sort by Price</option>
          <option value="PLH">Low to High</option>
          <option value="PHL">High to Low</option>
          
        </select>
    <div className="container">
      
      {loading && <div>...Loading</div>}
      {data.map((item) => (

        <div  key={item.id}>
          <div><Link to={`/breakfast/${item._id}`}><img src={item.img} alt="" /></Link>  </div>
          <div className="description">
          <h3 > {item.name}</h3>
          <h4> {item.price}</h4>
          </div>
          </div>
      ))}
    </div>
    
  <Footer></Footer>
    
    </>
  );
}

export default Breakfast;