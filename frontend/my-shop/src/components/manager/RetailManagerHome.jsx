import axios from 'axios';
import React, { useEffect, useState } from 'react'
import WarehouseCard from './WarehouseCard';

const RetailManagerHome = () => {
  const [warehouses,setWarehouses] =useState([]);
  useEffect(()=>{
      const fetchWarehouses=async()=>{
        const response= await axios.get(process.env.REACT_APP_API_URL+`retailManager/warehouses/${localStorage.getItem("manager_id")}`)
        console.log(response.data);
        setWarehouses(response.data);
      }
      fetchWarehouses();
  },[])
  return (
    <div className='flex justify-center'>
      {warehouses.map((warehouse)=>(
        <WarehouseCard key={warehouse.id} info={warehouse}/>
      ))}

    </div>
  )
}

export default RetailManagerHome