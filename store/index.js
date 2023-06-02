import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		user: {name: 'kkk'}
	},
	mutations: {
		setUser(state, newUser) {
			state.user = newUser
		}
	},
	actions: {
		getUser({ commit }) {
			return new Promise(async (resolve, reject) => {
				// let res = await uni.$u.http.post('api/userLc/edit')
				commit('setUser', {name: 'k'})
				resolve()
			})
		}
	},
	getters: {
		
	}
})