import React,{useEffect} from 'react'

import { useNavigate ,useResolvedPath, Route, Routes,BrowserRouter} from 'react-router-dom'


import { PageAuth } from '../shared/PageAuth'
import AdminHeader from './AdminHeader'
import AdminHome from './AdminHome'
import ManagerHandle from './ManagerHandle'
import WarehouseHandler from './WarehouseHandler'

const Admin = () => {
    const navigate=useNavigate();
    
    useEffect(()=>{
        if(!PageAuth('admin')){
             navigate("/register");
        }
       },[])
  return (
    <div>
        <AdminHeader />
        <Routes>
            
        <Route path="" element={<AdminHome />} />
        <Route path="manager" element={<ManagerHandle />} />
        <Route path="warehouse" element={<WarehouseHandler />} />
        </Routes>
    </div>
  )
}

export default Admin