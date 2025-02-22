import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
        const {name, image, cost} = action.payload;
        const existingItem = state.items.find(item=>item.name == action.name);
        if(existingItem){
            existingItem.quantity++;
        }else{
            state.items.push({ name, image, cost, quantity: 1});
        }
    },
    removeItem: (state, action) => {
        state.items = state.items.filter((item)=>item.name != action.payload.name);
    },
    updateQuantity: (state, action) => {
        const {name , quantity} = action.payload;
        console.log("name", name);
        console.log("quantity", quantity);
        console.log("name", name);

        const itemToUpdate = state.items.find((i) => i.name === name);
        console.log("itemToUpdate name", itemToUpdate.name);
        console.log("itemToUpdate quantity", itemToUpdate.quantity);
        
        if(itemToUpdate){
            itemToUpdate.quantity = quantity;
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
