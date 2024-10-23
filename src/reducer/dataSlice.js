import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    product:[],
    filterProduct:[]
}

export const fetchProductAxios = createAsyncThunk(
    'data/fetchProductAxios',
    async (_,{dispatch}) => {
        const response = await axios.get('https://fakestoreapi.com/products')
        dispatch(addProduct(response.data))

    }
)
const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers:{
        addProduct: (state, action) => {
          state.product = action.payload
          state.filterProduct = action.payload
        },
        addFilterProduct:(state, action) => {
            state.filterProduct = state.product.filter((item) => item.title.toLowerCase().includes(action.payload.toLowerCase()));
        }
    },

})

export const {addFilterProduct,addProduct} = productsSlice.actions
export default productsSlice.reducer