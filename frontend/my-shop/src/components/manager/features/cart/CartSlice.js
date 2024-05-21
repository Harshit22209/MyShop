import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      let id=action.payload.product.id;
      let flag=false
      state.items.forEach((item)=>{
        if(item.product.id==id){
          flag=true;
        }
      })
      if(!flag)
        state.items.push(action.payload);
    },
    deleteItem: (state, action) => {
       state.items = state.items.filter((item) => item.product.id !== action.payload);
       
    },
    updateItem: (state,action)=>{
        //update the qty
        let items=state.items;
        let newItems=[]
        let id=action.payload.id;
        let newQty=action.payload.qty;
        items.forEach((item)=>{
          if(item.product.id===id){
            newItems.push({product:item.product,qty:newQty});
          }
          else newItems.push(item)
        })
        state.items=newItems
    },
    clear: (state, action) => {
      state.items=[];
      
   }
    
  },
});

export const { addItem, deleteItem,updateItem,clear } = cartSlice.actions;

export default cartSlice.reducer;