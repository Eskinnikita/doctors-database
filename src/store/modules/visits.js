import apiService from "../../services/apiService"

const route = 'visits'

export const state = {
    visits: []
}
export const mutations = {
    SET_VISITS(state, visits) {
        state.visits = visits
    }
}
export const actions = {
    async addVisit({commit}, visit) {
        try {
            await apiService.post(route, visit)
            commit('SET_TOAST', {message: 'Вы успешно записались!', type: 'success'})
        }
        catch(e) {
            commit('SET_TOAST', {message: e.message, type: 'error'})
        }
    },
    async getUserVisits({commit}, userData) {
            try {
                const data = await apiService.post(route + '/all-visits', userData)
                commit('SET_VISITS', data.data)
            }
            catch(e) {
                commit('SET_TOAST', {message: e.message, type: 'error'})
            }
    }
}

export const getters = {}