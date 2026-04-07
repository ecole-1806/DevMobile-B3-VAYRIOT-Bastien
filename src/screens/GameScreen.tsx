import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import GameBoard from '../components/GameBoard';
import { getGameState, simulateGameRound } from '../services/mockGameService';
import { Resource, Ship } from '@/types/ship.type';
import { RootStackParamList } from '@/types/stackParams.type';

type GameScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Game'>;

const GameScreen = () => {
    const navigation = useNavigation<GameScreenNavigationProp>();
    const [ships, setShips] = useState<Ship[]>([]);
    const [resources, setResources] = useState<Resource[]>([]);
    const [round, setRound] = useState<number>(1);

    // Fetch initial game state
    useEffect(() => {
        const fetchGameState = async () => {
            const state = await getGameState();
            setShips(state.ships);
            setResources(state.resources);
            setRound(state.round);
        };
        fetchGameState();
    }, []);

    // Simulate game rounds
    useEffect(() => {
        const interval = setInterval(async () => {
            const state = await simulateGameRound();
            setShips(state.ships);
            setResources(state.resources);
            setRound(state.round);
        }, 5000);
    
        return () => clearInterval(interval);
    }, []);

    const handleCellPress = (x: number, y: number) => {
        const ship = ships.find((ship) => ship.x === x && ship.y === y);
        if (ship) {
            Alert.alert('Ship Info', `Type: ${ship.type}\nHealth: ${ship.health}\nOwner: ${ship.owner}`);
        } else {
            const resource = resources.find((resource) => resource.x === x && resource.y === y);
            if (resource) {
                Alert.alert('Resource', 'This cell contains a resource.');
            }
        }
    };

    const handleBackToHome = () => {
        navigation.navigate('Home');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Game Screen</Text>
            <Text style={styles.round}>Round: {round}</Text>
            <GameBoard
                width={5}
                height={5}
                ships={ships}
                resources={resources}
                onCellPress={handleCellPress}
            />
            <Button title="Back to Home" onPress={handleBackToHome} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#e3f2fd', // Light blue background
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
        textAlign: 'center',
        color: '#0d47a1', // Dark blue text
    },
    round: {
        fontSize: 18,
        marginBottom: 10,
        textAlign: 'center',
        color: '#0d47a1', // Dark blue text
    },
});

export default GameScreen;