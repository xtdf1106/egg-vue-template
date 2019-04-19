/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
	/**
	 * built-in config
	 * @type {Egg.EggAppConfig}
	 **/
	const config = {
		view: {
			mapping: {
				'.ejs': 'ejs'
			}
		},
		static: {
			prefix: '/',
			dir: path.join(appInfo.baseDir, 'app/public'),
			dynamic: true, // 如果当前访问的静态资源没有缓存，则缓存静态文件，和`preload`配合使用；
			preload: true,
			maxAge: 31536000, // in prod env, 0 in other envs
			buffer: true, // in prod env, false in other envs
			gzip: true
		}
	};

	// use for cookie sign key, should change to your own and keep security
	config.keys = appInfo.name + '_1555398916104_6016';

	// add your middleware config here
	config.middleware = ['gzip','historyFallback'];

	config.gzip = {
		threshold: 1,
		enable: true
	};

	config.security = {
		csrf: false
	};
	config.proxy = true;
	// add your user config here
	const userConfig = {
		myAppName: 'egg local',
	};

	return {
		...config,
		...userConfig,
	};
};
