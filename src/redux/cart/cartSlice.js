import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { honey } from 'modules/cart/images';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    products: [
      {
        id: 1,
        title: 'Мед квітковий натуральний',
        image: honey,
        weight: '0,25',
        quantity: 1,
        price: 100,
      },
      {
        id: 2,
        title: 'Мед з волоськимим горіхами',
        image: honey,
        weight: '0,25',
        quantity: 1,
        price: 200,
      },
      {
        id: 3,
        title: 'Мед акацієвий натуральний',
        image: honey,
        weight: '0,25',
        quantity: 1,
        price: 100,
      },
      {
        id: 4,
        title: 'Мед ріпаковий натуральний',
        image: honey,
        weight: '0,25',
        quantity: 1,
        price: 500,
      },
      {
        id: 5,
        title: 'Мед соняшниковий натуральний',
        image: honey,
        weight: '0,25',
        quantity: 1,
        price: 250,
      },
    ],
    // totalPrice: 0,
  },
  reducers: {
    addProduct(state, action) {
      state.products.push(action.payload);
    },
    deleteProduct(state, action) {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
    increaseQuantity(state, action) {
      const productId = action.payload;
      const product = state.products.find((prod) => prod.id === productId);
      if (product) {
        product.quantity += 1;
      }
    },
    decreaseQuantity(state, action) {
      const productId = action.payload;
      const product = state.products.find((prod) => prod.id === productId);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      }
    },
  },
  selectors: {
    selectProducts: (state) => state.products,
  },
});

export const { addProduct, deleteProduct, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;

export const { selectProducts } = cartSlice.selectors;

const cartPersistConfig = {
  key: 'cart',
  storage,
  whitelist: ['products'],
};

export const persistedCartReducer = persistReducer(
  cartPersistConfig,
  cartSlice.reducer
);
