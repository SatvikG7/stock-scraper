const axios = require("axios");
const cheerio = require("cheerio");

const fetchTickerValue = async (request, reply) => {
	let ticker = request.params.ticker;
	let exchange = request.params.exchange;
	/* istanbul ignore next */
	if (!ticker || !exchange) {
		reply.code(400).send({ message: "Invalid ticker or exchange" });
	}

	let url = `https://google.com/finance/quote/${ticker}:${exchange}`;
	let value;
	await axios.get(url).then((data, err) => {
		/* istanbul ignore next */
		if (err) {
			reply.code(500).send({ message: "Error fetching ticker value" });
		}

		const $ = cheerio.load(data.data);
		value = $(".YMlKec" && ".fxKbKc")
			.first()
			.text();
	});

	let data = {
		ticker: ticker,
		exchange: exchange,
		value: value.toString()
	};

	return data;
};

module.exports = fetchTickerValue;
