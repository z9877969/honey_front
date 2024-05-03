import axios from 'axios';

axios.defaults.baseURL =
  'https://honey-e1eaa-default-rtdb.europe-west1.firebasedatabase.app';

export const fetchReviews = async () => {
  try {
    const res = await axios.get('/reviews.json');
    return res.data;
  } catch (error) {
    throw new Error(error.message);
  }
};
