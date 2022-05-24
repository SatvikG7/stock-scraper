"use strict";
const verify = require("../../utils/verify.js");
const fetchTickerValue = require("../../utils/fetchTickerValue.js");
let data = {
	ticker: String,
	exchange: String,
	value: Number
};
// eslint-disable-next-line no-unused-vars
module.exports = async function (fastify, opts) {
	fastify.route({
		method: "GET",
		url: "/",
		onRequest: (request, reply, next) => {
			return verify(request, reply, next);
		},
		handler: () => {
			return {
				message: "Authenticated in Stocks API"
			};
		}
	});

	fastify.route({
		method: "GET",
		url: "/:ticker",
		onRequest: (request, reply, next) => {
			return verify(request, reply, next);
		},
		handler: () => {
			return { error: "Please provide an exchange" };
		}
	});

	fastify.route({
		method: "GET",
		url: "/:ticker/:exchange",
		onRequest: (request, reply, next) => {
			return verify(request, reply, next);
		},
		preHandler: async (request, reply, next) => {
			data = await fetchTickerValue(request, reply);
			next();
		},
		handler: () => {
			return { ...data };
		}
	});
};
