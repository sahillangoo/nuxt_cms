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
          "neutral": "#2D3748",          // squad-dark-gray
          "base-100": "#FFFFFF",         // page background - white
          "base-200": "#F7FAFC",         // card/section background - squad-light-gray
          "base-300": "#E2E8F0",         // borders, hover
          "info": "#2094f3",             // example, can be customized
          "success": "#00877A",          // slightly darker teal for success
          "warning": "#FFC107",          // a lighter, more traditional warning yellow
          "error": "#F44336",            // standard error red

          "--rounded-box": "1rem",        // border radius rounded-box utility class, used in card and other large boxes
          "--rounded-btn": "0.5rem",      // border radius rounded-btn utility class, used in buttons and similar elements
          "--rounded-badge": "1.9rem",    // border radius rounded-badge utility class, used in badges and similar
          "--animation-btn": "0.25s",     // duration of animation when you click on button
          "--animation-input": "0.2s",    // duration of animation for inputs like checkbox, toggle, radio, etc
          "--btn-focus-scale": "0.95",    // scale transform of button when you focus on it
          "--border-btn": "1px",          // border width of buttons
          "--tab-border": "1px",          // border width of tabs
          "--tab-radius": "0.5rem",       // border radius of tabs
        },
      },
      // Optionally, define a dark theme later if requested
      // "dark", // or a predefined DaisyUI dark theme
    ],
    darkTheme: "squadcoderslight", // Set default to light, can be changed later
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include DaisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    prefix: "", // prefix for DaisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Show logs when DaisyUI is processing Tailwind CSS
  },
};
