module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Calibri", "sans-serif"],
			},
			width: {
				paper: "210mm",
			},
			height: {
				// paper: "297mm",
				paper: "270mm",
			},
		},
	},
	plugins: [],
};
