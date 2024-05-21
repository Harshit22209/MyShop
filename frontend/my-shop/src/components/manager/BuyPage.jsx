import React,{useEffect,useState} from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from './features/cart/CartSlice';
const BuyPage = () => {
    const [products,setProducts]=useState([]);
    const [disable,setDisable]=useState(false);
    const [manager,setManager]=useState(null);
    const dispatch=useDispatch();
    //const selector=useSelector();
    const AddToCart=(product)=>{
       // console.log(product);
       dispatch(addItem({product:product,qty:1}));
        //const items=useSelector((state)=>state.items)
        console.log(product);



    }
    useEffect(()=>{
        const fetchProducts=async()=>{
            try{
                const response=await axios.get(process.env.REACT_APP_API_URL+"getAllProducts");
                console.log(response.data);
                setProducts(response.data);
            }
            catch(error){console.log(error);}
        }
        console.log("yo");
        fetchProducts();
    },[])
  return (
    <table className="ml-10 w-[201vh] mt-5 bg-white border-y-2 border-gray-300">
      <thead>
        <tr>
          <th className="border-b-2 p-2">id</th>
          <th className="border-b-2 p-2">category</th>

          <th className="border-b-2 p-2">Image</th>
          <th className="border-b-2 p-2">Name</th>
          <th className="border-b-2 p-2">Price</th>
          <th className="border-b-2 p-2">Supplier_ID</th>
          
          <th className="border-b-2 p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td className="border-b p-2">{product.id}</td>
            <td className="border-b p-2">{product.category}</td>

            <td className="border-b p-2">
              <img
                src={product.img}
                alt={product.name}
                className="h-20 w-20 object-cover rounded"
              />
            </td>
            <td className="border-b p-2">{product.name}</td>
            <td className="border-b p-2">Rs.{product.price}</td>
            <td className="border-b p-2">{product.supplier.supplier_id}</td>
            <td className="border-b p-2">
              <button onClick={()=>AddToCart(product)} className="bg-blue-500 text-white px-4 py-2 mr-2" >
                Add 
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2">
                More Info
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default BuyPage