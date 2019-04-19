export default {
	toggleSideBar({ commit }) {
		commit('TOGGLE_SIDEBAR')
	},
	closeSideBar({ commit }, { withoutAnimation }) {
		commit('CLOSE_SIDEBAR', withoutAnimation)
	},
	toggleDevice({ commit }, device) {
		commit('TOGGLE_DEVICE', device)
	},
	setLanguage({ commit }, language) {
		commit('SET_LANGUAGE', language)
	},
	setSize({ commit }, size) {
		commit('SET_SIZE', size)
	}
}
