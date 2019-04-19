'use strict';

const Controller = require('egg').Controller;

class PageController extends Controller {
	async index() {
		const { ctx, app, service } = this;
		await ctx.render('index.ejs');
	}
}

module.exports = PageController;
