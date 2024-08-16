import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://capstone-backend-a5zw.onrender.com',
        prepareHeaders: (headers, {getState}) => {
            const state = getState()
            const token = state.auth.token
            // access session storage in browser
            const sessionToken = window.sessionStorage.getItem('token')
            if(token || sessionToken){
                headers.set("authorization", `Bearer ${token || sessionToken}`)
            } else {
                headers.set('Content-Type', 'application/json')
            }
            return headers
        }
    }),
    tagTypes: ["User", "Products"],
    endpoints: () => ({})
})