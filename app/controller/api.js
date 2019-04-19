'use strict';

const routerData = require('./../mock/router.data');
const roleData = require('./../mock/role.data');
const transactionData = require('./../mock/transaction.data');
const articleData = require('./../mock/article.data');

const Controller = require('egg').Controller;

class ApiController extends Controller {
	async login() {
		let { ctx } = this;
		ctx.body = {
			data: {
				token: 'admin-token'
			},
			code: 20000
		};
	}

	async info() {
		let { ctx } = this;
		ctx.body = {
			data: {
				roles: ['admin'],
				introduction: 'I am a super administrator',
				avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
				name: 'Super Admin'
			},
			code: 20000
		};
	}

	async routes() {
		let { ctx } = this;
		ctx.body = routerData;
	}

	async roles() {
		let { ctx } = this;
		ctx.body = roleData;
	}

	async transaction() {
		let { ctx } = this;
		ctx.body = transactionData;
	}
	async article() {
		let { ctx } = this;
		ctx.body = articleData;
	}
}

module.exports = ApiController;
