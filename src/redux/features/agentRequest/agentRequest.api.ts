import { baseApi } from "@/redux/baseApi";

export const agentRequestApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        allAgentRequest: builder.query({
            query: (data) => ({
                url: '/agent-request',
                method: 'GET',
                data
            }),
            providesTags: ['AGENT_REQUEST']
        }),
        handleAgentRequest: builder.mutation({
            query: ({requestId, status}) => ({
                url: `/agent-request/handle-request/${requestId}`,
                method: 'PATCH',
                data: {status},
            }),
            invalidatesTags: ['AGENT_REQUEST']
        }),
    })
})

export const {useAllAgentRequestQuery, useHandleAgentRequestMutation} = agentRequestApi