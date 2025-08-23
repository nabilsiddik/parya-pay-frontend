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
        becomeAgent: builder.mutation({
            query: (data) => ({
                url: `user/agents/become-agent`,
                method: 'POST',
                data
            }),
            invalidatesTags: ['AGENT_REQUEST']
        }),
        updateUserStatus: builder.mutation({
            query: ({userId, status}) => ({
                url: `/user/${userId}/status`,
                method: 'PATCH',
                data: {status}
            }),
            invalidatesTags: ['USER']
        }),
    })
})

export const {useGetAllUsersQuery, useGetAllAgentsQuery, useDeleteUserMutation, useBecomeAgentMutation, useUpdateUserStatusMutation} = userApi