module.exports = (res, value, code, message) => {
	if (!value) {
		return res.status(code).send({
			message: message
		});
	}
};
