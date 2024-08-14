import { fetchBaseQuery, createApi } from "@reduxjs/toolkit/query";

export const api = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: '',
    })
})