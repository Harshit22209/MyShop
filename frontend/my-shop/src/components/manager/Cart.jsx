import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clear, deleteItem,updateItem } from "./features/cart/CartSlice";
import axios from "axios";
//
const Cart = (props) => {
  const products = useSelector((state) => state.cart.items);
  const [checkout,setcheckout]=useState(false);
  const dispatch=useDispatch();
  const [total,setTotal]=useState({amt:0,qty:0});
  const warehouse_id=props.id;
  // const [totalAmt,setTotalAmt]=useState(0);
  const [paymentMethod,setPaymentMethod]=useState("Cash");
  useEffect(() => {
    console.log(products);
    let qty=0;
    let amt=0;
    products.forEach(product => {
      qty+=parseInt(product.qty);
      amt+=parseInt(product.product.price)*parseInt(product.qty);
    });
    setTotal({amt:amt,qty:qty});
  }, [products]);
  
  const handleBuy=async()=>{
    console.log(paymentMethod);
    try{
    const response=await axios.post(process.env.REACT_APP_API_URL+`warehouse/${warehouse_id}/addItems/${paymentMethod}`,products);
    dispatch(clear())
    
    }
    catch(error) {
      console.log(error);
    }
  }
  const removeItem=(id)=>{
    console.log("id")
    dispatch(deleteItem(id))
  }
  const handleQty=(product,qty)=>{
    
    if(!checkout&& qty>0 && qty<=product.qty){
      dispatch(updateItem({id:product.id,qty:qty}));
    }
     
  
  }
  return (
    <div className=" text-white ">
      <div className="mt-5  flex justify-center gap-40 text-xl">
        <div>Amount:{" "}{total.amt}</div>
        <div>Items:{" "}{total.qty}</div>
        {!checkout ? <button className="bg-blue-700 text-white px-4 py-2 mr-2 opacity-100" onClick={()=>setcheckout(true)}>
          Checkout
        </button>:<div>
        <label htmlFor="type">Payment Method: </label>
            <select className="border-2 ml-2 text-black" name="type" id="type" onChange={(e)=>setPaymentMethod(e.target.value)}>
              <option value="Cash">Cash</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>

              <option value="Net Banking">Net Banking</option>
              <option value="UPI">UPI</option>
            </select>
            <button  className="bg-blue-500 text-white px-4 py-1 mx-2" onClick={handleBuy} >
                Buy 
              </button>
              <button className="bg-yellow-500 text-white px-4 py-1" onClick={()=>setcheckout(false)}>
                Edit
                </button>
            </div>}
      </div>
      <div className="flex justify-center ">
      <div>
        {/* {products} */}
        {products.map((item) => (
          <div className="grid grid-cols-7 mt-5 py-2 rounded-md shadow-lg w-[170vh]" key={item.product.id}>
            <div className="col-span-2">

            {!checkout && <button className="bg-red-600/75  text-lg float-start px-2 mx-2 text-white  hover:bg-red-500 my-auto" onClick={()=>removeItem(item.product.id)}>
                X
              </button>
              }
              <img
                src={item.product.img}
                alt={item.product.name}
                className="h-35 w-40 object-cover rounded"
              />
            </div>
            <div className="col-span-4 my-auto">
              <div >Name: {item.product.name}</div>
              <div>Category: {item.product.category}</div>
              <div>Description: {item.product.description}</div>
              <div>
              Qty: <input className="w-[8vh] text-black  rounded-sm pl-1" type="number" value={item.qty} name="" id="" onChange={(e)=>handleQty(item.product,e.target.value)} />
            </div>
            </div>
            <div className="text-lg text-white-500">Rs. {item.product.price}</div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Cart;
