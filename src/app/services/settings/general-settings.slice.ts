import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { GeneralSettingsType } from '@/app/services/settings/settings.types'

const defaultSettingsState: GeneralSettingsType = {
  userName: '',
  firstName: '',
  lastName: '',
  birthday: undefined,
  country: '',
  city: '',
  aboutMe: '',
}

const generalSettings = createSlice({
  name: 'settings',
  initialState: defaultSettingsState,
  reducers: {
    updateSettings(state, action: PayloadAction<GeneralSettingsType>) {
      const { userName, firstName, lastName, birthday, country, city, aboutMe } = action.payload

      state.userName = userName
      state.firstName = firstName
      state.lastName = lastName
      state.birthday = birthday
      state.aboutMe = aboutMe
    },
  },
})

export const { updateSettings } = generalSettings.actions
export const settingsSlice = generalSettings.reducer
