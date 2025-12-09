import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    user: [],
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthentication: (state) => {
            state.isLoading = false;
        },
    },
});

export const { setAuthentication } = authSlice.actions;

export default authSlice.reducer;
