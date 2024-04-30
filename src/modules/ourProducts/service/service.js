import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://honey-e1eaa-default-rtdb.europe-west1.firebasedatabase.app';

export const getProducts = createAsyncThunk(
    'products/fetchAll',
    async (_, thunkApi) => {
        try {
            const res = await axios.get('/products.json');
            return res.data;
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }

    }
);