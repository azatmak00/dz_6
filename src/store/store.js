import {configureStore} from "@reduxjs/toolkit";
import dataProduct  from '../reducer/dataSlice'
const store = configureStore({
    reducer:{
        data: dataProduct,
    }
})
export default store