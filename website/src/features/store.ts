import { configureStore } from '@reduxjs/toolkit';
import { 
    persistStore as createPersistStore, 
    persistReducer as createPersistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { rootReducer } from './rootReducer';


const persistConfig = {
    key: 'f5store',
    storage: storage,
    whitelist: ['auth'],
}


const persistReducer = createPersistReducer(persistConfig, rootReducer);


export const store = configureStore({
    reducer: persistReducer,
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
});


export const persistor = createPersistStore(store);


export type RootState = ReturnType<typeof store.getState>;
