import React from 'react'
import { useNavigate } from 'react-router-dom';
const ManagerHeader = () => {
  
    const navigate=useNavigate();
    const handleLogOut= ()=>{
            localStorage.removeItem("info");
            navigate("/login")
    }
  return (
    
    <div className="flex justify-between pr-10 pl-10 pb-3 pt-3 bg-teal-100 shadow-md mb-4">
        
        <div>Manager</div>
        <div className='text-2xl'>MyShop</div>
        <div className='flex gap-4'>
        <div>Products </div>
        <div onClick={()=>navigate("/retailManager/history")}>History</div>
        <div onClick={()=>navigate("/retailManager/history")}>Orders</div>

        <div onClick={()=>navigate("/retailManager")}>Warehouses</div>
        
        
        <button className="bg-red-500/75 text-white px-4 " onClick={handleLogOut}>
                LogOut
              </button>

        </div>


    </div>
  )
}

export default ManagerHeader