import React from 'react'
import CarouselHome from './CarouselHome'
import { useNavigate } from 'react-router-dom'

const HomePage = () => {
 const navigate=useNavigate()
  return (
    <div className=''><CarouselHome />
    <div className='flex justify-center'>
    
    <div className='mt-3 text-xl ml-2 '>SHOP BY CATEGORY</div>
    </div>
    <div className='flex justify-center text-white text-xl'>
    <div onClick={()=>navigate("products/all")}className='border-2 cursor-pointer hover:scale-105 pt-[5vh] pl-1 my-4 w-[50vh] rounded-lg h-[19vh] mr-7 bg-gradient-to-r from-cyan-500 to-blue-500'>Electronics</div>
    <div onClick={()=>navigate("products/all")}className='border-2 cursor-pointer hover:scale-105 pt-[5vh] pl-1 my-4 w-[50vh] rounded-lg h-[19vh] mr-7 bg-gradient-to-r from-sky-500 to-indigo-500'>Food</div>
    <div onClick={()=>navigate("products/all")}className='border-2 cursor-pointer hover:scale-105 pt-[5vh] pl-1 my-4 w-[50vh] rounded-lg h-[19vh] mr-7 bg-gradient-to-r from-violet-500 to-fuchsia-500'>Hygene And Personal Care</div>
    <div onClick={()=>navigate("products/all")}className='border-2 cursor-pointer hover:scale-105 pt-[5vh] pl-1 my-4 w-[50vh] rounded-lg h-[19vh]  bg-gradient-to-r from-purple-500 to-pink-500'>Kitchen Appliances</div>
    </div>
    
    </div>
   
   
  )
}

export default HomePage