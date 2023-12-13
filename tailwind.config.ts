import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},

			fontFamily: {
				gilroy: "var(--font-gilroy)",
			},
			colors: {
				primary: "rgb(var(--budbo-primary-color-values) / <alpha-value>)",
				"fade-primary":
					"rgb(--budbo-fade-primary-color-values) / <alpha-value>)",

				"electric-violet": {
					"50": "#f3f2ff",
					"100": "#ebe7ff",
					"200": "#d9d3ff",
					"300": "#bdb0ff",
					"400": "#9d83ff",
					"500": "#7e51ff",
					"600": "#6e2dfa",
					"700": "#601be6",
					"800": "#5016c1",
					"900": "#43149e",
					"950": "#270a6b",
				},
				rum: {
					"50": "#f4f4f9",
					"100": "#ececf3",
					"200": "#dcdce9",
					"300": "#c6c7db",
					"400": "#afaecb",
					"500": "#9d99bb",
					"600": "#8a82a9",
					"700": "#736b8e",
					"800": "#615c77",
					"900": "#514d62",
					"950": "#302d39",
				},

				"tan-hide": {
					"50": "#fff7ed",
					"100": "#ffecd4",
					"200": "#ffd6a8",
					"300": "#ffb871",
					"400": "#ff9644",
					"500": "#fe6f11",
					"600": "#ef5407",
					"700": "#c63d08",
					"800": "#9d310f",
					"900": "#7e2b10",
					"950": "#441206",
				},
				malibu: {
					"50": "#effaff",
					"100": "#dff3ff",
					"200": "#b8e9ff",
					"300": "#78d9ff",
					"400": "#30c6ff",
					"500": "#06b0f1",
					"600": "#008dce",
					"700": "#0070a7",
					"800": "#025e8a",
					"900": "#084e72",
					"950": "#06314b",
				},
				gossamer: {
					"50": "#ecfdf7",
					"100": "#d1faea",
					"200": "#a7f3d9",
					"300": "#6ee7c6",
					"400": "#34d3ac",
					"500": "#10b996",
					"600": "#059479",
					"700": "#047865",
					"800": "#065f51",
					"900": "#064e44",
					"950": "#022c27",
				},
			},
			borderRadius:{
				'inherit': 'inherit'
			}
		},
	},
	plugins: [],
};
export default config;
