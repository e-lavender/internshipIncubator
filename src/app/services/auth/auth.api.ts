import { authApiUrls } from '@/app/constants/routes/auth'
import {
  NewPasswordCredentials,
  PasswordRecovery,
  SignInCredentials,
  UserModel,
  UserRegistrationParams,
} from '@/app/services/auth/auth.api.types'
import { commonApi } from '@/app/services/common/common.api'

const {
  signIn,
  signUp,
  createNewPassword,
  passwordRecovery,
  refreshMe,
  getMe,
  registrationConfirmation,
  resendEmail,
  signOut,
  loginGithubOAuth,
  loginGoogleOAuth,
  checkRecoveryCode,
} = authApiUrls

export const authAPI = commonApi.injectEndpoints({
  endpoints: builder => ({
    checkRecoveryCode: builder.mutation<{ email: string }, { recoveryCode: string }>({
      query: () => {
        return {
          method: 'POST',
          url: checkRecoveryCode(),
        }
      },
    }),
    signIn: builder.mutation<{ accessToken: string }, SignInCredentials>({
      query: args => {
        return {
          method: 'POST',
          url: signIn(),
          body: args,
        }
      },
      invalidatesTags: ['ME'],
    }),
    signOut: builder.mutation<void, void>({
      query: () => ({
        method: 'POST',
        url: signOut(),
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        dispatch(
          authAPI.util.updateQueryData('getMe', undefined, () => {
            return null
          })
        )

        try {
          await queryFulfilled
        } catch {
          //TODO uncomment after back logoff will be ready
          //patchResult.undo()
        }
      },
      invalidatesTags: ['ME'],
    }),
    getMe: builder.query<UserModel, void>({
      query: () => {
        return {
          method: 'GET',
          url: getMe(),
        }
      },
      extraOptions: { maxRetries: 0 },
      providesTags: ['ME'],
    }),
    createNewPassword: builder.mutation<void, NewPasswordCredentials>({
      query: args => {
        return {
          method: 'POST',
          url: createNewPassword(),
          body: args,
        }
      },
    }),
    passwordRecovery: builder.mutation<void, PasswordRecovery>({
      query: args => {
        return {
          method: 'POST',
          url: passwordRecovery(),
          body: args,
        }
      },
    }),
    signUp: builder.mutation<void, UserRegistrationParams>({
      query: args => {
        return {
          method: 'POST',
          url: signUp(),
          body: args,
        }
      },
    }),
    emailConfirmation: builder.mutation<
      void,
      {
        confirmationCode: string
      }
    >({
      query: code => {
        return {
          method: 'POST',
          url: registrationConfirmation(),
          body: { confirmationCode: code.confirmationCode },
        }
      },
    }),

    resendEmail: builder.mutation<
      void,
      {
        email: string
        baseUrl: string
      }
    >({
      query: code => {
        return {
          method: 'POST',
          url: resendEmail(),
          body: code,
        }
      },
    }),
    refreshMe: builder.mutation<{ accessToken: string }, void>({
      query: () => {
        return {
          method: 'POST',
          url: refreshMe(),
        }
      },
    }),

    googleOAuth: builder.mutation<
      {
        accessToken: string
        email: string
      },
      { code: string }
    >({
      query: user => {
        return {
          method: 'POST',
          url: loginGoogleOAuth(),
          body: user,
        }
      },
    }),

    githubOAuth: builder.query<void, void>({
      query: () => {
        return {
          method: 'GET',
          url: loginGithubOAuth(),
        }
      },
    }),
  }),
})

export const {
  useEmailConfirmationMutation,
  useRefreshMeMutation,
  usePasswordRecoveryMutation,
  useCreateNewPasswordMutation,
  useResendEmailMutation,
  useSignOutMutation,
  useGetMeQuery,
  useSignUpMutation,
  useSignInMutation,
} = authAPI
