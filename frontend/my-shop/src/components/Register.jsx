import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"
const Register = () => {
    const navigate = useNavigate();
    const [info,setInfo]=useState({
      name:'',
      contactNo:'',
      area:'',
      pincode:0,
      state:'',
      city:'',
      email: '',
      password: '',
      type:'customer'

  });
  const handleChange=(e)=>{
    setInfo({...info ,[e.target.name]:e.target.value});
  }
    const handleSubmit=async(e)=>{
      e.preventDefault();

      try{
      console.log(info)
      const response=await axios.post(process.env.REACT_APP_API_URL+"register",info);
      if(!response.data){

        console.log("User already Existed");
        return;
      }
      const reqInfo={
        email:response.data.email,
        name:response.data.name,
        type:response.type
      }
      
      localStorage.setItem("info",JSON.stringify(reqInfo));
     //   navigate(`/${reqInfo.type}`);
      //console.log(info);
      
      }
      catch(error){
        console.log(error);
      }
      //console.log(info);
    }
    return (
    <div className="w-[60vh] shadow-xl flex center justify-center self-auto mb-20 mt-20 pt-5 pb-5 bg-white rounded-md text-xl ">
      <form onSubmit={handleSubmit}>
        <div className="bg-white">
          <div className="mb-2">
            <label htmlFor="type" className="w-[14vh]">Type: </label>
            <select className="border-2 ml-2" name="type" id="type" onChange={handleChange}>
              <option value="customer">Customer</option>
              <option value="applicant">Manager application</option>
              <option value="supplier">Supplier</option>
            </select>
          </div>
          <div>
            <label className="w-[14vh]" htmlFor="name">Name: </label>
            <input className="border-2 mb-2 ml-2" type="text" name="name" id="name" onChange={handleChange} />
          </div>
          <div>
            <label className="w-[14vh]" htmlFor="contactNo">PhoneNo: </label>
            <input className="border-2 mb-2 ml-2" type="text" name="contactNo" id="contactNo" onChange={handleChange} />
          </div>
          <div>
            <label className="w-[14vh]" htmlFor="email">Email: </label>
            <input className="border-2 mb-2 ml-2" type="email" name="email" id="email" onChange={handleChange} />
          </div>
          <div>
            <label className="w-[14vh]" htmlFor="area">Area: </label>
            <input className="border-2 mb-2 ml-2" type="text" name="area" id="area" onChange={handleChange}/>
          </div>
          
          <div>
            <label className="w-[14vh]"  htmlFor="city">City: </label>
            <input className="border-2 mb-2 ml-2" type="text" name="city" id="city" onChange={handleChange}/>
          </div>
          <div>
            <label className="w-[14vh]" htmlFor="state">State: </label>
            <input className="border-2 mb-2 ml-2" type="text" name="state" id="state" onChange={handleChange} />
          </div>
          <div>
            <label className="w-[14vh]" htmlFor="pincode">Pin Code: </label>
            <input className="border-2 mb-2 ml-2" type="number" name="pincode" id="pincode" onChange={handleChange} />
          </div>
          <div>
            <label className="w-[14vh]"  htmlFor="password">Password</label>
            <input className="border-2 mb-4 ml-2" type="password" name="password" id="password" onChange={handleChange}/>
          </div>
          <div>
            <input  className="border-2 mb-2 ml-1 py-1 w-[48vh] text-2xl shadow-sm rounded-1" type="submit" value="SUBMIT" />
          </div>
          <div className="flex justify-center">
            Already Have Acount: <div className="pl-2 text-cyan-500 cursor-pointer" onClick={()=>navigate("/login")}>Login</div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Register;
