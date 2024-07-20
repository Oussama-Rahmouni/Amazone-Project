import api from './apiConfig';
import axios from 'axios';

export const getItemsIds = async () => {
  try {
    const result = await api.get('/admin/getit');
    console.log("the message is from here", result.data);
    return result.data;
  } catch (error) {
    console.log("here issue, ", error);
    throw error;
  }
};


export const submitData = async (data) => {
  try {
    const result = await api.post('/product/submit', data);
    return result.data;
  } catch (error) {
    throw error;
  }
};