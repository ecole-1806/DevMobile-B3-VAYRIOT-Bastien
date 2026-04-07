// Mock game service to simulate game state updates
interface Ship {
  id: number;
  type: string;
  x: number;
  y: number;
  health: number;
  owner: string;
}

interface Resource {
  x: number;
  y: number;
}

interface GameState {
  ships: Ship[];
  resources: Resource[];
  round: number;
  status: 'running' | 'finished';
}

// Mock game state
let mockGameState: GameState = {
    ships: [
        { id: 1, type: 'Fighter', x: 0, y: 0, health: 100, owner: 'Player 1' },
        { id: 2, type: 'Miner', x: 2, y: 2, health: 80, owner: 'Player 1' },
        { id: 3, type: 'Fighter', x: 4, y: 4, health: 100, owner: 'Player 2' },
    ],
    resources: [
        { x: 1, y: 1 },
        { x: 3, y: 3 },
    ],
    round: 1,
    status: 'running',
};

// Mock function to get the current game state
export const getGameState = async (): Promise<GameState> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(mockGameState);
        }, 500);
    });
};

// Mock function to update the game state
export const updateGameState = async (newState: Partial<GameState>): Promise<GameState> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            mockGameState = { ...mockGameState, ...newState };
            resolve(mockGameState);
        }, 500);
    });
};

// Mock function to simulate a game round
export const simulateGameRound = async (): Promise<GameState> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Simulate ship movements
            mockGameState.ships = mockGameState.ships.map((ship) => {
                if (ship.owner === 'Player 1') {
                    return { ...ship, x: ship.x + 1 };
                }
                return ship;
            });
      
            // Increment round
            mockGameState.round += 1;
      
            resolve(mockGameState);
        }, 1000);
    });
};

// Mock function to reset the game state
export const resetGameState = async (): Promise<GameState> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            mockGameState = {
                ships: [
                    { id: 1, type: 'Fighter', x: 0, y: 0, health: 100, owner: 'Player 1' },
                    { id: 2, type: 'Miner', x: 2, y: 2, health: 80, owner: 'Player 1' },
                    { id: 3, type: 'Fighter', x: 4, y: 4, health: 100, owner: 'Player 2' },
                ],
                resources: [
                    { x: 1, y: 1 },
                    { x: 3, y: 3 },
                ],
                round: 1,
                status: 'running',
            };
            resolve(mockGameState);
        }, 500);
    });
};