/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'sb-dark': 'rgb(var(--sb-dark) / <alpha-value>)',
        'sb-darker': 'rgb(var(--sb-darker) / <alpha-value>)',
        'sb-green': 'rgb(var(--sb-green) / <alpha-value>)',
        'sb-foreground': 'rgb(var(--sb-foreground) / <alpha-value>)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
        'gradient': 'gradient 6s linear infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 20px rgba(62, 207, 142, 0.1)' },
          '100%': { boxShadow: '0 0 40px rgba(62, 207, 142, 0.2)' },
        },
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
};