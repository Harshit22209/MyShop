import React,{useState,useEffect} from 'react'
import axios from 'axios';
import ProductCard from './ProductCard';

const Products = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const fetchProducts=async()=>{
            try{
                const info=JSON.parse(localStorage.getItem("info"));

                const response=await axios.get(process.env.REACT_APP_API_URL+`allProducts/customer/${info.email}`);
                console.log(response.data);
                setProducts(response.data);
            }
            catch(error){console.log(error);}
        }
        console.log("yo");
        fetchProducts();
    },[])
  return (
    <div className='mt-3 mx-12 grid grid-cols-4 gap-y-5 '>
        {products.map((product)=>(product.inventory.qty>0 &&<ProductCard inventory={product} key={product.inventory.inventory_id}/>))}
    </div>
  )
}

export default Products