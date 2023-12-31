/* eslint-disable no-console */
const { performance } = require("perf_hooks");
var startTime = performance.now();
const chalk = require("chalk");
const generate = require("./generate.js");
const generateFavicon = require("./generate_favicon.js");

const fs = require("fs");
// Make build directory
fs.mkdirSync("build", { recursive: true });

// Configure hljs
const hljs = require("highlight.js");
const javascript = require("highlight.js/lib/languages/javascript");
const json = require("highlight.js/lib/languages/json");
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("json", json);

// Generate index.html
const marked = require("marked");
const raw_index_body_content = fs.readFileSync("README.md", "utf8");
const index_body_content = marked.marked(raw_index_body_content, {
	highlight: function (code, lang) {
		const language = hljs.getLanguage(lang) ? lang : "javascript";
		return hljs.highlight(code, { language }).value;
	},
	langPrefix: "hljs language-"
});
generate("index", index_body_content);

// Generate docs.html
var raw_docs_body_content = fs.readFileSync("docs.md", "utf8");
const docs_body_content = marked.marked(raw_docs_body_content, {
	highlight: function (code, lang) {
		const language = hljs.getLanguage(lang) ? lang : "javascript";
		return hljs.highlight(code, { language }).value;
	},
	langPrefix: "hljs language-"
});
generate("docs", docs_body_content);
generateFavicon();
var endTime = performance.now();

console.log(chalk.blue.bold.bgWhite(" Built "));
console.log(chalk.yellow("build/index.html"));
console.log(chalk.yellow("build/docs.html"));
console.log(chalk.yellow("build/favicon.ico"));
console.log("in", chalk.red.bold.bgWhite(endTime - startTime), "ms");
console.log("");
console.log(chalk.green("Now running prettier..."));
