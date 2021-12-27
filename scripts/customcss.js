const customCSS = {
	common: `
	html {
		font-size: 1.5rem;
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

	pre code.hljs{
		width: 70vw;
		font-size: 0.75rem;
		font-family: "Cascadia code", monospace;
		padding: 1em 3em 1em 2em;
	}
	`,
	index: `
		#getting-started{
			color: #00ff7f;
		}

		#documentation, #endpoints, #examples{
			color: #ff7f50;
		}
	`,
	docs: `
		#documentation{
			color: #00ff7f;
		}

		#endpoints, #examples{
			color: #ff7f50;
		}
	`
};

module.exports = customCSS;
