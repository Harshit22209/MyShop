import React from 'react'
import axios from 'axios'
const ProductCard = (props) => {
  const addToCart=async(iId)=>{
    console.log("yoooooooooo")
    const cId=JSON.parse(localStorage.getItem("info")).email;
    try{
      console.log("bro");
      const response=await axios.post(process.env.REACT_APP_API_URL+`customer/addItemToCart/${cId}/${iId}`,{});
      console.log("added");
      window.alert("Added Successfuly");
    }
    catch(error){
      console.log(error);
    }

  }
  const item=props.inventory;
// console.log(props.product);
  return (
    <div className='border-2 h-[58vh] w-[45vh] ' key={item.inventory.inventory_id}>
       <img className="h-[38vh] w-[45vh] border-2" src={item.inventory.product.img} alt="Image"  />
       <div className='grid grid-cols-6 mt-2 gap-2 pl-1'>
        <div className=' border-slate-200 col-span-4 '>
        <div className='text-orange-600 text-lg'>{item.inventory.product.name}</div>
        <div className='text-sm text-slate-400'>Warehouse: {item.inventory.warehouse.name}</div>
        </div>
        <div className=''>Rs. {item.price}</div>
        
        </div>
        <div className='flex justify-center bg-yellow-300 mt-4 py-1 mx-2 '>
        <div onClick={()=>addToCart(item.inventory.inventory_id)} className=' px-auto'>Add to cart</div>
        </div> 
    </div>
  )
}

export default ProductCard