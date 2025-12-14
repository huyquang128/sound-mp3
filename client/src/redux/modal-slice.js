import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isModalAuth: false,
    isModalUser: false,
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

        toggleModalHeaderSetting: (state) => {
            state.isModalHeaderSetting = !state.isModalHeaderSetting;
        },
        toggleModalUser: (state) => {
            state.isModalUser = !state.isModalUser;
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
    toggleModalUser,
} = modalSlice.actions;

export default modalSlice.reducer;
