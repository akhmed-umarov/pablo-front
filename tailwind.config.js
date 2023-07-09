/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{tsx,ts}", "./src/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      spacing: {
        "1.5vh": "1.5vh",
        "7vh": "7vh",
        "9vh": "9vh",
        "20vh": "20vh",
        "30vh": "30vh",
        "40vh": "40vh",
        "50vh": "50vh",
        "70vh": "70vh",
        "86vh": "86vh",
        "93vh": "93vh",
        "100vh": "100vh",
        "10vw": "10vw",
        "25vw": "25vw",
        "50vw": "50vw",
        "65vw": "65vw",
        "70vw": "70vw",
        "90vw": "90vw",
        "100vw": "100vw",
      },
      colors: {
        "bg-orange-infor": "#F4A900",
        "bg-blue-math": "",
        "bg-viol-physic": "",
        header: "#0092FF",
        navbar: "#12BBFF",
      },
    },
  },
  plugins: [],
};
