# Space Conquest Online

## Description du Projet

Space Conquest Online est une application mobile de jeu stratégique développée avec React Native et Expo. Le jeu permet aux joueurs de créer ou rejoindre des sessions de jeu, de gérer des vaisseaux spatiaux, de collecter des ressources et de combattre dans un environnement de conquête spatiale. L'application inclut un système d'authentification pour les utilisateurs et utilise des services API simulés pour les interactions en temps réel.

## Fonctionnalités

- **Authentification Utilisateur** : Inscription, connexion et déconnexion avec stockage sécurisé des tokens.
- **Gestion des Sessions** : Créer une nouvelle session de jeu, rejoindre une session existante, et consulter les détails des sessions.
- **Jeu Interactif** : Plateau de jeu avec vaisseaux, ressources, et logique de combat.
- **Navigation Intuitive** : Utilisation de React Navigation pour une expérience fluide entre les écrans.
- **Stockage Local** : Utilisation d'AsyncStorage pour la persistance des données utilisateur.
- **Services Mock** : Simulation des API pour le développement et les tests.

## Technologies Utilisées

- **React Native** : Framework pour le développement d'applications mobiles cross-platform.
- **Expo** : Plateforme pour simplifier le développement et le déploiement d'apps React Native.
- **TypeScript** : Typage statique pour améliorer la robustesse du code.
- **React Navigation** : Gestion de la navigation entre les écrans.
- **Axios** : Bibliothèque pour les requêtes HTTP.
- **AsyncStorage** : Stockage local des données persistantes.
- **Expo Router** : Routage basé sur les fichiers pour une structure organisée.

## Installation

### Prérequis

- Node.js (version 18 ou supérieure)
- npm ou yarn
- Expo CLI (`npm install -g @expo/cli`)
- Un émulateur Android/iOS ou un appareil physique avec Expo Go

### Étapes d'Installation

1. **Cloner le dépôt** :
   ```bash
   git clone <url-du-depot>
   cd my-app
   ```

2. **Installer les dépendances** :
   ```bash
   npm install
   ```

3. **Démarrer l'application** :
   ```bash
   npx expo start / npm run start
   ```

   Dans la sortie, vous trouverez des options pour ouvrir l'app dans :
   - Un build de développement
   - Un émulateur Android
   - Un simulateur iOS
   - Expo Go (bac à sable limité pour tester le développement avec Expo)

## Utilisation

### Authentification

- **Inscription** : Accédez à l'écran d'inscription pour créer un compte avec nom d'utilisateur, email et mot de passe.
- **Connexion** : Utilisez vos identifiants pour vous connecter. Le token d'accès est stocké localement via AsyncStorage.
- **Déconnexion** : Déconnectez-vous pour supprimer le token et revenir à l'écran de connexion.

### Gestion des Sessions

- **Créer une Session** : Depuis l'écran d'accueil, créez une nouvelle session de jeu.
- **Rejoindre une Session** : Entrez l'ID d'une session existante pour y participer.
- **Détails de Session** : Consultez les informations d'une session avant de commencer le jeu.

### Jeu

- **Plateau de Jeu** : Interactez avec le GameBoard pour placer des vaisseaux, collecter des ressources et attaquer.
- **Vaisseaux** : Types de vaisseaux comme Fighter et Miner, chacun avec des attributs de santé et de propriétaire.
- **Ressources** : Collectez des ressources sur la carte pour améliorer vos vaisseaux.
- **Logique de Jeu** : Le jeu progresse par rounds, avec un état simulé via des services mock.

## Architecture et Connexions

### Authentification

- **AuthContext** : Fournit un contexte React pour gérer l'état d'authentification globalement.
- **authService** : Gère les appels API pour l'inscription, la connexion et le stockage des tokens.
- **Connexion API** : Actuellement simulée via `mockApiService`. L'URL de base réelle est `https://space-conquest-online.osc-fr1.scalingo.io/api`. Les fonctions incluent :
  - `login(email, password)` : Retourne un token d'accès.
  - `register(username, email, password)` : Crée un nouvel utilisateur.
  - `storeToken(token)` et `getToken()` : Gestion du token dans AsyncStorage.

### Services de Jeu

- **mockGameService** : Simule les interactions de jeu, y compris l'état des vaisseaux, ressources et rounds.
- **Connexions** :
  - `getGameState()` : Récupère l'état actuel du jeu.
  - `updateGameState(newState)` : Met à jour l'état du jeu.
- **Types** : Définis dans `ship.type.ts` et autres fichiers de types pour les vaisseaux, ressources, etc.

### Navigation

- **AppNavigator** : Utilise React Navigation pour gérer les piles d'écrans (Stack Navigator) et les onglets (Bottom Tabs).
- **Écrans** :
  - `LoginScreen` : Connexion utilisateur.
  - `RegisterScreen` : Inscription.
  - `HomeScreen` : Accueil avec options de session.
  - `CreateSessionScreen` : Création de session.
  - `JoinSessionScreen` : Rejoindre une session.
  - `SessionDetailsScreen` : Détails de session.
  - `GameScreen` : Écran principal du jeu.

### Stockage et Persistance

- **AsyncStorage** : Utilisé pour stocker les tokens d'authentification de manière persistante.
- **Context** : AuthContext pour partager l'état d'authentification entre composants.

## Tests

Des fichiers de test sont présents pour valider les fonctionnalités :
- `test_auth.js` : Tests pour l'authentification.
- `test_mock_auth.js` : Tests pour les services mock d'authentification.

## Développement

- **Linting** : Utilise ESLint pour maintenir la qualité du code.
- **TypeScript** : Configuration via `tsconfig.json`.
- **Expo** : Configuration dans `app.json`.

## Déploiement

Pour déployer l'application :
- Utilisez Expo pour créer des builds : `expo build:android` ou `expo build:ios`.
- Publiez sur Expo : `expo publish`.

## Ressources Supplémentaires

- [Documentation Expo](https://docs.expo.dev/)
- [Tutoriel Expo](https://docs.expo.dev/tutorial/introduction/)
- [React Navigation](https://reactnavigation.org/)

## Contribution

Pour contribuer :
1. Forkez le projet.
2. Créez une branche pour vos modifications.
3. Soumettez une pull request.

## Licence

Ce projet est sous licence [MIT](LICENSE).
