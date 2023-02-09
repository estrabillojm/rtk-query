import { configureStore } from "@reduxjs/toolkit";
import userReducer from './reducers/userSlice'
import { pokemonApi } from "./services/pokemon";

export const store = configureStore({
    reducer: {
        [pokemonApi.reducerPath] : pokemonApi.reducer,
        users: userReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(pokemonApi.middleware),
})