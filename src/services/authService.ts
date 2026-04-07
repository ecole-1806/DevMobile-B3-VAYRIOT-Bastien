import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

const API_BASE_URL = 'https://space-conquest-online.osc-fr1.scalingo.io/api';

interface LoginResponse {
  access_token: string;
  refresh_token?: string;
}

interface RegisterResponse {
  message: string;
}

// Use mock API for testing
export const login = async (email: string, password: string): Promise<LoginResponse> => {
    try {
    // Use mock API for testing
        const { mockLogin } = await import('./mockApiService');
        return await mockLogin(email, password);
    } catch (error) {
        throw error;
    }
};

export const register = async (
    username: string,
    email: string,
    password: string
): Promise<RegisterResponse> => {
    try {
    // Use mock API for testing
        const { mockRegister } = await import('./mockApiService');
        return await mockRegister(username, email, password);
    } catch (error) {
        throw error;
    }
};

export const storeToken = async (token: string): Promise<void> => {
    try {
    // Use mock API for testing
        const { mockStoreToken } = await import('./mockApiService');
        await mockStoreToken(token);
    } catch (error) {
        throw error;
    }
};

export const getToken = async (): Promise<string | null> => {
    try {
    // Use mock API for testing
        const { mockGetToken } = await import('./mockApiService');
        return await mockGetToken();
    } catch (error) {
        throw error;
    }
};

export const removeToken = async (): Promise<void> => {
    try {
    // Use mock API for testing
        const { mockRemoveToken } = await import('./mockApiService');
        await mockRemoveToken();
    } catch (error) {
        throw error;
    }
};
