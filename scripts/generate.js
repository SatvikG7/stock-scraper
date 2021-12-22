const fs = require("fs");
const customCSS = require("./customcss.js");

var HTML;
var doctype_tag, html_tag, head_tag, style_tag, body_tag;
var html_content, head_content, title_content, style_content;

const generate = (page, body_content) => {
	head_content = `
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
	`;
	style_content = fs.readFileSync(
		"node_modules/highlight.js/styles/gradient-dark.css",
		"utf8"
	);

	if (page === "index") {
		title_content = "Stock Scraper API";
		style_content += customCSS.index;
	} else if (page === "docs") {
		title_content = "Stock Scraper API";
		style_content += customCSS.docs;
	}
	head_content += `
	<title>${title_content}</title>
	`;
	style_tag = `
	<style>
		${style_content}
	</style>
	`;

	head_tag = `
	<head>
		${head_content}
		${style_tag}
	</head>`;

	body_tag = `
	<body>
		${body_content}
	</body>
	`;
	html_content = `
		${head_tag}
		${body_tag}
	`;

	html_tag = `
	<html lang="en">
		${html_content}
	</html>`;

	doctype_tag = `<!DOCTYPE html>`;

	HTML = `
	${doctype_tag}
	${html_tag}
	`;
	fs.writeFileSync(`build/${page}.html`, HTML);
};

module.exports = generate;
