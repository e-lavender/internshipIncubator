import { GitHubGetType, GoogleGetType } from '@/app/services/auth/auth.api.types'
import { commonApi } from '@/app/services/common/common.api'

export const authAPI = commonApi.injectEndpoints({
  endpoints: builder => ({
    getMe: builder.query<any, any>({
      query: () => {
        return {
          method: 'GET',
          url: '/api/auth/me',
        }
      },
      extraOptions: { maxRetries: 0 },
    }),
    signOut: builder.mutation<void, void>({
      query: () => ({
        method: 'POST',
        url: '/api/auth/logout',
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        const patchResult = dispatch(
          authAPI.util.updateQueryData('getMe', undefined, () => {
            return null
          })
        )

        try {
          await queryFulfilled
        } catch {
          patchResult.undo()
        }
      },
    }),
    refreshMe: builder.query<void, void>({
      query: () => {
        return {
          method: 'GET',
          url: '/api/auth/new-tokens',
        }
      },
    }),
    signUp: builder.mutation<any, any>({
      query: ({ email, password }) => {
        return {
          method: 'POST',
          url: '/api/auth/registration',
          body: { email, password },
        }
      },
    }),
    signIn: builder.mutation<any, any>({
      query: ({ email, password }) => {
        return {
          method: 'POST',
          url: '/api/auth/login',
          body: { email, password },
        }
      },
    }),

    resendEmail: builder.mutation<void, string>({
      query: code => {
        return {
          method: 'POST',
          url: '/api/auth/registration-email-resending',
          body: { code },
        }
      },
    }),
    recoverPassword: builder.mutation<void, string>({
      query: email => {
        return {
          method: 'POST',
          url: '/api/auth/password-recovery',
          body: { email },
        }
      },
    }),
    resetPassword: builder.mutation<void, any>({
      query: ({ password, token }) => {
        return {
          method: 'POST',
          url: `/api/auth/new-password/${token}`,
          body: { password },
        }
      },
    }),
    openGoogle: builder.query<any, void>({
      query: () => {
        return {
          method: 'GET',
          url: '/api/auth/google',
        }
      },
    }),
    getGoogle: builder.mutation<any, GoogleGetType>({
      query: args => {
        return {
          method: 'POST',
          url: '/api/auth/google/register',
          body: { args },
        }
      },
    }),
    openGitHub: builder.query<any, any>({
      query: () => {
        return {
          method: 'GET',
          url: '/api/auth/github',
        }
      },
    }),
    getGitHub: builder.mutation<any, GitHubGetType>({
      query: args => {
        return {
          method: 'POST',
          url: '/api/auth/github/register',
          body: { args },
        }
      },
    }),
  }),
})

export const {
  useRecoverPasswordMutation,
  useSignOutMutation,
  useGetMeQuery,
  useSignUpMutation,
  useSignInMutation,
  useResetPasswordMutation,
  useGetGitHubMutation,
  useGetGoogleMutation,
  useOpenGoogleQuery,
  useOpenGitHubQuery,
} = authAPI
