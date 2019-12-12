module.exports = options => async (req, res, next) => {
	const jwt = require("jsonwebtoken");
	const AdminUser = require("../models/AdminUser");
	const Error = require("./Error");

	const token = String(req.headers.authorization || "")
		.split(" ")
		.pop();
	// Error(res, token, 401, "请先登录");
	Error(res, token, 401, "请提供TOKEN");
	const {
		id
	} = jwt.verify(token, req.app.get("secret"));
	// Error(res, id, 401, "请先登录");
	Error(res, id, 401, "无效的JWT TOKEN");
	req.user = await AdminUser.findById(id);
	// console.log(req.user);
	// alert(JSON.stringify(res.user));
	Error(res, req.user, 401, "请先登录");
	await next();
};