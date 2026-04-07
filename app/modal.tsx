import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function ModalScreen() {
    return (
        <ThemedView style={styles.container}>
            <ThemedText type="title">This is a modal</ThemedText>
            <Link href="/" dismissTo style={styles.link}>
                <ThemedText type="link">Go to home screen</ThemedText>
            </Link>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#e3f2fd', // Light blue background
    },
    link: {
        marginTop: 15,
        paddingVertical: 15,
        backgroundColor: '#1976d2', // Dark blue button
        paddingHorizontal: 20,
        borderRadius: 5,
    },
});
