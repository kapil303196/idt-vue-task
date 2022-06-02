import mutations from './mutations';
import getters from './getters';
// eslint-disable-next-line
import actions from './actions';


export default {
  namespaced: true,
  state: {
    states: [],
    copyOfstates: [],
    error: [],
    selectedState: {},
    selectedStateDetail: [],
    highlightedStates: [],
    loading: false
  },
  getters,
  mutations,
  actions,
};
