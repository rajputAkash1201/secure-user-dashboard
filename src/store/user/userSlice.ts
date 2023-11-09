import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { UserActionTypes, UserState } from './userTypes';

// Define the initial state for your slice
const initialState: UserState = {
    token: localStorage.getItem('authToken')
};

// Create a slice
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state = initialState, action: any) => {
            return {
                ...state,
                token: action.payload,
            };
        },
        clearUser: (state = initialState) => {
            return {
                ...state,
                token: null,
            };
        }
    },
});

// Export actions and reducer
export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;
