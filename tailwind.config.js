/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // ✅ Enables manual dark mode via "dark" class on <html>
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // clean, professional font
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg, var(--tw-gradient-stops))',
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
      },
      colors: {
        primary: {
          DEFAULT: '#3b82f6', // Tailwind blue-500
          dark: '#2563eb',    // Tailwind blue-600
        },
        secondary: {
          DEFAULT: '#8b5cf6', // Tailwind purple-500
          dark: '#7c3aed',    // Tailwind purple-600
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'), // 📝 better text styling
    require('@tailwindcss/forms'),      // ✨ cleaner form inputs
    require('tailwind-scrollbar-hide'), // ❌ hide scrollbars for carousels
  ],
}
