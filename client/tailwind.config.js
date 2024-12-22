/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui';
import animate from 'tailwindcss-animate';

export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      boxShadow: {
        'top-only': '0 -4px 6px -1px rgba(100, 100, 100, 0.5)',
      },
      animation: {
        'infinite-scroll': 'infinite-scroll 20s linear infinite',
        'background-position-spin': 'background-position-spin 3000ms infinite alternate',
        'mesh': 'mesh 10s infinite ease-in-out',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0%)' },
          to: { transform: 'translateX(-100%)' },
        },
        'background-position-spin': {
          '0%': { backgroundPosition: 'top center' },
          '100%': { backgroundPosition: 'bottom center' },
        },
        mesh: {
          '0%': { backgroundPosition: '0% 50%', transform: 'scale(1)' },
          '25%': { backgroundPosition: '50% 0%', transform: 'scale(1.1)' },
          '50%': { backgroundPosition: '100% 50%', transform: 'scale(1)' },
          '75%': { backgroundPosition: '50% 100%', transform: 'scale(1.1)' },
          '100%': { backgroundPosition: '0% 50%', transform: 'scale(1)' },
        },
      },
      colors: {
        background: 'hsl(var(--background), 255, 255, 255)',
        foreground: 'hsl(var(--foreground), 0, 0, 0)',
        card: {
          DEFAULT: 'hsl(var(--card), 255, 255, 255)',
          foreground: 'hsl(var(--card-foreground), 0, 0, 0)',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover), 240, 240, 240)',
          foreground: 'hsl(var(--popover-foreground), 60, 60, 60)',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary), 220, 90%, 56%)',
          foreground: 'hsl(var(--primary-foreground), 255, 255, 255)',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary), 300, 70%, 60%)',
          foreground: 'hsl(var(--secondary-foreground), 255, 255, 255)',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent), 50, 90%, 55%)',
          foreground: 'hsl(var(--accent-foreground), 255, 255, 255)',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
    },
  },
  plugins: [daisyui, animate],
};
