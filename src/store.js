import { configureStore } from "@reduxjs/toolkit";

import counterReducer from '../src/features/counter/counterSlice'
import cartReducer from '../src/features/Cart/CartSlice'
import searchReducer from '../src/features/search/SearchSlice'


export const store  = configureStore({
    reducer:{
        counter:counterReducer,
        cart:cartReducer,
        search:searchReducer,
    }
})