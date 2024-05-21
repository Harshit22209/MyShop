import React,{useEffect,useState} from 'react'
import axios from 'axios';
import InventoryManage from './InventoryManage';

const ProductsPage = (props) => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        const fetchProducts=async()=>{
            try{
                const response=await axios.get(process.env.REACT_APP_API_URL+`allProducts/warehouse/${props.id}`);
                console.log(response.data);
                setProducts(response.data);
            }
            catch(error){console.log(error);}
        }
        console.log("yo");
        fetchProducts();
    },[])
    const [inventory,setInventory]=useState(null);
    return (
    <div>
    {
      inventory &&
      <div className='flex justify-center bg-white'> <div className=' bg-slate-100  h-[50vh] shadow-lg shadow-red-900  fixed  z-10  overflow-auto'>
             <button className="bg-red-600/75  text-xl float-end text-white px-4 hover:bg-red-500" onClick={()=>setInventory(null)}>
              X
            </button>
              <InventoryManage id={props.id} inventory={inventory} />
          
      </div>
      </div>
      }
    <table className="ml-10 w-[201vh] mt-5 bg-white border-y-2 border-gray-300">
      <thead>
        <tr>
          <th className="border-b-2 p-2">Inventory_Id</th>
          <th className="border-b-2 p-2">category</th>

          <th className="border-b-2 p-2">Image</th>
          <th className="border-b-2 p-2">Name</th>
          <th className="border-b-2 p-2">Qty</th>
          <th className="border-b-2 p-2">Supplier_ID</th>
          
          <th className="border-b-2 p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((item) => (
          <tr key={item.inventory_id}>
            <td className="border-b p-2">{item.inventory_id}</td>
            <td className="border-b p-2">{item.product.category}</td>

            <td className="border-b p-2">
              <img
                src={item.product.img}
                alt={item.product.name}
                className="h-20 w-20 object-cover rounded"
              />
            </td>
            <td className="border-b p-2">{item.product.name}</td>
            <td className="border-b p-2">{item.qty}</td>
            <td className="border-b p-2">{item.product.supplier.supplier_id}</td>
            <td className="border-b p-2">
              <button className="bg-blue-500 text-white px-4 py-2 mr-2" onClick={()=>setInventory(item)}>
                Manage 
              </button>
             
            </td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  )
}

export default ProductsPage
