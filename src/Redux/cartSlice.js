import { createSlice } from '@reduxjs/toolkit';
import localfunction from '../localfunction';
import { current } from '@reduxjs/toolkit';

const initialState = {
  cartData:localfunction(),
  lengthdata:null
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state,action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
       state.cartData=[...state.cartData,action.payload];
    },
    updateCartLength: (state) => {
      let sum=0;
       for(let i=0;i<state.cartData.length;i++)
       {
          sum=sum+state.cartData[i].count;
       }

       state.lengthdata=sum;
      },

    addCartLength:(state,action)=>{
      state.lengthdata=state.lengthdata+action.payload
    },

    deleteFromCart:(state,action)=>{
      state.cartData=state.cartData.filter((values)=>values.id!==action.payload.id);
      console.log(state.cartData);
    },
    updateCart:(state,action)=>{
      console.log(current(state));
      console.log(action.payload);
      state.cartData[action.payload.index].count=action.payload.count;
    
     
    }

    

  

   
  },
})

// Action creators are generated for each case reducer function
export const { increment,updateCartLength,addCartLength,deleteFromCart,updateCart} = cartSlice.actions;

export default cartSlice.reducer;