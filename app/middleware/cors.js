module.exports = (options = {maxAge: 5}) => {
	let defaultOptions = {
		allowMethods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
		credentials:true
	}
	options = Object.assign({}, defaultOptions, options);
	return async function cors(ctx, next) {
		let origin;
		if (typeof options.origin === 'function') {
			origin = options.origin(ctx);
		} else {
			origin = options.origin || ctx.get('origin') || '*'
		}
		if (!origin) {
			return await next();
		}
		ctx.set('Access-Control-Allow-Origin', origin);
		if (ctx.method === 'OPTIONS') {
			if (!ctx.get('Access-Control-Request-Method')) {
				return await next();
			}

			if (options.maxAge) {
				ctx.set('Access-Control-Max-Age', String(options.maxAge));
			}

			if (options.credentials === true) {
				ctx.set('Access-Control-Allow-Credentials', 'true');
			}

			if (options.allowMethods) {
				ctx.set('Access-Control-Allow-Methods', options.allowMethods.join(','))
			}

			if (options.allowHeaders) {
				ctx.set('Access-Control-Allow-Headers', options.allowHeaders.join(','))
			} else {
				ctx.set('Access-Control-Allow-Headers', ctx.get('Access-Control-Request-Headers'))
			}
			ctx.status = 204;
		} else {
			if (options.credentials === true) {
				if (origin === '*') {
					ctx.remove('Access-Control-Allow-Credentials')
				} else {
					ctx.set('Access-Control-Allow-Credentials', 'true')
				}
			}
			if (options.exposeHeaders) {
				ctx.set('Access-Control-Expose-Headers', options.exposeHeaders.join(','))
			}
			try {
				await next()
			} catch (e) {
				throw e;
			}
		}
	};
};
