import api from './apiConfig';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { saveIntendedRoute } from '../redux/actions/navigationActions';

const addToCart = async ({ products, user, loading, navigate, dispatch }) => {
    // If loading, you might want to show a loading state or simply return
    if (loading) {
        console.log('Still loading...');
        return;
    }
    // If the user is not logged in, redirect to the login page
    if (!user) {
        dispatch(saveIntendedRoute('/cart')); // Save the intended route
        navigate('/login');  // Redirect to login
        return;
    }
    // If the user is logged in, proceed to add to cart
    const result = await api.post("/cart/add", { products });
    return result.data;
}

export const useAddToCart = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    return useMutation(({ products, user, loading }) => (
        addToCart({ products, user,loading,  navigate, dispatch  })), 
        {
        onSuccess: (data) => {
            navigate(data.redirect);
        },
        onError: (error) => {
            console.error('Adding to cart failed', error);
            if (error.message === 'User not logged in') {
                dispatch(saveIntendedRoute('/shipping'));
                navigate('/login');
            } else {
                console.log('Adding to cart failed: ' + error.message);
            }
        }
    });
}


const onSuccess = async (data) => {
    console.log("here")
    navigate("/");
  };
  
  const onError = async (data) => {
    alert("something worng happend");
  };

  const addShippingAddress = async (addressData) => {
    console.log("hay l'adressù ", addressData)
    const response = await api.post("/cart/shipping", addressData);
    console.log("hay response ", response)
    return response.data;
  };

export const useAddShippingAddress = () =>{
    console.log("the use state")
    return useMutation(addShippingAddress,{
        onSuccess,
        onError
    })
}