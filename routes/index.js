"use strict";
const path = require("path");

// eslint-disable-next-line no-unused-vars
module.exports = async function (fastify, opts) {
	// eslint-disable-next-line no-unused-vars
	fastify.register(require("fastify-static"), {
		root: path.join(__dirname, "..", "/build")
	});
	fastify.get("/", function (req, reply) {
		return reply.sendFile("index.html");
	});
	fastify.get("/index.html", function (req, reply) {
		return reply.sendFile("index.html");
	});
	fastify.get("/docs", function (req, reply) {
		return reply.sendFile("docs.html");
	});
	fastify.get("/docs.html", function (req, reply) {
		return reply.sendFile("docs.html");
	});
	fastify.get("/:file", function (req, reply) {
		return reply.sendFile(req.params.file);
	});
};
