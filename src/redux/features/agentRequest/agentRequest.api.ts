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
            query: (requestData) => ({
                url: `/agent-request/handle-request/${requestData?.agentRequestId}`,
                method: 'PATCH',
                body: requestData?.bodyData,
            }),
            invalidatesTags: ['AGENT_REQUEST']
        }),
    })
})

export const {useAllAgentRequestQuery, useHandleAgentRequestMutation} = agentRequestApi