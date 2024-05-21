import axios from "axios";
//
import React, { useState } from "react";
import AWS from 'aws-sdk';
import { useNavigate } from "react-router-dom";
const AddProduct = () => {
    const navigate=useNavigate()
    AWS.config.update({
        accessKeyId: process.env.REACT_APP_AWS_KEY,
        secretAccessKey: process.env.REACT_APP_AWS_SECRETKEY,
        region: process.env.REACT_APP_AWS_REGION, // e.g., us-east-1
      });
      const s3=new AWS.S3();
      const uploadToS3 = async (file) => {
        const params = {
          Bucket: process.env.REACT_APP_AWS_BUCKET,
          Key: file.name,
          Body: file,
          ACL: process.env.REACT_APP_AWS_ACL, // Adjust permissions as needed
        };
      
        try {
          const data = await s3.upload(params).promise();
          console.log('File uploaded successfully:', data.Location);
          return data.Location; // Save this URL to retrieve the image later
        } catch (error) {
          console.error('Error uploading file', error);
          throw error;
        }
      }; 
  const [selectedImage, setSelectedImage] = useState(null);
  const [productInfo,setProductInfo]=useState({
    name:"",
    category:"electronics",
    price:0,
    qty:0,
    description:""

  })
  const info=JSON.parse(localStorage.getItem("info"));
 
  const [errorMessage, setErrorImage]=useState("");
  const handleImageChange = (event) => {
    const file = event.target.files[0];

    // You can perform additional checks/validation on the file if needed

    if (file) {
        //setImageForUpload(file);
      // Convert the selected image to a data URL
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage({
            result:reader.result,
        file:file});
      };
      reader.readAsDataURL(file);
    }
  };
  const handleChange = (event) => {
    setProductInfo({...productInfo, [event.target.name]:event.target.value})
  };
  const handleSubmit =async()=>{ 
    if(productInfo.name==="" || productInfo.qty===0 || productInfo.price===0 || productInfo.description===0 || selectedImage===null){
        setErrorImage("Incomplete Info")
        return;
    }
    let supplierId=0;
    try{
        const response=await axios.get(process.env.REACT_APP_API_URL+`supplier/${info.email}`);
        supplierId=response.data.supplier_id;
        console.log(productInfo)
        console.log(response.data)
    }
    catch(error){
        console.log(error);
        throw error;
    }
    
    try{
        console.log(info);
        const url=await uploadToS3(selectedImage.file);
        console.log(supplierId);
        const reqInfo={
            ...productInfo,
            supplier_id: supplierId,
            img:url
        }
//  const reqInfo={
//             ...productInfo,
//             supplier_id: supplierId,
        
//         }
        const response=await axios.post(process.env.REACT_APP_API_URL+`${supplierId}/addProduct`,reqInfo);
        
        console.log(response);
        console.log(reqInfo);
        navigate("/supplier/")
        
        //console.log(info);
        
        }
        catch(error){
          console.log(error);
        }

  }
  return (
    <div className="flex gap-20 ml-20 min-w-full">
      <div>
        
        <input type="file" accept="image/*" onChange={handleImageChange} />

        {selectedImage ? (
          <div>
            <img
              src={selectedImage.result}
              alt="Selected"
              style={{ maxWidth: "100%", maxHeight: "200px" }}
            />
            <button
              className="bg-red-500 text-white px-4 py-2 mt-2"
              onClick={() => {
                setSelectedImage(null);
              }}
            >
              Remove
            </button>
          </div>
        ) : (
          <div className="h-[200px] border-2 flex justify-center ">
           <div className="mt-20 text-gray-500">Upload Image</div>
          </div>
        )}
      </div>
      <div className="w-[130vh] flex justify-center">
      <div className="text-xl">
        {errorMessage && <div className="w-[50vh] bg-red-300 text-neutral-100 flex mb-2 text-sm py-2 justify-center"> {errorMessage}</div>}
        <div>
          <div className="mb-2 text-xl">Name </div>
          <input
            className="border-2 border-purple-200 mb-2 w-[50vh]"
            type="text"
            name="name"
            id="name"
            onChange={handleChange}
          />
        </div>
        <div>
        <label htmlFor="category" >Type: </label>
            <select className="border-2 ml-4 mb-2 mt-1" name="category" id="category" onChange={handleChange}>
             
              <option value="electronics">Electronics</option>
              <option value="food">Food</option>
              <option value="fashion">Fashion</option>
              <option value="supplier">Hygene & personal care</option>
              <option value="kitchen">Kitchen Appliance</option>
              <option value="other">Other</option>

              
            </select>
        </div>
        <div>
          <div className="mb-2 text-xl">Description </div>
          
          <textarea className="border-2 text-sm" name="description" value={productInfo.description} onChange={handleChange} rows={4} cols={40} />
        </div>
        <div>
        <div className="mb-2 text-xl">Quantity </div>
          
          <input
            className="border-2 border-purple-200 mb-2 w-[50vh]"
            type="number"
            name="qty"
            id="qty"
            onChange={handleChange}
          />
        
    
        </div>
        <div>
        <div className="mb-2 text-xl">Price(in Rs) </div>
          
          <input
            className="border-2 border-purple-200 mb-2 w-[50vh]"
            type="number"
            name="price"
            id="price"
            onChange={handleChange}
          />
        
    
        </div>
        <div>
        
          
        <button className="bg-green-500 text-white px-4 py-2 mr-2 mt-4" onClick={handleSubmit}>Add Product</button>
        
    
        </div>
        </div>       
         
      </div>
    </div>
  );
};

export default AddProduct;
