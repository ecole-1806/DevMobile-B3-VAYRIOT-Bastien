import { Resource, Ship } from '@/types/ship.type';
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

interface GameBoardProps {
  width: number;
  height: number;
  ships: Ship[];
  resources: Resource[];
  onCellPress: (x: number, y: number) => void;
}

const GameBoard: React.FC<GameBoardProps> = ({ width, height, ships, resources, onCellPress }) => {
    const renderCell = ({ item }: { item: { x: number; y: number } }) => {
        const ship = ships.find((ship) => ship.x === item.x && ship.y === item.y);
        const resource = resources.find((resource) => resource.x === item.x && resource.y === item.y);

        return (
            <TouchableOpacity
                style={styles.cell}
                onPress={() => onCellPress(item.x, item.y)}
            >
                {ship && (
                    <View style={[styles.ship, { backgroundColor: ship.owner === 'Player 1' ? 'blue' : 'red' }]}>
                        <Text style={styles.shipText}>{ship.type}</Text>
                    </View>
                )}
                {resource && !ship && (
                    <View style={styles.resource}>
                        <Text style={styles.resourceText}>💎</Text>
                    </View>
                )}
            </TouchableOpacity>
        );
    };

    const cells = [];
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            cells.push({ x, y });
        }
    }

    return (
        <FlatList
            data={cells}
            renderItem={renderCell}
            keyExtractor={(item) => `${item.x},${item.y}`}
            numColumns={width}
            contentContainerStyle={styles.board}
        />
    );
};

const styles = StyleSheet.create({
    board: {
        alignItems: 'center',
        backgroundColor: '#bbdefb', // Medium blue background
        padding: 10,
        borderRadius: 10,
    },
    cell: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#1976d2', // Dark blue border
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ffffff', // White cell background for contrast
    },
    ship: {
        width: 40,
        height: 40,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    shipText: {
        color: 'white',
        fontWeight: 'bold',
    },
    resource: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    resourceText: {
        fontSize: 20,
        color: '#0d47a1', // Dark blue for resource
    },
});

export default GameBoard;