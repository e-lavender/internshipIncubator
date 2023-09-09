import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import '@/app/styles/index.scss'
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      dark: { ...themes.dark, appBg: '#171717' },
      light: { ...themes.normal, appBg: '#808080' },
    },
    docs: {
      theme: themes.dark,
    },
  },
}

export default preview
