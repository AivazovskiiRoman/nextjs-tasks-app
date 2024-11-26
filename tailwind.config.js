/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        customBlue: {
          light: "#1E6F9F",
          DEFAULT: "#4EA8DE",
          dark: "#3A8BB2",
        },
        customPurple: {
          light: "#8C8EFE",
          DEFAULT: "#5E60CE",
          dark: "#42459E",
        },
        customGray: {
          light: "#333333",
          DEFAULT: "#262626",
        },
      },
      maxWidth: {
        740: '740px',
      },
    },
  },
  plugins: [],
};
