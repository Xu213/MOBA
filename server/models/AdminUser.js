const mongoose = require("mongoose");

const schema = new mongoose.Schema({
	username: { type: String },
	password: {
		type: String,
		select: true,
		set(val) {
			// 引入包bcrypt对密码散列
			return require("bcrypt").hashSync(val, 10);
		}
	}
});

module.exports = mongoose.model("AdminUser", schema);
