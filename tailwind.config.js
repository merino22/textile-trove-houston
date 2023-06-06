/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'first': 'url(\'https://images.unsplash.com/photo-1561053720-76cd73ff22c3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwxOHx8YmFsZXMlMjBvZiUyMGNsb3RoZXMlMjBzZWxsZXJ8ZW58MHx8fHwxNjg1MzI3OTUyfDA&ixlib=rb-4.0.3&q=80&w=1080\')',
        'second': "url('/src/assets/images/bluejeans.png')"
      },
      colors: {
        'gray-3': 'rgb(51, 51, 51)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}