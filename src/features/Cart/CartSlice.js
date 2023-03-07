import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value:[],
}


export const CartSlice = createSlice({
   name:'Cart',
   initialState,
   reducers:{
    addItem:(state,action)=>{
         state.value.push(action.payload)
        
    },

    // decrement:(state)=>{
    //     state.value-=1
    // },

    // incrementByAmouunt:(state,action)=>{
    //     state.value+=action.payload
    // },
   } ,
})

export const {addItem} = CartSlice.actions

export default CartSlice.reducer