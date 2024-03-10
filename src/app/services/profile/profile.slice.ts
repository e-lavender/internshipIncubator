import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { postsApi } from '@/app/services/posts/posts.api'
import { profileApi } from '@/app/services/profile/profile.api'
import { GeneralSettingsType, UserProfileModel } from '@/app/services/profile/profile.api.types'
import { publicPostsApi } from '@/app/services/public-posts/public-posts.api'

const defaultSettingsState: GeneralSettingsType = {
  userName: '',
  firstName: '',
  lastName: '',
  dateOfBirth: '',
  country: '',
  city: '',
  aboutMe: '',
  posts: { totalCount: 0 },
}

const profileSettings = createSlice({
  name: 'profile',
  initialState: defaultSettingsState,
  reducers: {
    updateSettings(state, action: PayloadAction<UserProfileModel>) {
      const { userName, firstName, lastName, dateOfBirth, aboutMe } = action.payload

      state.userName = userName
      state.firstName = firstName
      state.lastName = lastName
      state.dateOfBirth = dateOfBirth
      state.aboutMe = aboutMe
    },
  },
  extraReducers: builder => {
    builder
      .addMatcher(profileApi.endpoints.getProfile.matchFulfilled, (state, action) => {
        const { userName, firstName, lastName, dateOfBirth, aboutMe } = action.payload

        state.userName = userName
        state.firstName = firstName
        state.lastName = lastName
        state.dateOfBirth = dateOfBirth
        state.aboutMe = aboutMe
      })
      .addMatcher(publicPostsApi.endpoints.getPublicPostsByUser.matchFulfilled, (state, action) => {
        state.posts.totalCount = action.payload.totalCount
      })
  },
})

export const { updateSettings } = profileSettings.actions
export const profileSlice = profileSettings.reducer
