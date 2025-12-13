import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import {
    loginApi,
    logoutApi,
    refreshTokenApi,
    registerApi,
} from '../services/auth-api';

const initialState = {
    isLoading: false,
    isAuthenticated: false,
    user: null,
};

export const register = createAsyncThunk(
    '/auth/register',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await registerApi(formData);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

export const login = createAsyncThunk(
    '/auth/login',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await loginApi(formData);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

export const logout = createAsyncThunk(
    '/auth/logout',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await logoutApi(formData);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

export const refreshToken = createAsyncThunk(
    '/auth/refresh-token',
    async (formData, { rejectWithValue }) => {
        try {
            const response = await refreshTokenApi(formData);
            return response;
        } catch (error) {
            return rejectWithValue(error.response?.data);
        }
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuthentication: (state) => {
            state.isLoading = false;
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true;
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase(register.fulfilled, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase(register.rejected, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null;
            })

            .addCase(login.pending, (state) => {
                state.isLoading = true;
                state.isAuthenticated = false;
                state.user = null;
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = true;
                state.user = action.payload.data;
            })
            .addCase(login.rejected, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null;
            })

            .addCase(refreshToken.pending, (state) => {
                state.isLoading = true;
            })
            .addCase(refreshToken.fulfilled, (state) => {
                state.isLoading = false;
            })
            .addCase(refreshToken.rejected, (state) => {
                state.isLoading = false;
            })

            .addCase(logout.fulfilled, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null;
            });

        //
    },
});

export const { setAuthentication } = authSlice.actions;

export default authSlice.reducer;
