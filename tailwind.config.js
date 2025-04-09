/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 0.5s ease-out',
        'neon-pulse': 'neonPulse 4s ease-in-out infinite',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        neonPulse: {
          '0%, 100%': {
            background: 'linear-gradient(135deg, #f0f7ff 0%, #e6f0ff 100%)',
          },
          '50%': {
            background: 'linear-gradient(135deg, #e6f0ff 0%, #d9e8ff 100%)',
            boxShadow: '0 0 30px rgba(59, 130, 246, 0.2)',
          },
        },
      },
    },
  },
  plugins: [],
};