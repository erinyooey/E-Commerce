import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";
import { clearTokens } from "../Login/LogoutSlice";

const registerApi = api.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (registerInfo) => ({
                url: "/api/user/register",
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registerInfo)
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
    window.sessionStorage.setItem("token", payload.token)
    state.token = payload.token
    state.user = payload.user
}

const registerSlice = createSlice({
    name: "register",
    initialState,
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(clearTokens, ()=> initialState)
        builder.addMatcher(api.endpoints.register.matchFulfilled, storeToken)
    }
})

export default registerSlice.reducer
export const { useRegisterMutation } = registerApi