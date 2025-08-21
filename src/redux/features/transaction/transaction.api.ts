import { baseApi } from "@/redux/baseApi";

export const transactionApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        addMoney: builder.mutation({
            query: (addMoneyInfo) => ({
                url: '/transaction/add-money',
                method: 'POST',
                data: addMoneyInfo
            }),
            invalidatesTags: ['TRANSACTION']
        })
    })
})

export const {useAddMoneyMutation} = transactionApi