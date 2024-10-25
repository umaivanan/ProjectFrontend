// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     './src/**/*.{html,js,jsx,ts,tsx}',  // Source folder paths with file extensions
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',  // Source folder paths with file extensions
  ],
  theme: {
    extend: {
      width: {
        '400': '400%',  // Custom width for 85%
      }
    }
  },
  plugins: [],
}
