export const SITE = {
	name: 'Hacktoberfest 2022 | Docker',

	origin: 'https://docker.github.io',
	basePathname: '/hacktoberfest-2022',

	title: 'Hacktoberfest 2022 | Docker',
	description: 'Celebrate Hacktoberfest with Docker and contribute to our new Docker Extensions. We have listed all available repositories and you can also create your own to contribute to your Hacktoberfest Journey. Long live Open Source Software!',

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post 
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};
