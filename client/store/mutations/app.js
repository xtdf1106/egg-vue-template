import Cookies from 'js-cookie';

export default  {
	TOGGLE_SIDEBAR: state => {
		state.app.sidebar.opened = !state.app.sidebar.opened;
		state.app.sidebar.withoutAnimation = false;
		if (state.app.sidebar.opened) {
			Cookies.set('sidebarStatus', 1);
		} else {
			Cookies.set('sidebarStatus', 0);
		}
	},
	CLOSE_SIDEBAR: (state, withoutAnimation) => {
		Cookies.set('sidebarStatus', 0);
		state.app.sidebar.opened = false;
		state.app.sidebar.withoutAnimation = withoutAnimation;
	},
	TOGGLE_DEVICE: (state, device) => {
		state.app.device = device;
	},
	SET_LANGUAGE: (state, language) => {
		state.app.language = language;
		Cookies.set('language', language);
	},
	SET_SIZE: (state, size) => {
		state.app.size = size;
		Cookies.set('size', size);
	}
};
