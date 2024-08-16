import { api } from "../../api/api";
import { createSlice } from "@reduxjs/toolkit";

const productsApi = api.injectEndpoints({
    endpoints: (builder) => ({
        getShoes: builder.query({
            query: () => ({
                url: "/api/products/",
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                },
            }),
            provideTags: ["Products"],
        })
        })
})

const productSlice = createSlice({
    name: "shoes",
    initialState: {
        shoes: [],
    }
})

export default productSlice.reducer
export const { useGetShoesQuery } = productsApi