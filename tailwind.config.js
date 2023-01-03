/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: "class",
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				dark1: "#111111",
				dark2: "#121212",
				dark3: "#141414",
				dark4: "#181818",
				dark5: "#1c1c1c",
				dark6: "#343434",
			},
		},
	},
	plugins: [require("daisyui")],
};
