import { baseApi } from "@/redux/baseApi";

export const walletApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getSingleWallet: builder.query({
            query: (params) => ({
                url: '/wallet/:id',
                method: 'GET',
                params
            }),
            providesTags: ['TRANSACTION']
        })
    })
})

export const {useGetSingleWalletQuery} = walletApi