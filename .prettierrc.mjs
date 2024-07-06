// .prettierrc.mjs
/** @type {import("prettier").Config} */
export default {
	overrides: [
		{
			files: "*.astro",
			options: {
				parser: "astro",
			},
		},
	],
	printWidth: 80,
	tabWidth: 2,
	useTabs: false,
	semi: false,
	singleQuote: false,
	quoteProps: "as-needed",
	trailingComma: "all",
	plugins: ["prettier-plugin-tailwindcss", "prettier-plugin-astro"],
};
