
import axios from "axios";
import { useEffect, useState } from "react";
import { Link ,useParams } from "react-router-dom";
import "./Style.css"
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Footer } from "./Footer/Footer";
function  DinnerCart(){
   const [loading, setLoading] = useState(true);
   const navigate=useNavigate()
    const [data, setData] = useState([]);
    const params = useParams();
    const [sort,setSort] =useState("asc")

    useEffect(() => {
      setLoading(true);
      const { id } = params;
      axios({
        url: `https://resto-backed.herokuapp.com/dinner/${id}`,
        method: "GET"
      })
        .then((res) => {
          setLoading(false);
          setData(res.data);
        })
        .catch((err) => {
          setLoading(false);
        });
    }, [params.id]);

    // console.log(data ,"data")
  
    const postData=()=>{
      axios.post(`https://resto-backed.herokuapp.com/cart`,{...data}).then(()=>{
      alert("data added to cart ")
         })
  }


    return (
      <>
      <Navbar></Navbar>
        <div>
        
          {loading && <div>...Loading</div>}
        
             <div className="container_D">
              
             <div  className="table" key={data?.id}>
             <img src={data?.img} alt="" />
            
             </div>
             <div className=" details_D">
             <h1  className="name_h3"> {data?.name}</h1>
            
             <div className="lorem"> 
               Lorem ipsum dolor sit, 
               amet consectetur adipisicing elit. Eaque praesentium molestias ducimus,
               culpa eum est, in sunt neque accusamus, soluta sapiente? Nisi iure ut veritatis, 
               dolorem a atque veniam autem?
               </div>
               <h3  className="name_D"> {data?.price}</h3>
               <div style={{display:"flex",justifyContent:"space-evenly",width:"50%"}}>
            <button  onClick={(id)=>{
             navigate ("/cart")
             return postData(id)
             }} 
             className="Add"><h2> ADD TO CART </h2></button>

              <Link to="/home"> <button className="Add"><h2> CANCLE </h2></button></Link>
               </div>
              </div>
           
            </div>
        </div>
        <Footer></Footer>
        </>
      );
    }
    
    export default  DinnerCart