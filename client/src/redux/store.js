import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/lib/persistStore';

import authReducer from './auth-slice';
import modalReducer from './modal-slice';

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    // blacklist: ['modal'],
};

const authPersistConfig = {
    key: 'auth',
    storage: storage,
    // blacklist: ['isModalAuth'],
};

const modalPersistConfig = {
    key: 'modal',
    storage: storage,
    blacklist: ['isModalAuth'],
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    modal: persistReducer(modalPersistConfig, modalReducer),
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    'persist/PERSIST',
                    'persist/REHYDRATE',
                    'persist/FLUSH',
                    'persist/PAUSE',
                    'persist/PURGE',
                    'persist/REGISTER',
                ],
                ignoredPaths: ['register', 'rehydrate'],
            },
        }),
});

export const persistor = persistStore(store);
