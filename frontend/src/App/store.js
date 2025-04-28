import { configureStore } from '@reduxjs/toolkit';
import { schoolsApi } from '../features/schoolsApi.js';

export const store = configureStore({
    reducer: {
        [schoolsApi.reducerPath]: schoolsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(schoolsApi.middleware)
});