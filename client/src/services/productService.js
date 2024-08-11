// src/services/productService.js
import api from './apiConfig';
import { useQuery } from 'react-query';

// Fetch all products
export const fetchProducts = async () => {
    const response = await api.get('/products');
    return response.data;
};

// Custom hook to manage fetching products with caching and refetching
export const useFetchProducts = () => {
    return useQuery(['products'], fetchProducts, {
        // Refetch the data every 5 minutes to keep it fresh
        refetchInterval: 300000,
        onSuccess: () => console.log('Products fetched successfully.'),
        onError: (error) => console.error('Error fetching products:', error)
    });
};

// Function to fetch a single product detail
export const fetchProductDetails = async (productId) => {
    const response = await api.get(`/products/${productId}`);
    return response.data;
};

// Custom hook for fetching product details with caching
export const useFetchProductDetails = (productId) => {
    return useQuery(['productDetails', productId], () => fetchProductDetails(productId), {
        enabled: !!productId,  // Only fetch when productId is available
        onSuccess: () => console.log('Product details fetched successfully.'),
        onError: (error) => console.error('Error fetching product details:', error)
    });
};


export const getCategoryProducts = async (category) =>{
    try {
        const result = await api.get(`/product/category/${category}`)
        return result.data
    } catch (error) {
        console.log("an issue happened while geting categorie data ", error)
    }
}

export const getAllProducts = async () =>{
    try {
        const result = await api.get(`/product`)
        return result.data
    } catch (error) {
        console.log("error in getting all data", error)
        return error
    }
}