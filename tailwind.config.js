/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
    theme: {
      fontSize: {
        sm: ['8px', '8px'],
        md: ['10px', '10px'],
        lg: ['12px', '12x'],
        xl: ['14px', '14px'],
        xxl: ['18px', '18px'],
        xxxl: ['22px', '22px'],
      },
    extend: {},
  },
  plugins: [],
}

