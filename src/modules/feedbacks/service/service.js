import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = '';

export const fetchReviews = createAsyncThunk(
  'reviews/fetchAll',
  async (_, thunkApi) => {
    try {
      const res = await axios.get('/reviews');
      return res.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
