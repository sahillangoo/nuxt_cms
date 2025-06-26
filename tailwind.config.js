/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        'squad-teal': '#00A99D',
        'squad-orange': '#FF6F00',
        'squad-purple': '#6A0DAD',
        'squad-dark-gray': '#2D3748',
        'squad-medium-gray': '#718096',
        'squad-light-gray': '#F7FAFC',
        // DaisyUI semantic names will map to these
        primary: '#00A99D', // squad-teal
        secondary: '#FF6F00', // squad-orange
        accent: '#6A0DAD', // squad-purple
        neutral: '#2D3748', // squad-dark-gray
        'base-100': '#FFFFFF', // Base background - white
        'base-200': '#F7FAFC', // Slightly off-white for cards or sections
        'base-300': '#E2E8F0', // A bit darker for hover states or borders
        info: '#2094f3', // Standard info blue
        success: '#009485', // Can be a variation of teal or a green
        warning: '#ff9900', // Standard warning orange
        error: '#ff5724', // Standard error red
      },
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
        headings: ['Poppins', 'ui-sans-serif', 'system-ui'],
        mono: ['Roboto Mono', 'ui-monospace'],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        squadcoderslight: { // Custom light theme name
          "primary": "#00A99D",          // squad-teal
          "secondary": "#FF6F00",        // squad-orange
          "accent": "#6A0DAD",           // squad-purple
          "neutral": "#2D3748",          // squad-dark-gray (used for text, headers, footers)
          "base-100": "#FFFFFF",         // page background - white
          "base-200": "#F7FAFC",         // card/section background - squad-light-gray
          "base-300": "#E2E8F0",         // borders, hover elements
          "info": "#2094f3",
          "success": "#00877A",          // slightly darker teal for success
          "warning": "#FFC107",
          "error": "#F44336",

          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",

          // Ensure text contrast on colored backgrounds
          "primary-content": "#FFFFFF",
          "secondary-content": "#FFFFFF",
          "accent-content": "#FFFFFF",
          "neutral-content": "#F7FAFC", // Light text on dark neutral background
          "info-content": "#FFFFFF",
          "success-content": "#FFFFFF",
          "warning-content": "#2D3748", // Dark text on light warning
          "error-content": "#FFFFFF",
        },
      },
      {
        squadcodersdark: { // Custom dark theme
          "primary": "#00A99D",          // squad-teal (can remain same or be brightened if needed)
          "secondary": "#FF6F00",        // squad-orange (can remain same or be brightened)
          "accent": "#6A0DAD",           // squad-purple (can remain same or be brightened)
          "neutral": "#F7FAFC",          // For text in dark mode, or light elements on dark bg
          "base-100": "#1A202C",         // Very dark gray/blue for page background
          "base-200": "#2D3748",         // squad-dark-gray for card/section background
          "base-300": "#4A5568",         // Lighter gray for borders, hover elements
          "info": "#2094f3",
          "success": "#00C89A",          // Brighter success green for dark mode
          "warning": "#FFDA63",          // Brighter warning yellow
          "error": "#FF6B6B",            // Brighter error red

          "--rounded-box": "1rem",
          "--rounded-btn": "0.5rem",
          "--rounded-badge": "1.9rem",
          "--animation-btn": "0.25s",
          "--animation-input": "0.2s",
          "--btn-focus-scale": "0.95",
          "--border-btn": "1px",
          "--tab-border": "1px",
          "--tab-radius": "0.5rem",

           // Ensure text contrast on colored backgrounds for dark theme
          "primary-content": "#FFFFFF",   // White text on teal
          "secondary-content": "#FFFFFF", // White text on orange
          "accent-content": "#FFFFFF",    // White text on purple
          "neutral-content": "#1A202C",  // Dark text on light neutral background (if neutral is light)
                                         // If neutral is used as a dark bg, this should be light.
                                         // The 'neutral' color itself is #F7FAFC (light)
                                         // so text on it should be dark.
          "info-content": "#FFFFFF",
          "success-content": "#1A202C",   // Dark text on bright success
          "warning-content": "#2D3748",   // Dark text on bright warning
          "error-content": "#FFFFFF",
        },
      },
    ],
    darkTheme: "squadcodersdark", // Set the preferred dark theme
    base: true,
    styled: true, // include DaisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for DaisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Show logs when DaisyUI is processing Tailwind CSS
  },
};
