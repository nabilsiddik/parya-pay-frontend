import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: () => ({
                url: '/user/',
                method: 'GET',
            }),
            providesTags: ['USER']
        }),
        getAllAgents: builder.query({
            query: () => ({
                url: '/user/agents',
                method: 'GET',
            })
        }),
        deleteUser: builder.mutation({
            query: (userId) => ({
                url: `/user/${userId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['USER']
        }),
    })
})

export const {useGetAllUsersQuery, useGetAllAgentsQuery, useDeleteUserMutation} = userApi