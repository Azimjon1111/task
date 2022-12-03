module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#177EFF",
        own_gray: "#F5F6FA",
        dark_gray: "#667281"
      },
    },
    fontFamily: {
      lora: ["Lora", "serif"],
      arial: ['arial', "arial"]
    },
  },
  plugins: [],
}