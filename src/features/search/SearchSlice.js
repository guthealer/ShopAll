import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
    value:'',
}


export const SearchSlice = createSlice({
   name:'Cart',
   initialState,
   reducers:{
    searchItem:(state,action)=>{
         state.value=action.payload
         console.log(action.payload)
    },

    // decrement:(state)=>{
    //     state.value-=1
    // },

    // incrementByAmouunt:(state,action)=>{
    //     state.value+=action.payload
    // },
   } ,
})

export const {searchItem} = SearchSlice.actions

export default SearchSlice.reducer