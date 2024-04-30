import { createSlice } from '@reduxjs/toolkit';
// import { persistReducer } from 'redux-persist';
import { initialStateProducts } from './constants';
import { getProducts } from 'modules/ourProducts/service/service';

const productsSlice = createSlice({
    name: "products",
    initialState: initialStateProducts,
    extraReducers: (builder) => {
        builder
            .addCase(getProducts.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(getProducts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.productsItems = action.payload;
            })
    }
}
);


// export const productsReducer = persistReducer(
//     productsSlice.reducer
// );
export const productsReducer = productsSlice.reducer;