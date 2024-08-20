import { api } from "../../api/api";

export const cartApi = api.injectEndpoints({
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

export const createCartApi = api.injectEndpoints({
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

export const updateCartApi = api.injectEndpoints({
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


export const { useAddToCartMutation } = cartApi
export const { useCreateCartMutation } = createCartApi
export const { useUpdateCartMutation } = updateCartApi