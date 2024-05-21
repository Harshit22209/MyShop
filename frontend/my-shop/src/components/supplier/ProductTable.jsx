import React, { useState,useEffect } from "react";
import cameraImg from "../../resources/camera.jpg";
import axios from "axios";
//

const ProductTable = () => {

  const [products,setProducts]=useState([]);
  useEffect(() => {
    const info = JSON.parse(localStorage.getItem("info"));
    console.log(info);
    async function fetchProducts() {
      try {
        const response = await axios.get(
          process.env.REACT_APP_API_URL+`getAllProduct/${info.email}`
        );
        console.log(response.data);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProducts();
  }, []);
  const handleDelete=async(pId,sId)=>{
    try{
      const response=await axios.delete(process.env.REACT_APP_API_URL+`product/${pId}`);
      setProducts(products.filter((product)=>product.id!=pId))  
    } catch(error){
      console.log(error);
    }

  }
  return (
    <table className="ml-10 w-[200vh] bg-white border-y-2 border-gray-300">
      <thead>
        <tr>
          <th className="border-b-2 p-2">id</th>
          <th className="border-b-2 p-2">category</th>

          <th className="border-b-2 p-2">Image</th>
          <th className="border-b-2 p-2">Name</th>
          <th className="border-b-2 p-2">Price</th>
          <th className="border-b-2 p-2">Quantity</th>
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
                className="h-10 w-10 object-cover rounded"
              />
            </td>
            <td className="border-b p-2">{product.name}</td>
            <td className="border-b p-2">Rs.{product.price}</td>
            <td className="border-b p-2">{product.qty}</td>
            <td className="border-b p-2">
              <button className="bg-blue-500 text-white px-4 py-2 mr-2" >
                Edit
              </button>
              
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
