import axios from 'axios';

const API_URL = 'http://localhost:5000';

// Function to log in and obtain a JWT token
export const login = async ( usermail: string, password: string): Promise<string> => {
    const response = await axios.post(`${API_URL}/login`, { usermail, password });
    return response.data.token;
};

// Function to register a new user
export const register = async (username: string, usermail: string, password: string): Promise<string> => {
    const response = await axios.post(`${API_URL}/register`, { username, usermail, password });
    //   return response.data.token;  
    return response.data;
};

// Function to get protected data (requires JWT token)
export const getProtectedData = async (token: string) => {
    const response = await axios.get(`${API_URL}/protected`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    return response.data;
};

// Helper function to save token to localStorage (or cookies)
export const saveToken = (token: string) => {
    localStorage.setItem('token', token);
};

// Helper function to get token from localStorage
export const getToken = (): string | null => {
    return localStorage.getItem('token');
};

// Helper function to decode JWT token (if you need to decode and check the token)
export const decodeToken = (token: string): any => {
    const decoded = JSON.parse(atob(token.split('.')[1])); // Decode JWT token payload
    return decoded;
};
