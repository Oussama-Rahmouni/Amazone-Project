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


// services/home.js

export async function fetchIdsAndProducts() {
    try {
        // Fetch IDs from the database
        const result = await api.get("/client/getit");
        const ids = result.data;

        console.log("Here is data: ", ids);
        
        // Parse the itemsIds which are stored as strings resembling arrays
        const requests = ids.map((item) =>
            api.get(`/client/home-products?ids=${JSON.parse(item.itemsIds).join(',')}`)
        );

        const responses = await Promise.all(requests);
        const dataObjects = responses.map(response => response.data);

        return dataObjects;
    } catch (error) {
        console.error("Error fetching IDs and products:", error);
        throw error;
    }
}

  