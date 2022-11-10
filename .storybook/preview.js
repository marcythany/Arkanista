import '../styles/globals.css'

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {disabled: true},
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}