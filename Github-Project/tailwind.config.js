module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 1024px) { ... }

			lg: "1024px",
			// => @media (min-width: 1280px) { ... }
			xl: "1536px",
			// => @media (min-width: 1024px) { ... }
		},
		extend: {},
	},
	plugins: [],
};
