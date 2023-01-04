/** @type {import('tailwindcss').Config} */

module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Inter var"],
			},
			colors: {
				dark1: "#131316",
				dark2: "#1C1C21",
				dark3: "#141414",
				dark4: "#181818",
				dark5: "#18181b",
				dark6: "#2a2a2d",
				dark7: "#26262B",
				gray1: "#5F625E",
				gray2: "#26262C",
				bgdark1: "#323748",
				blue0: "#0069E0",
				blue1: "#0072F5",
				blue2: "#0A7CFF",
				blue3: "#1F87FF",
				blue4: "#3392FF",
			},
		},
	},
	daisyui: {
		themes: ["light"],
	},
	plugins: [require("daisyui")],
};
