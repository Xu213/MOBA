import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import router from "./router";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./style.css";
Vue.use(ElementUI);

Vue.config.productionTip = false;

import http from "./http/http";
Vue.prototype.$http = http;

Vue.mixin({
	computed: {
		uploadUrl() {
			return this.$http.defaults.baseURL + "/upload";
		}
	},
	methods: {
		getAuthHeader() {
			return {
				Authorization: `Bearer ${sessionStorage.token || ""}`
			};
		}
	}
});

new Vue({
	router,
	el: "#app",
	render: h => h(App)
});
