import React, { useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import ProductsPage from './ProductsPage';
import BuyPage from './BuyPage';
import SalesPage from './SalesPage';
import cartImg from '../shared/shopping-cart.png'
import Cart from './Cart';
const Warehouse = () => {

    let {id}=useParams();
    const [option, setOption]=useState("");
    const [disable,setDisable]=useState(false);
    console.log(id);
      return (
    <div>
        {
        disable && <div className='bg-stone-500  drop-shadow-lg h-[85vh] w-[200vh]   fixed opacity-95 z-10 ml-12 overflow-auto'>
               <button className="bg-red-600/75  text-xl float-end text-white px-4 hover:bg-red-500" onClick={()=>setDisable(false)}>
                X
              </button>
                <Cart id={id} />
            
        </div>
        }
        <div className='mx-auto mb-3 flex justify-center text-2xl'>Warehouse Id:{" "}{id}</div>
    <div className='flex justify-center gap-20 text-3xl'>
        
    <button onClick={()=>setOption('products')} className={`border-2 py-2 px-4 w-[30vh] rounded-md ${option=='products'? 'bg-indigo-500/75':'bg-indigo-300/75'}`}>Products</button>
    <button onClick={()=>setOption('buy')} className={`border-2 py-2 px-4 w-[30vh] rounded-md ${option=='buy'? 'bg-indigo-500/75':'bg-indigo-300/75'}`}>Buy</button>
    <button onClick={()=>setOption('sales')} className={`border-2 py-2 px-4 w-[30vh] rounded-md ${option=='sales'? 'bg-indigo-500/75':'bg-indigo-300/75'}`}>Sales</button>
    <img
                src={cartImg}
                alt={"Cart"}
                className="h-10 w-15 object-cover rounded"
              onClick={()=>setDisable(true)}/>
        
    </div>
    {option=='products' &&<div><ProductsPage id={id} /></div>}
    {option=='buy' &&<div><BuyPage id={id} /></div>}
    {option=='sales' &&<div><SalesPage id={id} /></div>}
    </div>
  )
}

export default Warehouse