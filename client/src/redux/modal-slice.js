import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isModalAuth: false,
    isModalHeaderSetting: false,
    isModalHeaderSearch: false,
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

        toggleModalHeaderSetting: (state, action) => {
            state.isModalHeaderSetting = !state.isModalHeaderSetting;
        },

        setIsOpenModalHeaderSearch: (state) => {
            state.isModalHeaderSearch = true;
        },
        setIsCloseModalHeaderSearch: (state) => {
            state.isModalHeaderSearch = false;
        },
    },
});

export const {
    setIsOpenModalAuth,
    setIsCloseModalAuth,
    toggleModalHeaderSetting,
    setIsOpenModalHeaderSearch,
    setIsCloseModalHeaderSearch,
} = modalSlice.actions;

export default modalSlice.reducer;
