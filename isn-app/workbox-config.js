module.exports = {
	globDirectory: 'public/',
	globPatterns: [
		'**/*.{ico,html,js}'
	],
	swDest: 'public/sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};