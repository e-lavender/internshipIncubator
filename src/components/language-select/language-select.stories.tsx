import { Meta } from '@storybook/react'

import { LanguageSelect } from '@/components'
import { EnglishFlagComponent } from '@/components/language-select/english-flag-component'
import { LanguageSelectTypes } from '@/components/language-select/language-select'
import { RussiaFlagComponent } from '@/components/language-select/russian-flag-component'

export default {
  title: 'Components/Select',
  component: LanguageSelect,
  tags: ['autodocs'],
} satisfies Meta<typeof LanguageSelect>

const optionsLanguageSelect = [
  {
    value: 'ru',
    label: <RussiaFlagComponent />,
  },
  {
    value: 'en',
    label: <EnglishFlagComponent />,
  },
]

export const LanguageSelectStories = {
  render: ({ testOptions }: LanguageSelectTypes) => {
    return <LanguageSelect testOptions={testOptions} />
  },

  args: {
    testOptions: optionsLanguageSelect,
  },
}
