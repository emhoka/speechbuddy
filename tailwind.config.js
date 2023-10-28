/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily:{
      "DMSans":['DM Sans', 'sans-serif'],
    },
    extend: {
      colors:{
        "green":"#14C8AB",
        "meroon":"#872657",
        "redColor": "#FD897B",
        "pink":"#FFE4E1",
        "lightPink":"#FFFBFB"
      },
      boxShadow:{
        "authButtonShadow":"0px 4px 12px -2px rgba(20, 200, 171, 0.2)",
        'sideBarShadow': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      }
    },
  },
  plugins: [],
}