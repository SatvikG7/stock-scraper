"use strict";

const { test } = require("tap");
const { build } = require("../helper");

test("Test / route", async (t) => {
	const app = build(t);
	const routes = ["/", "/index.html"];
	for (let route of routes) {
		const res = await app.inject({
			url: route
		});
		t.equal(res.statusCode, 200);
		t.same(res.headers["content-type"], "text/html; charset=UTF-8");
	}
});

test("Test /docs route", async (t) => {
	const app = build(t);
	const routes = ["/docs", "/docs.html"];
	for (let route of routes) {
		const res = await app.inject({
			url: route
		});
		t.equal(res.statusCode, 200);
		t.same(res.headers["content-type"], "text/html; charset=UTF-8");
	}
});

test("Test /favicon route", async (t) => {
	const app = build(t);
	const res = await app.inject({
		url: "/favicon.ico"
	});
	t.equal(res.statusCode, 200, "favicon.ico should return 200");
});
