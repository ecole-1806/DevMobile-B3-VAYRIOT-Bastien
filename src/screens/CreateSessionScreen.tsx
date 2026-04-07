import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/types/stackParams.type';

type CreateSessionScreenNavigationProp = StackNavigationProp<RootStackParamList, 'CreateSession'>;

const CreateSessionScreen = () => {
    const [sessionName, setSessionName] = useState('');
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation<CreateSessionScreenNavigationProp>();

    const handleCreateSession = async () => {
        if (!sessionName) {
            Alert.alert('Error', 'Please enter a session name');
            return;
        }

        setLoading(true);
        try {
            // Mock session creation
            const sessionId = Math.floor(Math.random() * 1000);
            const invitationCode = `INV-${Math.floor(Math.random() * 10000)}`;
      
            Alert.alert('Success', `Session created with ID: ${sessionId} and invitation code: ${invitationCode}`);
      
            // Navigate to session details
            navigation.navigate('SessionDetails', { sessionId, invitationCode });
        } catch (error) {
            Alert.alert('Error', 'Failed to create session');
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create Session</Text>
            <TextInput
                style={styles.input}
                placeholder="Session Name"
                value={sessionName}
                onChangeText={setSessionName}
            />
            <Button title="Create Session" onPress={handleCreateSession} disabled={loading} />
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
    input: {
        height: 40,
        borderColor: '#1976d2', // Dark blue border
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: '#ffffff', // White input background
    },
});

export default CreateSessionScreen;