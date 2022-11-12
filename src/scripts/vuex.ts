import { createStore } from "vuex"
import VuexPersistence from "vuex-persist"

export interface State {
	isDark: boolean | null
}

const vuexLocal = new VuexPersistence<State>({
	storage: window.localStorage,
})

const store = createStore<State>({
	state: {
		isDark: null 
	},
	getters: {
		isDark : (state) => {
			return state.isDark
		},
	},
	actions: {
		isDark: (ctx, isDark) => {
			ctx.commit("changeTheme", isDark)
		},
	},
	mutations: {
		async changeTheme(state, isDark) {
			state.isDark = isDark
		},
	},
	plugins: [vuexLocal.plugin],
})

export default store

