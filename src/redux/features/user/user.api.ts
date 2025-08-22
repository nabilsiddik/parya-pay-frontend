import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => ({
                url: '/user/',
                method: 'GET',
            })
        }),
        getAllAgents: builder.query({
            query: () => ({
                url: '/user/agents',
                method: 'GET',
            })
        }),
    })
})

export const {useGetAllUsersQuery, useGetAllAgentsQuery} = userApi