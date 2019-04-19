const fs = require('fs-extra');
const path = require('path');
/*
* 生成资源到 output 目录之后,拷贝index.html 到 egg服务的index.ejs
* */
function CopyResource() {
}

CopyResource.prototype.apply = function (compiler) {
	if (compiler.hooks) {
		compiler.hooks.afterEmit.tap('CopyResource', () => {
			fs.copySync(path.resolve(__dirname, './../app/public/index.html'), path.resolve(__dirname, './../app/view/index.ejs'));
		});
	}
};
module.exports = CopyResource;
