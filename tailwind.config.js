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
        background: "var(--background)",
        foreground: "var(--foreground)",
        gunmetal: "#2d3142ff",
        silver: "#bfc0c0ff",
        coral: "#ef8354ff",
        paynesGray: "#4f5d75ff",
        lightGray: "#F4F5F0",
      },
      fontFamily: {
        default: "var(--default-font)",
        heading: "var(--heading-font)",
        nav: "var(--nav-font)",
      },
    },
  },
  plugins: [],
};
