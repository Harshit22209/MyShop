import React from 'react'

const ManagerCard = (props) => {
  const info=props.info;
  console.log("y");
  console.log(props);
  console.log(info);
  return (
    <div className='flex gap-5  w-[50vh] p-2 border-1 border-vilot-500 shadow-xl text-lg'>
        <div className='pt-1'>
        <div>Manager_Id: {info.manager_id}</div>
        <div>Name: {info.user.name}</div>
        <div>City: {info.user.city}</div>
        <div>Email: {info.user.email}</div>
        
        <div>Phone No: {info.user.contactNo}</div>
        <div>Warehouse: </div>
        </div>
        <div className='my-auto'>
         <div>   
        <button className="bg-blue-500/75 text-white w-[15vh] px-4 py-2 mr-2 mb-2" >Edit</button>
        </div>
        <div>
        <button className="bg-red-500/75 text-white w-[15vh] px-4 py-2 mr-2" >Remove</button>
        </div> 
        
        </div>
    </div>
  )
}

export default ManagerCard