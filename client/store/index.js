import Vue from 'vue';
import Vuex from 'vuex';
import getters from './getters';

Vue.use(Vuex);


const actionContext = require.context('./actions', false, /.*\.js/);
const actions = actionContext
	.keys()
	.reduce((prev, cur) => ({ ...prev, ...actionContext(cur).default }), {});

const mutationContext = require.context('./mutations', false, /.*\.js/);
const mutations = mutationContext.keys().reduce((prev, cur) => ({ ...prev, ...mutationContext(cur).default }), {});

const stateContext = require.context('./states', false, /.*\.js/);
const state = stateContext.keys()
	.reduce((prev, cur) => {
		const key = cur.match(/(\w+)\.js/)[1];
		prev[key] = stateContext(cur).default;
		return prev;
	}, {});

const store = new Vuex.Store({
	actions,
	getters,
	mutations,
	state
});

export default store;
