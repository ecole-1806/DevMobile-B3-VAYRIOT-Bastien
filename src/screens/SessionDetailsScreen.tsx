import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Alert, FlatList } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/types/stackParams.type';

type SessionDetailsScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SessionDetails'>;

type SessionDetailsRouteProp = {
  sessionId: number;
  invitationCode: string;
};

const SessionDetailsScreen = () => {
    const navigation = useNavigation<SessionDetailsScreenNavigationProp>();
    const route = useRoute();
    const { sessionId, invitationCode } = route.params as SessionDetailsRouteProp;
  
    const [players, setPlayers] = useState<string[]>(['Player 1']);
    const [sessionName, setSessionName] = useState(`Session ${sessionId}`);
    const [isCreator, setIsCreator] = useState(true);

    // Mock polling for session updates
    useEffect(() => {
        const interval = setInterval(() => {
            // Simulate adding a new player
            if (players.length < 4) {
                setPlayers([...players, `Player ${players.length + 1}`]);
            }
        }, 10000);
    
        return () => clearInterval(interval);
    }, [players]);

    const handleStartGame = () => {
        Alert.alert('Game Started', 'The game has started!');
        // Navigate to game screen
        navigation.navigate('Game');
    };

    const handleLeaveSession = () => {
        Alert.alert('Left Session', 'You have left the session.');
        navigation.navigate('Home');
    };

    const handleKickPlayer = (player: string) => {
        Alert.alert('Player Kicked', `${player} has been kicked from the session.`);
        setPlayers(players.filter((p) => p !== player));
    };

    const handleBanPlayer = (player: string) => {
        Alert.alert('Player Banned', `${player} has been banned from the session.`);
        setPlayers(players.filter((p) => p !== player));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{sessionName}</Text>
            <Text style={styles.invitationCode}>Invitation Code: {invitationCode}</Text>
      
            <Text style={styles.sectionTitle}>Players:</Text>
            <FlatList
                data={players}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <View style={styles.playerItem}>
                        <Text>{item}</Text>
                        {isCreator && item !== 'Player 1' && (
                            <View style={styles.playerActions}>
                                <Button title="Kick" onPress={() => handleKickPlayer(item)} />
                                <Button title="Ban" onPress={() => handleBanPlayer(item)} />
                            </View>
                        )}
                    </View>
                )}
            />

            {isCreator ? (
                <Button title="Start Game" onPress={handleStartGame} />
            ) : (
                <Button title="Leave Session" onPress={handleLeaveSession} />
            )}
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
    invitationCode: {
        fontSize: 16,
        marginBottom: 20,
        textAlign: 'center',
        color: '#0d47a1', // Dark blue text
    },
    sectionTitle: {
        fontSize: 18,
        marginBottom: 10,
        color: '#0d47a1', // Dark blue text
    },
    playerItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#1976d2', // Dark blue border
        backgroundColor: '#ffffff', // White background for contrast
        marginBottom: 5,
        borderRadius: 5,
    },
    playerActions: {
        flexDirection: 'row',
        gap: 10,
    },
});

export default SessionDetailsScreen;