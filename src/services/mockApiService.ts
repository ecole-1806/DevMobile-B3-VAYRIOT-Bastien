// Mock API service to simulate API responses
interface LoginResponse {
  access_token: string;
  refresh_token?: string;
}

interface RegisterResponse {
  message: string;
}

interface User {
  id: number;
  username: string;
  email: string;
}

// Mock database
const mockUsers: User[] = [];

// Mock registration
export const mockRegister = async (
    username: string,
    email: string,
    password: string
): Promise<RegisterResponse> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const userExists = mockUsers.some((user) => user.email === email);
            if (userExists) {
                throw new Error('User already exists');
            }
      
            const newUser: User = {
                id: mockUsers.length + 1,
                username,
                email,
            };
            mockUsers.push(newUser);
      
            resolve({ message: 'Registration successful' });
        }, 1000);
    });
};

// Mock login
export const mockLogin = async (
    email: string,
    password: string
): Promise<LoginResponse> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = mockUsers.find((user) => user.email === email);
            if (!user) {
                reject(new Error('Invalid credentials'));
                return;
            }
      
            resolve({
                access_token: 'mock_access_token',
                refresh_token: 'mock_refresh_token',
            });
        }, 1000);
    });
};

// In-memory storage for testing
let mockToken: string | null = null;

// Mock token storage
export const mockStoreToken = async (token: string): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            mockToken = token;
            resolve();
        }, 500);
    });
};

// Mock token retrieval
export const mockGetToken = async (): Promise<string | null> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockToken);
        }, 500);
    });
};

// Mock token removal
export const mockRemoveToken = async (): Promise<void> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            mockToken = null;
            resolve();
        }, 500);
    });
};