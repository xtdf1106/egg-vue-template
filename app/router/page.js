module.exports = app => {
	app.router.get('/', app.controller.page.index);
};
