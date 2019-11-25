import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../views/Main.vue";

import CategoryEdit from "../views/CategoryEdit.vue";
import CategoryList from "../views/CategoryList.vue";

import ItemEdit from "../views/ItemEdit.vue";
import ItemList from "../views/ItemList.vue";

import HeroEdit from "../views/HeroEdit.vue";
import HeroList from "../views/HeroList.vue";

import ArticleEdit from "../views/ArticleEdit.vue";
import ArticleList from "../views/ArticleList.vue";

import AdEdit from "../views/AdEdit.vue";
import AdList from "../views/AdList.vue";

import AdminUserEdit from "../views/AdminUserEdit.vue";
import AdminUserList from "../views/AdminUserList.vue";

Vue.use(VueRouter);

const routes = [
	{
		path: "/",
		name: "main",
		component: Main,
		children: [
			// Category路由
			{ path: "/categories/create", component: CategoryEdit },
			{ path: "/categories/edit/:id", component: CategoryEdit, props: true },
			{ path: "/categories/list", component: CategoryList },
			// Item路由
			{ path: "/items/create", component: ItemEdit },
			{ path: "/items/edit/:id", component: ItemEdit, props: true },
			{ path: "/items/list", component: ItemList },
			// Hero路由
			{ path: "/heroes/create", component: HeroEdit },
			{ path: "/heroes/edit/:id", component: HeroEdit, props: true },
			{ path: "/heroes/list", component: HeroList },
			// Article路由
			{ path: "/articles/create", component: ArticleEdit },
			{ path: "/articles/edit/:id", component: ArticleEdit, props: true },
			{ path: "/articles/list", component: ArticleList },
			// AD路由
			{ path: "/ads/create", component: AdEdit },
			{ path: "/ads/edit/:id", component: AdEdit, props: true },
			{ path: "/ads/list", component: AdList },
			// AdminUser路由
			{ path: "/admin_users/create", component: AdminUserEdit },
			{ path: "/admin_users/edit/:id", component: AdminUserEdit, props: true },
			{ path: "/admin_users/list", component: AdminUserList }
		]
	}
];

const router = new VueRouter({
	routes
});

export default router;
