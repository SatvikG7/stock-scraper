"use strict";

const { test } = require("tap");
const { build } = require("../helper");

test("Test /api/ route", async (t) => {
	const app = build(t);

	const res = await app.inject({
		url: "/api/",
		headers: {
			"x-api-key": "RandomKey"
		}
	});
	t.equal(res.statusCode, 401, "Api key is required for API route");
	t.same(JSON.parse(res.payload), { error: "Unauthorized" });
});

test("Test /api/ route", async (t) => {
	const app = build(t);

	const res = await app.inject({
		url: "/api/",
		headers: {
			"x-api-key": process.env.API_KEY
		}
	});
	t.equal(res.statusCode, 200, "Api key is required for API route");
	t.same(JSON.parse(res.payload), {
		message: "Authenticated in Stock Scraper API"
	});
});

test("Test /api/:ticker/:exchange route", async (t) => {
	const app = build(t);

	const res = await app.inject({
		url: "/api/MSFT/NASDAQ",
		headers: {
			"x-api-key": process.env.API_KEY
		}
	});
	t.equal(res.statusCode, 200, "Api key is required for API route");
	t.type(JSON.parse(res.payload).value, "string");
	t.not(JSON.parse(res.payload).value, undefined, "Value is not undefined");
	t.not(JSON.parse(res.payload), {
		ticker: "MSFT",
		exchange: "NASDAQ",
		value: ""
	});
});

test("Test error handlers on /api/:ticker/:exchange route", async (t) => {
	const app = build(t);

	const res = await app.inject({
		url: "/api/onlyTickerIsProvided",
		headers: {
			"x-api-key": process.env.API_KEY
		}
	});
	t.same(JSON.parse(res.payload), { error: "Please provide an exchange" });
});

// inject callback style:
//
// test('example is loaded', (t) => {
//   t.plan(2)
//   const app = build(t)
//
//   app.inject({
//     url: '/example'
//   }, (err, res) => {
//     t.error(err)
//     t.equal(res.payload, 'this is an example')
//   })
// })
