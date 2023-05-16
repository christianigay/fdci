const state = () => ({
	drawer: true,
	confirmDialog: false
})

const getters = {
	drawer: (state) => state.drawer,
	confirmDialog: (state) => state.confirmDialog,
}

const actions = {
	MODIFY_DRAWER ({ commit }) {
		commit('updateDrawer')
	},
	MODIFY_CONFIRM_DIALOG({ commit }, value) {
		commit('updateConfirmDialog', value)
	},
}

const mutations = {
	updateDrawer (state) {
		state.drawer = !state.drawer
	},
	updateConfirmDialog(state, value) {
		state.confirmDialog = value
	},
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations,
}
