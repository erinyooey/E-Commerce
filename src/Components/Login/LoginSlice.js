import { createSlice } from "@reduxjs/toolkit";
import {api} from "../../api/api"
import { clearTokens } from "./LogoutSlice";

const loginApi = api.injectEndpoints({
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials) => ({
                url: "/api/user/login",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(credentials)
            }),
            invalidatesTags: ["User"]
        })
    })
})
// loginApi.useLoginMutation

const tokenStorage = window.sessionStorage.getItem('token')

const initialState = {
    user: {},
    token: tokenStorage || null
}

const storeToken = (state, {payload}) => {
    window.sessionStorage.setItem("token", payload.token)
    state.token = payload.token
    state.user = payload.user
}

const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(clearTokens, ()=> initialState)
        builder.addMatcher(api.endpoints.login.matchFulfilled, storeToken)
    }
})

export default loginSlice.reducer
export const { useLoginMutation } = loginApi

