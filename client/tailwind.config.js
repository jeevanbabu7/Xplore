/** @type {import('tailwindcss').Config} */ 
export default {
    darkMode: ["class"],
    content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
  	extend: {
  		boxShadow: {
  			'top-only': '0 -4px 6px -1px rgba(100, 100, 100, 0.5)'
  		},
  		animation: {
  			'infinite-scroll': 'infinite-scroll 20s linear infinite',
  			'background-position-spin': 'background-position-spin 3000ms infinite alternate',
			'mesh': 'mesh 10s infinite ease-in-out'
  		},
  		keyframes: {
  			'infinite-scroll': {
  				from: {
  					transform: 'translateX(0%)'
  				},
  				to: {
  					transform: 'translateX(-100%)'
  				}
  			},
  			'background-position-spin': {
  				'0%': {
  					backgroundPosition: 'top center'
  				},
  				'100%': {
  					backgroundPosition: 'bottom center'
  				}
  			},
			  'mesh': {
				'0%': {
				  backgroundPosition: '0% 50%',
				  transform: 'scale(1)',
				},
				'25%': {
				  backgroundPosition: '50% 0%',
				  transform: 'scale(1.1)',
				},
				'50%': {
				  backgroundPosition: '100% 50%',
				  transform: 'scale(1)',
				},
				'75%': {
				  backgroundPosition: '50% 100%',
				  transform: 'scale(1.1)',
				},
				'100%': {
				  backgroundPosition: '0% 50%',
				  transform: 'scale(1)',
				},
			  }
  		},
  		scrollbar: {
  			thin: '2px'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	},
  	screens: {
  		sm: '640px',
  		md: '768px',
  		lg: '1024px'
  	}
  },
  plugins: [
    require('daisyui'),
      require("tailwindcss-animate")
],
}