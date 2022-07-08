import axios from "axios";
import { useEffect, useState } from "react";
import { Link ,useParams } from "react-router-dom";
import "./Style.css"

function  MenuCart(){
   const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [cart ,setCart]=useState([]);
    const params = useParams();
    useEffect(() => {
      setLoading(true);
      const { id } = params;
      axios({
        url: ` http://localhost:8080/All/${id}`,
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

    const AddtoCart=()=>{
      
    }

    return (
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
               <button className="Add" onClick={AddtoCart}><h > ADD TO CART </h></button>
              <Link to="/"> <button className="Add"><h2> CANCLE </h2></button></Link>
               </div>
              </div>
           
            </div>
        </div>
      );
    }
    
    export default  MenuCart