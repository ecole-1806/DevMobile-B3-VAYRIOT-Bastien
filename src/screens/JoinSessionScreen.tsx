import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../navigation/AppNavigator';

type JoinSessionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'JoinSession'>;

const JoinSessionScreen = () => {
    const [invitationCode, setInvitationCode] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation<JoinSessionScreenNavigationProp>();

    const handleJoinSession = async () => {
        if (!invitationCode) {
            Alert.alert('Error', 'Please enter an invitation code');
            return;
        }

        setLoading(true);
        try {
            // Mock session joining
            const sessionId = Math.floor(Math.random() * 1000);
      
            Alert.alert('Success', `Joined session with ID: ${sessionId}`);
      
            // Navigate to session details
            navigation.navigate('SessionDetails', { sessionId, invitationCode });
        } catch (error) {
            Alert.alert('Error', 'Failed to join session');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Join Session</Text>
            <TextInput
                style={styles.input}
                placeholder="Invitation Code"
                value={invitationCode}
                onChangeText={setInvitationCode}
            />
            <Button title="Join Session" onPress={handleJoinSession} disabled={loading} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default JoinSessionScreen;