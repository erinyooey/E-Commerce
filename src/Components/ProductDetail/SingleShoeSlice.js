import { api } from "../../api/api";
import { createSlice } from "@reduxjs/toolkit";

const singleProductApi = api.injectEndpoints({
    endpoints: (builder) => ({
        singleProduct: builder.query({
            query: (id) => ({
                url: `api/products/${id}`,
                providesTags: (result, error, id) => [{type: 'Products', id}],
            }),
            providesTags: ["Products"],
        }),
    }),
})

const singleProductSlice = createSlice({
    name: "singleProduct",
    initialState: {},
    reducers: {},
})

export default singleProductSlice.reducer
export const { useSingleProductQuery } = singleProductApi