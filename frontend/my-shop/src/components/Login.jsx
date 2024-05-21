import React, { useState} from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// //

const Login = () => {
  const [info, setInfo] = useState({
    email: "",
    password: "",
    type:"customer"
  });
  const [isError,setError]=useState(false)

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(info);
    console.log(process.env)
    if(info.type==="admin"){
        if(info.email==="admin123@mail.com" && info.password==="admin123"){
          localStorage.setItem("info",JSON.stringify({type:'admin'}));
          navigate("/admin");

        }
        else{
            setError(true)
            console.log("Invalid Credential");
            
        }
        return;
    }
    const response=await axios.get(process.env.REACT_APP_API_URL+`${info.email}`);
    console.log("yo")
   
    if(!response.data || response.data.type!=info.type || response.data.password!== info.password){
        console.log("Invalid Credential")
        setError(true)
    }
    else{

        console.log("fetched successfuly");
        console.log(response.data);
        const reqInfo={
            name:response.data.name,
            email:response.data.email,
            type:response.data.type

        }
        localStorage.setItem("info",JSON.stringify(reqInfo));
        navigate(`/${reqInfo.type}`);
    }



    
  };
  const navigate = useNavigate();
  return (
    <div className="w-[55vh]  shadow-xl flex center justify-center self-auto mb-20 mt-20 pt-5 pb-5 bg-white rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="bg-white text-xl">
            {isError && <div className="text-red-500">Invalid Credential !</div>}
            <div>Type</div>
            <div>
            <select className="  mt-2 w-[42vh] shadow-md border-2 py-1" name="type" id="type" onChange={handleChange}>
              <option value="customer">Customer</option>
              <option value="retailManager">Retail Manager</option>
              <option value="applicant">Manager Applicant</option>

              <option value="supplier">Supplier</option>
              <option value="admin">Admin</option>
            </select>
            </div>
          

          <div className="mt-3 mb-2 ">
            Email
            </div>
            <input
              className="border-2 w-[42vh] shadow-md py-1"
              type="email"
              name="email"
              id="email"
              onChange={handleChange}
            />
          

          <div className="mt-3 mb-2">
            Password
            </div>
            <input
              className="border-2 w-[42vh] shadow-md py-1"
              type="password"
              name="password"
              id="password"
              onChange={handleChange}
            />
          
          <div className="mt-4"> 
            <input
              className="border-2 mb-2  w-[42vh] text-2xl shadow-md py-1"
              type="submit"
              value="Login"
            />
          </div>
          <div className="flex justify-center mt-2 ">
            Don't have account:{" "}
            <div
              className="pl-2 text-cyan-500 cursor-pointer"
              onClick={() => navigate("/register")}
            >
              Create account{" "}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
