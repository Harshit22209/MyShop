import React from 'react'
import ProductEntry from './ProductEntry'

const TableBox = ({trans_id,orders}) => {
    console.log(trans_id,orders)
  return (
    <div>
    <div className='mb-5'>
        <div className='w-[30vh] h-[5vh] px-2 bg-[#76ABAE]/75 text-white text-lg shadow-md rounded-t-md'>Transaction ID : {trans_id}</div>
        <div className='w-[170vh] shadow-md px-2 pt-2 border-y-2'>
            <div className='text-slate-400 font-semibold mb-3 text-lg'>Date: {orders[0].transaction.time.substring(0,10)}</div>
            {orders.map((order) =>(
                <ProductEntry key={order.inventory.inventory_id} order={order}/>
            ))}
            
        </div>
    </div>
    </div>
  )
}

export default TableBox