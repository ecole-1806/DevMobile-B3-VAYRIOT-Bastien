import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import HomeScreen from '../screens/HomeScreen';
import CreateSessionScreen from '../screens/CreateSessionScreen';
import JoinSessionScreen from '../screens/JoinSessionScreen';
import SessionDetailsScreen from '../screens/SessionDetailsScreen';
import GameScreen from '../screens/GameScreen';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { RootStackParamList } from '@/types/stackParams.type';

const Stack = createStackNavigator<RootStackParamList>();

const MainStack = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Stack.Navigator initialRouteName={isAuthenticated ? 'Home' : 'Login'}>
            {isAuthenticated ? (
                <>
                    <Stack.Screen name="Home" component={HomeScreen} />
                    <Stack.Screen name="CreateSession" component={CreateSessionScreen} />
                    <Stack.Screen name="JoinSession" component={JoinSessionScreen} />
                    <Stack.Screen name="SessionDetails" component={SessionDetailsScreen} />
                    <Stack.Screen name="Game" component={GameScreen} />
                </>
            ) : (
                <>
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="Register" component={RegisterScreen} />
                </>
            )}
        </Stack.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <AuthProvider>
            <MainStack />
        </AuthProvider>
    );
};

export default AppNavigator;
