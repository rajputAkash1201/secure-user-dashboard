// src/store/user/userTypes.ts
export interface User {
  id: number;
  email: string;
  // Add more user properties here
}

export interface UserState {
  token: string | null;
}

export enum UserActionTypes {
  SET_USER = 'SET_USER',
  CLEAR_USER = 'CLEAR_USER',
}
