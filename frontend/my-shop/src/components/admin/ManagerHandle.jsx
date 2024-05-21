import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import ApplicantTable from './ApplicantTable';
import ManagerCard from './ManagerCard';
const ManagerHandle = () => {
   const navigate=useNavigate();
   const [showApplications,setShowApplications]=useState(false);
   const [applications,setApplications]=useState(null);
   const [managers,setManagers]=useState([]);
   const [retry,setRetry]=useState(false);
   const recieveApplications= async()=>{
    try {
        const response = await axios.get(
          process.env.REACT_APP_API_URL+`pendingApplications`
        );
        
        console.log(response.data);
        setApplications(response.data);
      } catch (error) {
        console.log(error);
      }
   } 
   useEffect(() => {
    const info = JSON.parse(localStorage.getItem("info"));
    console.log(info);
    async function fetchManagers() {
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_URL+`allManagers`
        );
        console.log("u");

        // console.log(response.data);
        setManagers(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchManagers();
  }, [retry]);
   return (

    <div className='relative'>
        {
        applications && <div className='bg-slate-500  drop-shadow-lg h-[85vh] w-[200vh]   fixed opacity-90 z-10 ml-12 '>
               <button className="bg-red-600/75  text-xl float-end text-white px-4 hover:bg-red-500" onClick={()=>setApplications(null)}>
                X
              </button>
                <ApplicantTable applications={applications} />
            
        </div>
        }
        <div>
            <div className='flex justify-end mb-10 mr-20 text-2xl'>
            <button className="bg-yellow-500 text-white px-4 py-2 mr-2 mt-2" onClick={()=>
            {
              setRetry(false);
            }}>
       Reload
        </button>   
         <button className="bg-blue-500 text-white px-4 py-2 mr-2 mt-2" onClick={()=>
            {
                if(!applications) {
                    
                    recieveApplications();
                    
                }
            }}>
        Show Applications
        </button>
      
        </div>
        <div className='ml-5 '>
            {managers.map((manager)=>(
                // {console.log(manager)}
                <ManagerCard info={manager} />
            ))}
        </div>
        </div>
    </div>
  )
}

export default ManagerHandle