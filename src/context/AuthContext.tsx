import React, { createContext, useContext, useState, useEffect } from 'react';
import { getToken, removeToken } from '../services/authService';
import { AuthContextType } from '@/types/auth.type';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        const checkAuth = async () => {
            const token = await getToken();
            setIsAuthenticated(!!token);
        };
        checkAuth();
    }, []);

    const login = () => {
        setIsAuthenticated(true);
    };

    const logout = async () => {
        await removeToken();
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};
