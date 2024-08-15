import {useMutation} from 'react-query'
import api from './apiConfig';

const searchProducts = async (searchTerm, categoryFilter = '') => {
  try {
      const response = await api.get('/products/search', {
          params: {
              q: searchTerm,
              category: categoryFilter
          }
      });
      return response.data;
  } catch (error) {
      throw error;
  }
};


export const useSearchMutation = (handleSuccess, handleError) => {
    return useMutation(searchProducts
      ,
      {
        onSuccess: handleSuccess,
        onError: handleError
      }
    );
  };