import { configureStore } from "@reduxjs/toolkit";
import { api } from "../api/api"; // includes logic for interacting with backend apis


// reducer takes in an action and a previous state of the application. based on those 2 things, you will return the new value of the state

const store = configureStore({
    reducer: {
        [api.reducerPath]: api.reducer, // for api endpoints
        // to handle login state
    },
    // middleware handle api calls and requests
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(api.middleware)
})

// this store will be provided to the application, using the provider component in react
export default store