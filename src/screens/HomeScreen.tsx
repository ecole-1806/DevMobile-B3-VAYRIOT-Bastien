import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useAuth } from '../context/AuthContext';
import { RootStackParamList } from '@/types/stackParams.type';

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

const HomeScreen = () => {
    const { logout } = useAuth();
    const navigation = useNavigation<HomeScreenNavigationProp>();

    const handleLogout = async () => {
        await logout();
    };

    const handleCreateSession = () => {
        navigation.navigate('CreateSession');
    };

    const handleJoinSession = () => {
        navigation.navigate('JoinSession');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Space Conquest Online</Text>
            <Button title="Create Session" onPress={handleCreateSession} />
            <Button title="Join Session" onPress={handleJoinSession} />
            <Button title="Logout" onPress={handleLogout} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#e3f2fd', // Light blue background
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
        color: '#0d47a1', // Dark blue text
    },
});

export default HomeScreen;
