import api from './apiConfig.js';

export const getBackgroundImages = async () => {
    try {
        const response = await api.get('/background-images');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getCategories = async () => {
    try {
        const response = await api.get('/categories');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getFeaturedProducts = async () => {
    try {
        const response = await api.get('/products/featured');
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const searchProducts = async (searchTerm, categoryFilter = '') => {
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
