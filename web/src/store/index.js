import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: null,
        token: null,
        transactions: [],
        banks: []
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        setToken(state, token) {
            state.token = token;
        },
        setTransactions(state, transactions) {
            state.transactions = transactions;
        },
        setBanks(state, banks) {
            state.banks = banks;
        }
    },
    actions: {
        async login({ commit }, credentials) {
            const response = await axios.post('/api/login', credentials);
            commit('setUser', response.data.user);
            commit('setToken', response.data.token);
        },
        async fetchUser({ commit }) {
            const response = await axios.get('/api/current-user');
            commit('setUser', response.data);
        },
        async fetchTransactions({ commit }) {
            const response = await axios.get('/api/mutasi');
            commit('setTransactions', response.data);
        },
        async fetchBanks({ commit }) {
            const response = await axios.get('/api/transfer/list-bank');
            commit('setBanks', response.data);
        },
        async transfer({ commit }, transferData) {
            const response = await axios.post('/api/transfer', transferData);
            return response.data;
        }
    }
});
