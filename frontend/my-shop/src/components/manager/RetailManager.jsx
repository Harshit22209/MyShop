import React ,{useEffect} from 'react'
import { useNavigate ,useResolvedPath, Route, Routes,BrowserRouter} from 'react-router-dom'
import axios from 'axios';
import { Provider } from "react-redux";
import store from "./Store"
import { PageAuth } from '../shared/PageAuth'
import ManagerHeader from './ManagerHeader';
import RetailManagerHome from './RetailManagerHome';
import Warehouse from './Warehouse';
const RetailManager = () => {
    const navigate=useNavigate();
    
    useEffect(()=>{
        if(!PageAuth('retailManager')){
             navigate("/register");
        }
        const fetchManager=async()=>{
            try{
                let email=JSON.parse(localStorage.getItem("info")).email;
                const response=await axios.get(process.env.REACT_APP_API_URL+`retailManager/${email}`);
                localStorage.setItem("manager_id",response.data.manager_id);

            }
            catch (error){
                console.log(error);
            }
        }
        fetchManager();
       },[])
  return (
    <div>
        <ManagerHeader />
        <Routes>
            
        <Route path="" element={<RetailManagerHome />} />
        
        <Route path="warehouse/:id" element={<Provider store={store}><Warehouse/></Provider>} />
        
        
        </Routes>
    </div>
  )
}

export default RetailManager