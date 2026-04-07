export type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
  CreateSession: undefined;
  JoinSession: undefined;
  SessionDetails: { sessionId: number; invitationCode: string };
  Game: undefined;
};