import Vue from 'vue'
import Vuex from 'vuex'
import authStore from './auth';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        sideBarOpen: false,
        categories: [],
    },
    getters: {
        sideBarOpen: state => {
            return state.sideBarOpen;
        },
    },
    mutations: {
        toggleSidebar (state) {
            state.sideBarOpen = !state.sideBarOpen
        },
        setCategories(state, categories) {
            Vue.set(state, 'categories', categories);
        }
    },
    actions: {
        closeAuthModal({commit}) {
            commit('setAuthModal', false);
            document.body.classList.remove("modal-open");
        },
        openAuthModal({commit}) {
            commit('setAuthModal', true);
            document.body.classList.add("modal-open");
        },
        toggleSidebar({commit}) {
            commit('toggleSidebar')
        },
    },
    modules: {
        auth: authStore
    }
})
