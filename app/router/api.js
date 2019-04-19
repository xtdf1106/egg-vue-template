module.exports = (app) => {
	app.post('/api/user/login',app.controller.api.login);
	app.get('/api/user/info',app.controller.api.info);
	app.get('/api/routes',app.controller.api.routes);
	app.get('/api/roles',app.controller.api.roles);
	app.get('/api/transaction/list',app.controller.api.transaction);
	app.get('/api/article/list',app.controller.api.article);
};
