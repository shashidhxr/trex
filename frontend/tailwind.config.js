const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class", // Use 'media' for system preference or 'class' for manual control
  theme: {
    // Customize your theme here
    extend: {
      colors: {
        // Example of extending colors
        primary: colors.blue, // Use Tailwind's colors
        secondary: colors.green,
      },
      // Other theme customizations can go here
    },
  },
  plugins: [
    // Add your custom plugin here
    addVariablesForColors,
  ],
};

// This plugin adds each Tailwind color as a global CSS variable, e.g. var(--gray-200).
function addVariablesForColors({ addBase, theme }) {
  // Get all colors from the theme and flatten the palette
  let allColors = flattenColorPalette(theme("colors"));

  // Create a new object with CSS variable names
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  // Add the variables to the :root selector
  addBase({
    ":root": newVars,
  });
}
