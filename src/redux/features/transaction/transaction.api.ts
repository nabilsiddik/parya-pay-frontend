import { baseApi } from "@/redux/baseApi";

export const transactionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllTransactions: builder.query({
            query: (params) => ({
                url: '/transaction/',
                method: 'GET',
                params
            }),
            providesTags: ['TRANSACTION']
        }),
        // getUserTransaction: builder.query({
        //     query: (params) => ({
        //         url: '/transaction/',
        //         method: 'GET',
        //         params
        //     }),
        //     providesTags: ['TRANSACTION']
        // }),
        addMoney: builder.mutation({
            query: (addMoneyInfo) => ({
                url: '/transaction/add-money',
                method: 'POST',
                data: addMoneyInfo
            }),
            invalidatesTags: ['TRANSACTION']
        }),
        withdrawMoney: builder.mutation({
            query: (withdrawMoneyInfo) => ({
                url: '/transaction/withdraw-money',
                method: 'POST',
                data: withdrawMoneyInfo
            }),
            invalidatesTags: ['TRANSACTION']
        }),
        sendMoney: builder.mutation({
            query: (sendMoneyInfo) => ({
                url: '/transaction/send-money',
                method: 'POST',
                data: sendMoneyInfo
            }),
            invalidatesTags: ['TRANSACTION']
        }),
        cashIn: builder.mutation({
            query: (cashInInfo) => ({
                url: '/transaction/cash-in',
                method: 'POST',
                data: cashInInfo
            }),
            invalidatesTags: ['TRANSACTION']
        }),
        cashOut: builder.mutation({
            query: (cashOutInfo) => ({
                url: '/transaction/cash-out',
                method: 'POST',
                data: cashOutInfo
            }),
            invalidatesTags: ['TRANSACTION']
        })
    })
})

export const {useAddMoneyMutation, useSendMoneyMutation, useWithdrawMoneyMutation, useCashInMutation, useCashOutMutation, useGetAllTransactionsQuery} = transactionApi