import { createSlice } from '@reduxjs/toolkit';
import { initialStateProducts } from './constants';
import { getProducts } from 'modules/ourProducts/service/service';

const productsSlice = createSlice({
    name: "products",
    initialState: initialStateProducts,
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.fulfilled, (state, action) => {
                state.productsItems = action.payload;
            })
    }
}
);

export const productsReducer = productsSlice.reducer;