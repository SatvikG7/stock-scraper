const customCSS = {
	index: `
		html {
			font-size: 1.2rem;
		}

		body{
			background-color: #0D1117;
			color: #768390;
		}

		::marker{
			color: #ffff00;
		}

		a{
			text-decoration: none;
			color: #008080;
		}

		#stock-scraper-api{
			color: #ed143d;
		}

		#getting-started{
			color: #00ff7f;
		}

		#documentation, #endpoints, #examples{
			color: #ff7f50;
		}

		pre code .hljs{
			width:max-content;
			padding: 1em 3em 1em 2em;
		}
	`,
	docs: `
		html {
			font-size: 1.2rem;
		}

		body{
			background-color: #0D1117;
			color: #768390;
		}

		::marker{
			color: #ffff00;
		}

		a{
			text-decoration: none;
			color: #008080;
		}

		#stock-scraper-api{
			color: #ed143d;
		}

		#documentation{
			color: #00ff7f;
		}

		#endpoints, #examples{
			color: #ff7f50;
		}

		pre code.hljs{
			width:max-content;
			padding: 1em 3em 1em 2em;
		}
	`
};

module.exports = customCSS;
