module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      {
        'customTheme': {
          'primary': '#3cb0cd',
          'primary-focus': '#2c8196',
          'primary-content': '#f2f2f2',
          'secondary': '#229631',
          'secondary-focus': '#1c7d28',
          'secondary-content': '#f2f2f2',
          'accent': '#1bee9a',
          'accent-focus': '#19d28b',
          'accent-content': '#1c1c1c',
          'neutral': '#152528',
          'neutral-focus': '#29474c',
          'neutral-content': '#f2f2f2',
          'base-100': '#152528',
          'base-200': '#284348',
          'base-300': '#3e6770',
          'base-content': '#f2f2f2',
          'info': '#0672cb',
          'success': '#0c5a23',
          'warning': '#ff9900',
          'error': '#ff5724',
        },
      },
    ],
  },
}
