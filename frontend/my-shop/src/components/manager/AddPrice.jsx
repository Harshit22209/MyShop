import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
const AddPrice = (props) => {
    const [pricing,setPricing]=useState({price:0,start_date:"",end_date:""});
    const [error,setError]=useState(false)
    const [isAdded,setIsAdded]=useState(false);
    const handleAdd=async()=>{
        if(pricing.start_date=="") {setError("Start date cant be empty");
        return;
    }
        const sdate=new Date(pricing.start_date);
        const edate=new Date(pricing.end_date);
        if(edate<sdate){
            setError("end_date should be greater than start_Date");
            return;
        }
        try{
           
            const response=await axios.post(process.env.REACT_APP_API_URL+`pricing/add/${props.inventory_id}`,pricing)
            console.log(response.status)
            if(response.status=== 200) {
            setIsAdded(true);}
            else setError("Overlapping Dates");
            return;
        }
        catch(error) {
            setError(error.response.data)

            console.log(error);
        // setError(true);
        }
    }
  return (
    <div className=''>
        {isAdded?<div className='text-green-700 text-3xl'>Added Successfully</div>:
        <div>
        {  <div className='text-red-700'>{error} 
        </div>}
       
        <div>Price: 
        <input className="ml-2 rounded-md pl-1 w-[20vh]" type="number" name="price" id="" value={pricing.price} onChange={(e)=>setPricing({...pricing,price:e.target.value})} />
        </div>
        <div className='flex gap-2'>
        <div className='mt-2'>Start Date:  <DatePicker
         id="dateInput"
         selected={pricing.start_date}
         onChange={(date)=>setPricing({...pricing,start_date:date})}
         dateFormat="yyyy-MM-dd"
         className='rounded-md w-[20vh] pl-1 ml-2'
         minDate={new Date()}
       /> </div>
      
        <div className='mt-2'>End Date:  <DatePicker
         id="dateInput"
         selected={pricing.end_date}
         onChange={(date)=>setPricing({...pricing,end_date:date})}
         dateFormat="yyyy-MM-dd"
         className='rounded-md w-[20vh] pl-1 ml-2'
         popperPlacement="bottom-start" 
       /> </div>
       </div>
       <button className="bg-green-500 text-white px-4 py-2 mr-2 mt-2" onClick={()=>handleAdd()}>
            Add
        </button>
        </div>}
       </div>
  )
}

export default AddPrice