import axios from 'axios';
import { MessageBox, Message } from 'element-ui';
import store from '@/store';
import { getToken } from '@/utils/auth';

const service = axios.create({
	baseURL: process.env.VUE_APP_BASE_API,
	withCredentials: true,
	timeout: 5000
});

// service.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';

service.interceptors.request.use(
	config => {
		if (store.getters.token) {
			config.headers['X-Token'] = getToken();
		}
		return config;
	},
	error => {
		return Promise.reject(error);
	}
);

/**
 * 下面的注释为通过在response里，自定义code来标示请求状态
 * 当code返回如下情况则说明权限有问题，登出并返回到登录页
 * 如想通过 XMLHttpRequest 来状态码标识 逻辑可写在下面error中
 * 以下代码均为样例，请结合自生需求加以修改，若不需要，则可删除
 */
service.interceptors.response.use(
	response => {
		const res = response.data;
		if (res.code !== 20000) {
			return Promise.reject(res.message || 'error');
		} else {
			return res;
		}
	},
	error => {
		console.dir(error)
		if (error.response) {
			const responseCode = error.response.status;
			console.dir(error);
			switch (responseCode) {
				case 401:
					break;
				case 403:
					break;
				case 404:
					Message({
						message: '网络请求不存在',
						type: 'error',
						duration: 3 * 1000
					});
					break;
				default:
					Message({
						message: error.response.data,
						type: 'error'
					});
			}
			return Promise.reject(error);
		} else {
			if (error.message.includes('timeout')) {
				Message.error('请求超时，请检查网络是否连接正常');
			} else {
				Message.error('请求失败，请检查网络是否已连接');
			}
		}
	}
);

export default service;
