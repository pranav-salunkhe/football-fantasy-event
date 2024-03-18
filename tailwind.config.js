// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/data/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/assets/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       backgroundImage: {
//         "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
//         "gradient-conic":
//           "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
//           "football-ground": "url('https://images.unsplash.com/photo-1589487391730-58f20eb2c308?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGZvb3RiYWxsJTIwZ3JvdW5kfGVufDB8fDB8fHww')",
//       },
//     },
//   },
//   daisyui: {
//     themes: [
//       {
//         mytheme: {
          
//           // "primary": "#0066ff",
                   
//           // "secondary": "#008400",
                   
//           // "accent": "#d1d5db",
                   
//           // "neutral": "#1e1421",
                   
//           // "base-100": "#102735",
                   
//           // "info": "#0058e1",
                   
//           // "success": "#00bf5f",
                   
//           // "warning": "#996300",
                   
//           // "error": "#fa5e72",
//                    },
//       },
//     ],
//   },
//   plugins: [require("daisyui")],
// };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/data/**/*.{js,ts,jsx,tsx,mdx,png,jpeg,jpg,avif}",
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
                   
          "secondary": "#ff70cf",
                   
          "accent": "#d1d5db",
                   
          "neutral": "#2b323c",
                   
          "base-100": "#1d232a",
                   
          "info": "#0058e1",
                   
          "success": "#00ca92",
                   
          "warning": "#47412e",
                   
          "error": "#fa5e72",
                   },
      },
    ],
  },
  plugins: [require("daisyui")],
};

