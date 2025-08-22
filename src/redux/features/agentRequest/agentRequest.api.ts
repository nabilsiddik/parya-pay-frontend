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
    })
})

export const {useAllAgentRequestQuery} = agentRequestApi