module.exports = {
	theme: {
		extend: {
			animation: {
        'infinite-left-scroll': 'infinite-left-scroll 40s linear infinite',
        'infinite-right-scroll': 'infinite-right-scroll 40s linear infinite',
      },
      keyframes: {
        'infinite-left-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        'infinite-right-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(100%)' },
        }
      },
			fontFamily: {
				sans: ["Sulphur Point", "sans-serif"],
				gabarito: ["Gabarito", "sans-serif"],
			},
		},
	},
};
