import api from './apiConfig';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';


const addToCart = async (products) =>{
      const result = await api.post("/cart/add", {products})
      return result.data
}

export const useAddToCart = () =>{
    const navigate = useNavigate()
    return useMutation(addToCart , {
        onSuccess : (data)=>{
            navigate(data.redirect)
        },
        onError: (error) =>{
            console.error('adding to cart failed', error);
            alert('adding to cart failed ' + error.message);
        }
    },
)
}