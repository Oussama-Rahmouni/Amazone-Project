import {useMutation} from 'react-query'
import api from './apiConfig';

export const useSearchMutation = (handleSuccess, handleError) => {
    return useMutation(
      async (searchTerm) => {
        const response = await api.post('/product/search', { searchTerm });
        return response.data;
      },
      {
        onSuccess: handleSuccess,
        onError: handleError
      }
    );
  };