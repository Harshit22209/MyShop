import React from 'react'

const ProductEntry = ({order}) => {
  
    return (
    
         <div className=" grid   py-3  rounded-md  w-full grid-cols-4  " >
          
         <div className="">

           <img
             src={order.inventory.product.img}
             alt={order.inventory.product.name}
             className="h-[20vh] w-[30vh] object-cover rounded border-2"
           />
         </div>
         <div className=' my-auto'>
           <div >Name: {order.inventory.product.name}</div>
           <div>Category: {order.inventory.product.category}</div>
           <div>Seller:{order.inventory.warehouse.name}</div>
           </div>
           <div className='flex justify-center my-auto px-auto'>
           <div>           Qty: {order.qty}</div>
         </div>
        
         <div className="flex justify-center text-lg text-white-500 my-auto">Rs. {order.total_amt}</div>
       </div>
       
       
  )
}

export default ProductEntry