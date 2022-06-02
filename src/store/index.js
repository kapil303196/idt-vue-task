/* eslint-disable */
import Vue from 'vue';
import Vuex from 'vuex';
import states from './states';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        states
    }
});