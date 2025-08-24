import { baseApi } from "@/redux/baseApi";

export const userApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: (params) => ({
                url: '/user',
                method: 'GET',
                params
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
        updateUser: builder.mutation({
            query: (updatedData) => ({
                url: `/user`,
                method: 'PATCH',
                data: updatedData
            }),
            invalidatesTags: ['AUTH']
        }),
        becomeAgent: builder.mutation({
            query: (data) => ({
                url: `/user/agents/become-agent`,
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
        changePassword: builder.mutation({
            query: (passwordInfo) => ({
                url: `/user/change-password`,
                method: 'PATCH',
                data: passwordInfo
            }),
        }),
    })
})

export const {useGetAllUsersQuery, useGetAllAgentsQuery, useDeleteUserMutation, useBecomeAgentMutation, useUpdateUserStatusMutation, useUpdateUserMutation, useChangePasswordMutation} = userApi