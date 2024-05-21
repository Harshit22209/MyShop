import React, { useState,useEffect } from 'react'
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { updateItem } from './features/cart/CartSlice';
import AddPrice from './AddPrice';
const InventoryManage = (props) => {
  const inventory=props.inventory;
  const [option, setOption]=useState("");
  const [prices,setPrices]=useState({current:[],past:[],future:[]});
  const [currentPrice,setCurrentPrice]=useState(0);
  const [selectedDate, setSelectedDate] = useState('');
  const [error,setError]=useState(false)

 
  const [canEdit,setCanEdit]=useState(false);
  useEffect(()=>{
      const fetchProducts=async()=>{
          try{
              const response=await axios.get(process.env.REACT_APP_API_URL+`allpricing/${props.inventory.inventory_id}`);
              console.log(response.data);
              const data=response.data;
              console.log(data)
              const today=new Date();
              const newPrices={current:[],past:[],future:[]}
              data.forEach(price => {
                console.log(price)
                const sdate=new Date(price.start_date);
                let edate=price['end_date'];
                if(sdate>today) 
                    newPrices.future.push(price)
                else if(edate){
                    edate=new Date(edate);
                    if(edate<sdate) newPrices.past.push(price)
                    else newPrices.current.push(price)
                }
                else newPrices.current.push(price)
              });
              console.log(newPrices);
              setPrices(newPrices);
          }
          catch(error){console.log(error);}
      }
      console.log("yo");
      fetchProducts();
  },[])
  const handleSave=async(price)=>{
    const sdate=new Date(price.start_date);
    const edate=new Date(selectedDate);
    if(edate<sdate){
        console.log("end_date should be greater than start_Date");
        return;
    }
    try{
        let updatedP={...price}
        updatedP['end_date']=edate;
        updatedP['price']=currentPrice;
        const response=await axios.put(process.env.REACT_APP_API_URL+"pricing/update",updatedP)
        if(response.status=== 200) window.location.reload(false);
        else setError(true);
        return;
    }
    catch(error) {console.log(error)
    // setError(true);
    }

    

  }
  return (
    <div>
    <div className='flex justify-center gap-10 px-5'>
       <div onClick={()=>setOption("Add")} className={`cursor-pointer border-b-4 p-2 ${option=='Add'?'border-teal-100':''}`}>Add</div>
       <div onClick={()=>setOption("Current")} className={`cursor-pointer border-b-4 p-2 ${option=='Current'?'border-teal-100	':''}`}>Current</div>
       <div onClick={()=>setOption("Future")} className={`cursor-pointer border-b-4 p-2 ${option=='Future'?'border-teal-100':''}`}>Future</div>
       <div onClick={()=>setOption("Past")} className={`cursor-pointer border-b-4 p-2 ${option=='Past'?'border-teal-100':''}`}>Past</div>

    </div>
    <div className='mt-4 ml-5'>
    {error&& <div className='text-red-600'>Error</div>}
    {option=='Add' && <div><AddPrice inventory_id={inventory.inventory_id}/></div>}
    {option=='Current' && <div>{prices.current.length>0?<div>
       <div>Price: {!canEdit?prices.current[0].price:
       <input className="w-[20vh]" type="number" name="" id="" value={currentPrice} onChange={(e)=>setCurrentPrice(e.target.value)} />
       }</div>
       <div>Start Date: {prices.current[0].start_date}</div>
       <div>End Date: {!canEdit?prices.current[0]['end_date']: <DatePicker
        id="dateInput"
        selected={selectedDate}
        onChange={(date)=>setSelectedDate(date)}
        dateFormat="yyyy-MM-dd"
      />} </div>
       {!canEdit && <button className="bg-blue-500 text-white px-4 py-2 mr-2 mt-2" onClick={()=>setCanEdit(true)}>
        Edit
       </button>
        }
       {canEdit && <div>
        <button className="bg-green-500 text-white px-4 py-2 mr-2 mt-2" onClick={()=>handleSave(prices.current[0])}>
            Save
        </button>
        <button className="bg-red-500 text-white px-4 py-2 mt-2" onClick={()=>setCanEdit(false)}>
            Cancel
        </button>
        </div>}
    </div>:<div className='text-yellow-700'>No price is allocated for Today.</div>}</div>}
    {option=='Future' && <div>
        <div className='font-semibold grid grid-cols-7 gap-1 mb-2'>
        <div>Price</div>
        <div className='col-span-2'>Start Date</div>
        <div className='col-span-2'>End Date</div>
        <div className='col-span-2'>Action</div>
        </div>
        <div>
        {prices['future'].map((value,index)=>(
            
            <div className=' grid grid-cols-7 gap-1 text-gray-500 mb-1' key={index}>
               
            <div>{value.price}</div>
            <div className='col-span-2'>{value['start_date']}</div>
            <div className='col-span-2'>{value['end_date']}</div>
            <div className='col-span-2'><button className='bg-red-500 text-white rounded-sm px-2 py-1'>Delete</button></div>
            
            </div>
            
        ))}
        </div>
        
        
    </div>}
    {option=='Past' && <div>
        <div className='font-semibold grid grid-cols-5 gap-1 mb-2'>
        <div>Price</div>
        <div className='col-span-2'>Start Date</div>
        <div className='col-span-2'>End Date</div>
        
        </div>
        <div>
        {prices.past.map((value,index)=>(
            
            <div className=' grid grid-cols-5 gap-1 text-gray-500 mb-1' key={index}>
               
            <div>{value.price}</div>
            <div className='col-span-2'>{value['start_date']}</div>
            <div className='col-span-2'>{value['end_date']}</div>
           
            
            </div>
            
        ))}
        </div></div>}
    </div>
    </div>
  )
}

export default InventoryManage