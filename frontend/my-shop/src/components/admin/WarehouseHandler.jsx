import React,{useState,useEffect} from 'react'
import AddWarehouse from './AddWarehouse';
import axios from 'axios';
const WarehouseHandler = () => {
 
   const [disable,setDisable]=useState(false);
   const [warehouses,setWarehouses]=useState([]);
   const [retry,setRetry]=useState(false);
   const [managerChange,setManagerChange]=useState(null);
   const [managers,setManagers]=useState([])
   useEffect(() => {
    const info = JSON.parse(localStorage.getItem("info"));
    console.log(info);
    async function fetchManagers() {
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_URL+`admin/allWarehouses`
        );
        console.log("u");

        // console.log(response.data);
        setWarehouses(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchManagers();
  }, [retry]);
  const changeManager=(warehouse)=>{
        console.log(warehouse);
        setManagerChange({warehouse:warehouse,managerId:-1})
       
  }
  const fetchManagers=async()=>{
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
  const handleChange=(e)=>{
    console.log(e.target.value);
    console.log(managerChange);
    setManagerChange({...managerChange,managerId:e.target.value});
  }
  const saveManager=async()=>{
    console.log(managerChange);
    if(managerChange.managerId!=-1){
        try{
            const response=await axios.put(process.env.REACT_APP_API_URL+`admin/changeManager/${managerChange.managerId}/${managerChange.warehouse.warehouse_id}`)
            window.location.reload(false);
        }
        catch(error) {console.log(error);}
    }
  }
   return (

    <div className='relative'>
        {
        disable && <div className='bg-slate-500  drop-shadow-lg h-[85vh] w-[200vh]   fixed opacity-90 z-10 ml-12 '>
               <button className="bg-red-600/75  text-xl float-end text-white px-4 hover:bg-red-500" onClick={()=>setDisable(false)}>
                X
              </button>
                <AddWarehouse />
            
        </div>
        }
        {
        managerChange && <div className='bg-slate-400  drop-shadow-lg h-[85vh] w-[200vh]   fixed opacity-90 z-10 ml-12 '>
            <button className="bg-red-600/75  text-xl float-end text-white px-4 hover:bg-red-500" onClick={()=>setManagerChange(null)}>
              X
            </button>
            <div className='flex justify-center '>
            <div className=''>
            <div className='mb-15 flex justify-center '>
            <button className='mt-10 mb-10 border-2 rounded-md border-red-300 px-2 py-2 text-2xl bg-yellow-500 text-white w-[30vh]' onClick={fetchManagers}>Fetch Managers</button>
            </div>
            <div>
            <select className="border-2 ml-2 w-[50vh] text-xl rounded-sm " name="type" id="type" onChange={handleChange}>
                
              {managers.map((manager)=>(
                <option key={manager.manager_id} value={manager.manager_id}>{"id: "+manager.manager_id+" name: "+manager.user.name }</option>
              ))}
            <option value={-1} >None</option>
            </select>
            </div>
            <div className='mb-15 flex justify-center '>
            <button className='mt-10 mb-10 border-2 rounded-md  px-2 py-2 text-2xl bg-green-500 text-white w-[30vh]' onClick={saveManager}>Save</button>
            </div>
          </div>
          </div>
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
                if(!disable) {
                    
                    setDisable(true);
                    
                }
            }}>
        Add Warehouse
        </button>
      
        </div>
        <div className='ml-5 '>
          
            
                <table className="ml-10 w-[200vh] bg-white border-y-2 border-gray-300">
                <thead>
                  <tr>
                    <th className="border-b-2 p-2">Warehouse_Id</th>
                    <th className="border-b-2 p-2">Name</th>
          
                    <th className="border-b-2 p-2">Area</th>
                    <th className="border-b-2 p-2">City</th>
                    <th className="border-b-2 p-2">State</th>
                    <th className="border-b-2 p-2">PinCode</th>
                    <th className="border-b-2 p-2">Manager_id</th>
                    <th className="border-b-2 p-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {warehouses.map((warehouse)=> (
                    <tr key={warehouse.warehouse_id}>
                      <td className="border-b p-2">{warehouse.warehouse_id}</td>
                      <td className="border-b p-2">{warehouse.name}</td>
          
                      <td className="border-b p-2">{warehouse.area}</td>
                      <td className="border-b p-2">{warehouse.city}</td>
                      <td className="border-b p-2">{warehouse.state}</td>
                      <td className="border-b p-2">{warehouse.pinCode}</td>
                      <td className="border-b p-2  ">{warehouse.manager==null?"null":warehouse.manager.manager_id}
                      <span className='pl-3 text-gray-500  underline ' onClick={()=>changeManager(warehouse)}>change</span>
                      </td>
                      <td className="border-b p-2">
                        <button className="bg-blue-500 text-white px-4 py-2 mr-2">
                          Edit
                        </button>
                        <button className="bg-red-500 text-white px-4 py-2">
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
           
        </div>
        </div>
    </div>
  )
  
}

export default WarehouseHandler