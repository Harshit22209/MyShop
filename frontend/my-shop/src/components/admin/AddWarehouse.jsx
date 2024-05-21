import React,{useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const AddWarehouse = () => {
    const navigate = useNavigate();
    const [toggle,setToggle]=useState(0);
    
    const [info,setInfo]=useState({
      name:'',  
      area:'',
      pinCode:0,
      state:'',
      city:'',
      teleNo:''
      

  });
  const handleChange=(e)=>{
    setInfo({...info ,[e.target.name]:e.target.value});
  }
    const handleSubmit=async(e)=>{
      e.preventDefault();

      try{
      console.log(info)
      const response=await axios.post(process.env.REACT_APP_API_URL+"admin/addWarehouse",info);
     
      
       window.location.reload(false);
      console.log(info);
      
      }
      catch(error){
        console.log(error);
      }
      //console.log(info);
    }
    return (
    <div className="w-[50vh] shadow-xl mx-auto  self-auto mb-20 mt-20 pt-5 pb-5 bg-white rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="bg-white flex justify-center">
          
        <div>
          <div >
            <label htmlFor="name">Name: </label>
            <input className="border-2 mb-2 ml-2" type="text" name="name" id="name" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="contactNo">Tele No: </label>
            <input className="border-2 mb-2 ml-2" type="text" name="teleNo" id="teleNo" onChange={handleChange} />
          </div>
         
          <div>
            <label htmlFor="area">Area: </label>
            <input className="border-2 mb-2 ml-2" type="text" name="area" id="area" onChange={handleChange}/>
          </div>
          
          <div>
            <label htmlFor="city">City: </label>
            <input className="border-2 mb-2 ml-2" type="text" name="city" id="city" onChange={handleChange}/>
          </div>
          <div>
            <label htmlFor="state">State: </label>
            <input className="border-2 mb-2 ml-2" type="text" name="state" id="state" onChange={handleChange} />
          </div>
          <div>
            <label htmlFor="pinCode">PinCode: </label>
            <input className="border-2 mb-2 ml-2" type="number" name="pinCode" id="pinCode" onChange={handleChange} />
          </div>
         
          <div>
            <input className="border-2 bg-green-500/75 mt-2 ml-2 w-[42vh] text-2xl" type="submit" value="Add" />
          </div>
         
        </div>
        </div>
      </form>
      
    </div>
  );
}

export default AddWarehouse