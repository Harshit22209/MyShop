import React, { useEffect, useState } from "react";
import TableBox from "./TableBox";
import axios from "axios";
//

const OrdersPage = () => {
  const [orders, setOrders] = useState([]);
  const [transacts,setTransacts]=useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const email = JSON.parse(localStorage.getItem("info")).email;

        console.log(email);
        const response = await axios.get(
          process.env.REACT_APP_API_URL+`customer/${email}/orders`
        );
        console.log(response.data);
        const data = response.data;
        let groupedObjects = {};

        // Iterate through the list
        data.forEach((obj) => {
          // Get the trans_id value from the object
          let transId = obj.transaction.trans_id;

          // Check if the trans_id already exists in the groupedObjects dictionary
          if (groupedObjects.hasOwnProperty(transId)) {
            // If it exists, push the object to the existing array
            groupedObjects[transId].push(obj);
          } else {
            // If it doesn't exist, create a new array with the object and assign it to the trans_id key
            groupedObjects[transId] = [obj];
          }
        });
        setOrders(groupedObjects);
        setTransacts(Object.keys(groupedObjects).sort((a,b)=>b-a))
        console.log(groupedObjects);
        console.log(Object.keys(groupedObjects).sort((a,b)=>b-a))
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);
  return (
    <div className="flex justify-center mt-5">
        <div>
        {transacts.map((transId)=>(
            <TableBox key={transId} trans_id={transId} orders={orders[transId]} />
        ))}
        </div>
    </div>
  );
};

export default OrdersPage;
