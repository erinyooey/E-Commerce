import { createSlice } from "@reduxjs/toolkit";
import {api} from "../../api/api"

const loginApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/api/user/login",
                method: "POST",
                body: credentials,
            }),
            invalidatesTags: ["User"]
        })
    })
})


const tokenStorage = window.sessionStorage.getItem('token')

const initialState = {
    user: {},
    token: tokenStorage || null
}

const storeToken = (state, {payload}) => {
    state.token = payload.token
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints.login.matchFulfilled, storeToken)
    }
})

export default loginSlice.reducer

