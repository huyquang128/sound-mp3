import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isModalAuth: false,
};

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setIsOpenModalAuth: (state) => {
            state.isModalAuth = true;
        },
        setIsCloseModalAuth: (state) => {
            state.isModalAuth = false;
        },
    },
});

export const { setIsOpenModalAuth, setIsCloseModalAuth } = modalSlice.actions;

export default modalSlice.reducer;
