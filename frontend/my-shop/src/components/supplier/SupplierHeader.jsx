import React from 'react'
import { useNavigate } from 'react-router-dom';

const SupplierHeader = () => {
 
    let info={name:""}
    let response=localStorage.getItem("info");
    if(response)
      info=JSON.parse(response)
  
    const navigate=useNavigate();
    const handleLogOut= ()=>{
            localStorage.removeItem("info");
            navigate("/login")
    }
  return (
    
    <div className="flex justify-between pr-10 pl-10 pb-3 pt-3 bg-teal-100 shadow-md mb-4">
        
        <div>Supplier</div>
        <div className='text-2xl'>MyShop</div>
        <div className='flex gap-4'>
        <div onClick={()=>navigate("/supplier/")}>Products </div>
        <div>History</div>
        <div>Stats</div>
        <div>Returns</div>
        <div>{info.name}</div>
        <button className="bg-red-500 text-white px-4 " onClick={handleLogOut}>
                LogOut
              </button>

        </div>


    </div>
  )
}

export default SupplierHeader