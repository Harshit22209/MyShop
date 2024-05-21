import React from 'react'
import { useNavigate } from 'react-router-dom';
const WarehouseCard = (props) => {
    const info=props.info;
    console.log("y");
    console.log(props);
    console.log(info);
    const navigate=useNavigate();
    return (
        
      <div className='flex gap-x-5   w-[85vh] p-2 border-1 border-vilot-500 shadow-xl text-2xl shadow-blue-100/50'>
          <div className='pt-1 grid gap-x-3 gap-y-1 grid-cols-2'>
          <div className='text-gray-500'>Id:</div> <div>{info.warehouse_id}</div>
          <div className='text-gray-500'>Name:</div><div> {info.name}</div>
          <div className='text-gray-500'>City:</div><div> {info.city}</div>
          <div className='text-gray-500'>State:</div><div> {info.state}</div>
          <div className='text-gray-500'>Pin Code:</div><div> {info.pinCode}</div>
          <div className='text-gray-500'>Tele No: </div><div>{info.teleNo}</div>
          
          </div>
          <div className='my-auto'>
           <div>   
          <button className="bg-blue-500/75 text-white w-[45vh] px-4 py-2 mr-1 mb-2" onClick={()=>navigate(`/retailManager/warehouse/${info.warehouse_id}`)}>Manage</button>
          </div>
         
          
          </div>
      </div>
    )
}

export default WarehouseCard