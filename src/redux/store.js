import { configureStore } from "@reduxjs/toolkit";
import userSlice  from './Slices/users'
export const store = configureStore({
    reducer:{
      users : userSlice,
    }
})

