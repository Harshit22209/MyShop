import React,{useEffect} from 'react'
import {PageAuth} from '../shared/PageAuth'
import { useNavigate ,useResolvedPath, Route, Routes,BrowserRouter} from 'react-router-dom'
import ProductTable from './ProductTable';
import AddProduct from './AddProduct';

const SupplierHome = () => {
    const navigate=useNavigate();
    const {path}=useResolvedPath();
    useEffect(()=>{
        if(!PageAuth('supplier')){
             navigate("/register");
        }
       },[])
  return (
    <div>
        <div>
            <div className='flex justify-end mb-10 mr-20 text-2xl'>
        <button className="bg-green-500 text-white px-4 py-2 mr-2" onClick={()=>{navigate("addProduct")}}>Add Product</button>
        </div>
            <ProductTable />
        </div>
        <div className='flex justify-center    mt-3 mr-20 text-xl'>
        <button className="bg-green-500 rounded-full text-white px-2  pb-1  ">+</button>
        </div>
        
    </div>
  )
}

export default SupplierHome