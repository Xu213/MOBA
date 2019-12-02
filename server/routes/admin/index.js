module.exports = app => {
	const express = require("express");
	const jwt = require("jsonwebtoken");
	const AdminUser = require("../../models/AdminUser");
	const router = express.Router({
		mergeParams: true
	});
	// 弹出错误
	const Error = require("../../middleware/Error");
	// 登录校验授权中间件
	const authMiddleware = require("../../middleware/auth");
	// 资源中间件
	const resourceMiddleware = require("../../middleware/resource");
	// 创建资源
	router.post("/", async (req, res) => {
		const model = await req.Model.create(req.body);
		res.send(model);
	});
	// 更新资源
	router.put("/:id", async (req, res) => {
		const model = await req.Model.findByIdAndUpdate(req.params.id, req.body);
		res.send(model);
	});
	// 删除资源
	router.delete("/:id", async (req, res) => {
		const model = await req.Model.findByIdAndDelete(req.params.id, req.body);
		res.send({
			succsess: true
		});
	});
	// 资源列表
	router.get("/", async (req, res) => {
		const queryOptions = {};
		if (req.Model.modelName === "Category") {
			queryOptions.populate = "parent";
		}
		const items = await req.Model.find()
			.setOptions(queryOptions)
			.limit(10);
		res.send(items);
	});
	// 资源详情
	router.get("/:id", async (req, res) => {
		const model = await req.Model.findById(req.params.id);
		res.send(model);
	});

	app.use(
		"/admin/api/rest/:resource",
		authMiddleware(),
		resourceMiddleware,
		router
	);
	// 上传文件
	const multer = require("multer");
	const upload = multer({ dest: __dirname + "/../../uploads" });
	app.post(
		"/admin/api/upload",
		authMiddleware(),
		upload.single("file"),
		async (req, res) => {
			const file = req.file;
			file.url = `http://localhost:3000/uploads/${file.filename}`;
			res.send(file);
		}
	);
	// 登录
	app.post("/admin/api/login", async (req, res) => {
		const { username, password } = req.body;
		Error(res, username, 401, "请填写用户");
		Error(res, password, 401, "请填写密码");
		// 找用户
		const user = await AdminUser.findOne({ username }).select("+password");
		Error(res, user, 422, "用户不存在");
		// 校验密码
		const isValid = require("bcrypt").compareSync(password, user.password);
		Error(res, isValid, 422, "密码错误");
		// 返回token user._id
		const token = jwt.sign({ id: user._id }, app.get("secret"));
		res.send({ token, id: user._id });
	});
};
