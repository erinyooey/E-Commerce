import { createSlice } from "@reduxjs/toolkit";
import { api } from "../../api/api";

const cartApi = api.injectEndpoints({
    endpoints: (builder) => ({
        addToCart: builder.mutation({
            query: ({productId, quantity}) => ({
                url: "/api/cart/add",
                method: "POST",
                body: {productId, quantity},
            }),
            invalidatesTags: ["Cart"]
        })
    })
})

const createCartApi = api.injectEndpoints({
    endpoints: (builder) => ({
        createCart: builder.mutation({
            query: () => ({
                url: "/api/cart/create",
                method: "POST",
            }),
            invalidatesTags: ["Cart"]
        })
    })
})

const updateCartApi = api.injectEndpoints({
    endpoints: (builder) => ({
        updateCart: builder.mutation({
            query: ({productId, cartId, quantity}) => ({
                url: "/api/cart/update",
                method: "PUT",
                body: {productId, cartId, quantity},
            }),
            invalidatesTags: ["Cart"]
        })
    })
})

const getCartApi = api.injectEndpoints({
    endpoints: (builder) => ({
        showCart: builder.query({
            query: () => ({
                url: "api/cart/",
                method: "GET",
                headers: {
                    "Content-Type":
                    "application/json",
                },
            }),
            provideTags: ["Cart"]
        })
    })
})

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
    }
})

export default cartSlice.reducer
export const { useShowCartQuery } = getCartApi


export const { useAddToCartMutation } = cartApi
export const { useCreateCartMutation } = createCartApi
export const { useUpdateCartMutation } = updateCartApi