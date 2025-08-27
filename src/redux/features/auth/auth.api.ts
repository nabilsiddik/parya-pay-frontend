import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        userSignUp: builder.mutation({
            query: (userInfo) => ({
                url: '/user/register',
                method: 'POST',
                data: userInfo
            }),
            invalidatesTags: ['AUTH']
        }),
        userSignIn: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/login',
                method: 'POST',
                data: userInfo
            }),
            invalidatesTags: ['AUTH']
        }),
        userLogout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
            invalidatesTags: ['AUTH']
        }),
        getCurrentUser: builder.query({
            query: () => ({
                url: '/user/me',
                method: 'GET',
            }),
            providesTags: ['AUTH']
        }),
    })
})

export const {useUserSignUpMutation, useUserSignInMutation, useUserLogoutMutation, useGetCurrentUserQuery} = authApi