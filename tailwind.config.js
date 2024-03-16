/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          
          "primary": "#0066ff",
                   
          "secondary": "#008400",
                   
          "accent": "#d1d5db",
                   
          "neutral": "#1e1421",
                   
          "base-100": "#102735",
                   
          "info": "#0058e1",
                   
          "success": "#00bf5f",
                   
          "warning": "#996300",
                   
          "error": "#fa5e72",
                   },
      },
    ],
  },
  plugins: [require("daisyui")],
};
