/** @type {import('tailwindcss').Config} */
import { defineConfig } from 'tailwindcss'; 
import typography from '@tailwindcss/typography'; 
import forms from '@tailwindcss/forms';
const {nextui} = require("@nextui-org/react");
export default defineConfig( {
  plugins: [typography, forms],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [nextui()],
});

