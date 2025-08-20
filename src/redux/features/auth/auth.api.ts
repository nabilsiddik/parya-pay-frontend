import { baseApi } from "@/redux/baseApi";

export const authApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        userSignUp: builder.mutation({
            query: (userInfo) => ({
                url: '/user/register',
                method: 'POST',
                data: userInfo
            })
        }),
        userSignIn: builder.mutation({
            query: (userInfo) => ({
                url: '/auth/login',
                method: 'POST',
                data: userInfo
            })
        }),
        userLogout: builder.mutation({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            })
        }),
        getCurrentUser: builder.query({
            query: () => ({
                url: '/user/me',
                method: 'GET',
            })
        }),
    })
})

export const {useUserSignUpMutation, useUserSignInMutation, useUserLogoutMutation, useGetCurrentUserQuery} = authApi