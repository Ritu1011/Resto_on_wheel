import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import "./searchbar.css"

const Serachbar = () =>  {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [filterData,setFilterData]=useState([])

   useEffect(() => {
    setLoading(true);
    axios({
      url: "https://resto-backed.herokuapp.com/all",
      method: "GET",
     
    })
      .then((res) => {
        setLoading(false);
        setData(res.data);
      })
      .catch((err) => {
        setLoading(false);
      });
  },[]);

  const handleFilter=(event)=>{
    const searchWord=event.target.value;
    
    const newFilter=data.filter((value)=>{
        return value.name.toLowerCase().includes(searchWord.toLowerCase())
    })
    setFilterData(newFilter)
}
  return (
    <div className='search1'>
         <div className='search2'>
                <input type="text" placeholder='Enter your food'  onChange={handleFilter}/>
            </div>
            { filterData.length!=0 &&(
        <div  className='search3'>
           
  {filterData.map((item) => (

<div  className='search4' key={item.id} >
<Link to={`/menupage/${item._id}`} className="linkitem">
<img src={item.img} alt="" className='search51'/>
 <h3 className='search5'> {item.name}</h3>

  </Link>
</div>
))}
</div>
            )}
    </div>
  )
}

export default Serachbar