/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#2d3142",
        foreground: "#F4F5F0",
        gunmetal: "#2d3142",
        silver: "#bfc0c0",
        coral: "#ef8354",
        paynesGray: "#4f5d75",
        lightGray: "#F4F5F0",
      },
      fontFamily: {
        default: "var(--font-poppins)",
        heading: "var(--font-raleway)",
        nav: "var(--font-poppins)",
      },
    },
  },
  plugins: [],
};
