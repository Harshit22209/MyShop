import React,{useEffect} from 'react'
import SupplierHome from './SupplierHome'
import { useNavigate ,useResolvedPath, Route, Routes,BrowserRouter} from 'react-router-dom'
import AddProduct from './AddProduct'

import SupplierHeader from './SupplierHeader'
import { PageAuth } from '../shared/PageAuth'

const Supplier = () => {
    const navigate=useNavigate();
    
    useEffect(()=>{
        if(!PageAuth('supplier')){
             navigate("/register");
        }
       },[])
  return (
    <div>
        <SupplierHeader />
        <Routes>
            
        <Route path="" element={<SupplierHome />} />
        <Route path="addProduct" element={<AddProduct />} />
        </Routes>
    </div>
  )
}

export default Supplier