const verify = (request, reply, next) => {
	const key = request.headers["x-api-key"];
	// Verifcation logic
	/* istanbul ignore else if */
	if (key !== process.env.API_KEY) {
		reply.code(401).send({ error: "Unauthorized" });
	} else if (key === process.env.API_KEY) {
		next();
	}
};

module.exports = verify;
