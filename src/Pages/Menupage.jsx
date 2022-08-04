
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./Menu.css"
import Navbar from "./Navbar";
import { Footer } from "./Footer/Footer";

function Menupage() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [page,setPage] =useState(1)
  

  useEffect(() => {
    setLoading(true);
    axios({
      url: "https://resto-backed.herokuapp.com/all",
      method: "GET",
      params:{
        _page:page,
        _limit:5,
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
    <div >
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
      {loading && <div>...Loading</div>}
      {data.map((item) => (

        <div className="menu_container" key={item.id}>
          <div><img src={item.img} alt="" className="menu_img" /> </div>
          <div className="menu_description">
          <h3 > {item.name}</h3>
          <h4> {item.price}</h4>
          <h4> {item.category}</h4>
          <Link to={`/menupage/${item._id}`}><button className="menu_details">Details</button></Link>
          </div>
          </div>
      ))}
<div className="pagination_btn">
    <button title="PREV" id="PREV" disabled={page===1}   onClick={()=>setPage(page-1)} className="pagination"> Prev</button>
    <button id="NEXT" disabled={page===6} title="NEXT"   onClick={()=>setPage(page+1)} className="pagination">Next</button>
    </div>
    </div>
  <Footer></Footer>
    </>
  );
}

export default Menupage;

