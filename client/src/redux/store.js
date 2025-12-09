import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authReducer from './auth-slice';
import { configureStore } from '@reduxjs/toolkit';
import persistStore from 'redux-persist/lib/persistStore';

const rootPersistConfig = {
    key: 'root',
    storage: storage,
    // blacklist: ['auth'],
};

const authPersistConfig = {
    key: 'auth',
    storage: storage,
    // blacklist: ['somethingTemporary'],
};

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
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
