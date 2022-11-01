/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#F9F9F9",
        "primary-green": "#809500",
        "btn-hover": "#E4E4E4",
        "dark-grey": "#353535",
      },
      padding: {
        25: "100px",
      },
      height: {
        dot: "5px",
        header: "305px",
      },
      width: {
        dot: "5px",
      },
      borderRadius: {
        img: "3px",
      },
    },
  },
  plugins: [],
};
