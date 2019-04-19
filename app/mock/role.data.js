const {routes} = require('./router.data');

const roles = [
	{
		key: 'admin',
		name: 'admin',
		description: 'Super Administrator. Have access to view all pages.',
		routes: routes
	},
	{
		key: 'editor',
		name: 'editor',
		description: 'Normal Editor. Can see all pages except permission page',
		routes: routes.filter(i => i.path !== '/permission')
	},
	{
		key: 'visitor',
		name: 'visitor',
		description: 'Just a visitor. Can only see the home page and the document page',
		routes: [{
			path: '',
			redirect: 'dashboard',
			children: [
				{
					path: 'dashboard',
					name: 'Dashboard',
					meta: { title: 'dashboard', icon: 'dashboard' }
				}
			]
		}]
	}
];

module.exports = {
	code: 20000,
	data: roles
};
