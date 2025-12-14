import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isModalAuth: false,
    isModalUser: false,
    isModalHeaderSetting: false,
    isModalHeaderSearch: false,
    isModalMoreOptionSong: false,
    isModalListSongRight: false,
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

        setIsCloseModalHeaderSetting: (state) => {
            state.isModalHeaderSetting = false;
        },

        toggleModalUser: (state) => {
            state.isModalUser = !state.isModalUser;
        },
        setIsCloseModalUser: (state) => {
            state.isModalUser = false;
        },

        setIsOpenModalHeaderSearch: (state) => {
            state.isModalHeaderSearch = true;
        },
        setIsCloseModalHeaderSearch: (state) => {
            state.isModalHeaderSearch = false;
        },

        toggleModalMoreOptionSong: (state) => {
            state.isModalMoreOptionSong = !state.isModalMoreOptionSong;
        },
        setIsCloseModalMoreOptionSong: (state) => {
            state.isModalMoreOptionSong = false;
        },

        toggleModalListSongRight: (state) => {
            state.isModalListSongRight = !state.isModalListSongRight;
        },
        setIsCloseModalListSongRight: (state) => {
            state.isModalListSongRight = false;
        },
    },
});

export const {
    setIsOpenModalAuth,
    setIsCloseModalAuth,
    toggleModalHeaderSetting,
    setIsCloseModalHeaderSetting,
    setIsOpenModalHeaderSearch,
    setIsCloseModalHeaderSearch,
    toggleModalUser,
    setIsCloseModalUser,
    toggleModalMoreOptionSong,
    setIsCloseModalMoreOptionSong,
    toggleModalListSongRight,
    setIsCloseModalListSongRight,
} = modalSlice.actions;

export default modalSlice.reducer;
