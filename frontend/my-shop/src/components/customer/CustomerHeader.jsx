import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CategoriesDropDown from "./CategoriesDropDown";
import CartImg from "../shared/cart.png";
import CartImg2 from "../shared/cart2.png";
import axios from "axios";

const CustomerHeader = () => {
  const navigate = useNavigate();
  const [info, setInfo] = useState();
  const [showCart, setShowCart] = useState(false);
  const [items,setItems]=useState([]);
  const [amt,setAmt]=useState(0);
  const [qty,setQty]=useState(0);
  const [checkout,setCheckout]=useState(false);
  const [paymentMethod,setPaymentMethod]=useState("Cash");
  const [processing,setProcessing]=useState(false);
  const [successfull,setSuccessFull]=useState(false);
  const [failure,setFailure]=useState(false);
  const [bill,setBill] =useState({})
  useEffect(() => {
    console.log("yo");
    const getInfo = () => {
      const data = JSON.parse(localStorage.getItem("info"));
      console.log(data);
      setInfo(data);
    };
    getInfo();
  }, []);
  const handleLogOut = () => {
    localStorage.removeItem("info");
    navigate("/login");
  };
  const handleShowCart=async()=>{
    
    try{

      const response=await axios.get(process.env.REACT_APP_API_URL+`customer/cartitems/${info.email}`)
      let cost=0;
      let q=0;
      console.log(response.data);
      response.data.forEach(element => {
        cost+=element.price*element.qty;
        q+=element.qty;
      });
      
      setShowCart(true);
      setAmt(cost);
      setQty(q);
      setItems(response.data);
      
      
    }
    catch(error){
      console.log(error);
    }
    
  }
  const handleCheckout=()=>{
    setCheckout(true);
  }
  const handleBuy=async()=>{
    setProcessing(true);
    try{
      const response =await axios.post(process.env.REACT_APP_API_URL+`customer/${info.email}/checkout`,{items:items,amt:amt,transType:paymentMethod});
      console.log(response.data)
      setBill(response.data);
      setItems(response.data.orders)
      setSuccessFull(true);
    }
    catch(error){
      console.log(error);
      setFailure(true);
    }

  }
  const handleFailure=()=>{
    setFailure(false);
    setProcessing(false);
  }
  const handleClose=()=>{
    setShowCart(false);
    setBill({});
    setCheckout(false);
    setFailure(false);
    setProcessing(false);
    setSuccessFull(false);

  }
  const handleClear=async()=>{
    try{
      await axios.delete(process.env.REACT_APP_API_URL+`customer/${info.email}/clearCart`)
      setItems([])
      setAmt(0)
      setQty(0)
    }
    catch(error){
      console.log(error);
    }

  }
  const handleChange = (e) => {};
  return (
    <div className=" flex justify-between pr-10 pl-10 pb-3 pt-3 bg-[#76ABAE] shadow-md mb-2 text-white ">
      {info && <div>Hi, {info.name}</div>}
      <div className="text-2xl" onClick={() => navigate("/customer")}>
        MyShop
      </div>
      <div className="flex gap-4 z-40">

        <CategoriesDropDown />
        <div onClick={() => navigate("/customer/orders")}>Orders</div>

        <div onClick={() => navigate("/customer")}>Profile</div>

        <button
          className="bg-red-500/75 text-white px-4 "
          onClick={handleLogOut}
        >
          LogOut
        </button>
        <div onClick={handleShowCart}>
          <img className="h-[5vh]" src={CartImg2} alt="" />
        </div>
      </div>
      {showCart && (
        <div className=" flex fixed z-40 shadow-xl h-[100vh] w-full opacity-95 top-[0vh] right-0  text-black px-3 py-2 bg-white">
          <div className="  h-[100vh]   top-[0vh] right-0  ">
            {successfull && <div className="text-[#2C7865] text-2xl ml-1 font-semibold mt-5">Order Placed Successfuly</div>}
            {!checkout && <div className="bg-yellow-500 w-[15vh] mt-2 ml-12 text-black px-4 text-xl py-1 text-white hover:bg-yellow-400 cursor-pointer" onClick={handleClear}>CLEAR</div>}
            {items.map((item)=>(
              ((!successfull ?item.inventory.qty>0:true) && 
               <div className="grid grid-cols-7 mt-5 py-2 mx-5 rounded-md shadow-lg w-[120vh] px-2 " key={item.inventory.inventory_id}>
                {console.log(item)}
               <div className="col-span-2">
   
               { !checkout && <div className="  text-lg float-start pr-2 mr-2 text-black  hover:text-red-300 my-auto " >
                   X
                 </div>
                 }
                 <img
                   src={item.inventory.product.img}
                   alt={item.inventory.product.name}
                   className="h-35 w-40 object-cover rounded"
                 />
               </div>
               <div className="col-span-4 my-auto text-black">
                 <div >Name: {item.inventory.product.name}</div>
                 <div>Category: {item.inventory.product.category}</div>
                 <div>Seller:{item.inventory.warehouse.name}</div>
                 <div>
                 Qty: <input className="w-[8vh] text-black  rounded-sm pl-1" type="number" value={item.qty} name="" id="" />
               </div>
               </div>
               <div className="text-lg text-white-500">Rs. {!successfull?item.price:item.total_amt}</div>
             </div>
              )
            ))}
          </div>

          <div className=" fixed top-0 right-0 h-[100vh] w-[70vh] bg-[#76ABAE] text-black px-3 py-2 ">
            <button
              onClick={() => handleClose()}
              className="float-right text-3xl font-semibold "
            >
              X
            </button>
            {!processing && <div className="text-xl border-2 mx-5 mt-5 px-5 py-2 ">
             <div className="grid grid-cols-4 mb-2"> 
            <div className="col-span-3 text-slate-700">Amount:</div>
            <div className="text-">{amt}</div>
            
            </div>
            <div className="grid grid-cols-4 mb-2"> 
            <div className="col-span-3 text-slate-700">Quantity:</div>
            <div className="">{qty}</div>
            
            </div>
            <div className="grid grid-cols-4"> 
            <div className="col-span-3 text-slate-700">Delivery:</div>
            <div className="">0</div>
            
            </div>

            {!checkout && <div onClick={handleCheckout} className="bg-yellow-400 mt-4 flex justify-center py-2 text-slate-600"><div className="">Checkout</div></div>
             }
            
            </div>
            }
            {!processing && checkout && <div className="mt-5 text-xl mx-5 "><div className="">
              <div className="flex justify-center">
        <label htmlFor="type">Payment Method: </label>
            <select className="border-2 ml-2 text-black mb-5" name="type" id="type" onChange={(e)=>setPaymentMethod(e.target.value)}>
              <option value="Cash">Cash</option>
              <option value="Credit Card">Credit Card</option>
              <option value="Debit Card">Debit Card</option>

              <option value="Net Banking">Net Banking</option>
              <option value="UPI">UPI</option>
            </select>
            </div>
            <div className="flex justify-between">
            <button  className="bg-blue-500 text-white text-2xl px-4 py-1 mx-2" onClick={handleBuy} >
                Buy 
              </button>
              <button className="bg-yellow-500 text-white px-4 py-1 text-2xl" onClick={()=>setCheckout(false)}>
                Edit
                </button>
                </div>
            </div></div>}
            {processing && !successfull && !failure && <div className="text-3xl">Processing...</div> }
            {successfull && <div className="text-2xl text-white">Transaction completed Successfuly<div className="mt-5">Amount: {bill.amount}</div></div>}
            {failure && <div className="text-3xl" >Error in Placing Order.Try Again
            <div onClick={handleFailure} className="border-2 bg-red-100 px-3 py-2">Retry</div></div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomerHeader;
