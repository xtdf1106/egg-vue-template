module.exports = () => {
	return async function historyFallback(ctx, next) {
		await next();
		if (ctx.status === 404 && !ctx.body) {
			if (ctx.acceptJSON) {
				// ctx.body = { error: 'Not Found', status: 404 };
				// return;
			} else {
				await ctx.render('index.ejs');
			}
		}
	};
};
