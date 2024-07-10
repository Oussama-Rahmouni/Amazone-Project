// src/services/userService.js
import api from './apiConfig';
import { useQuery } from '@tanstack/react-query';

// Fetch user profile information
export const fetchUserProfile = async (userId) => {
    const response = await api.get(`/users/${userId}`);
    return response.data;
};

// React Query hook for user profile data
export const useUserProfile = (userId) => {
    return useQuery(['userProfile', userId], () => fetchUserProfile(userId), {
        enabled: !!userId,
        onSuccess: () => console.log('User profile fetched successfully.'),
        onError: (error) => {
            console.error('Failed to fetch user profile:', error);
            alert('Failed to fetch user profile: ' + error.message);
        }
    });
};
