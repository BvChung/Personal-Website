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
				gray1: "#F6F6F6",
				gray2: "#26262C",
				bgdark1: "#101416",
				bgdark2: "#171C1F",
				bgdark3: "#1E2327",
				bgdark4: "#242B30",
				bgdark5: "#2D363C",
				primary0: "#002E5A",
				primary1: "#004D95",
				primary2: "#005DB3",
				primary3: "#007BEF",
				primary4: "#0486FF",
				primary5: "#178FFF",
				primary6: "#3EA2FF",
				primary7: "#65B4FF",
				primary8: "#8BC7FF",
				primary9: "#B2DAFF",
				primary10: "#D8ECFF",
			},
		},
	},
	daisyui: {
		themes: ["light"],
	},
	plugins: [require("daisyui")],
};
