/* eslint-disable no-param-reassign */

import * as types from './mutation-types';

export default {
  [types.SET_STATES](state, states) {
    state.states = states;
  },
  [types.SET_STATES_COPY](state, states) {
    state.copyOfstates = states;
  },
  [types.SET_HIGHLIGHT](state, data) {
    const index = state.highlightedStates.indexOf(data);
    if (index > -1) {
      state.highlightedStates.splice(index, 1); // 2nd parameter means remove one item only
      return;
    }
    state.highlightedStates.push(data);
  },
  [types.SELECT_STATE](state, selectedState) {
    state.selectedState = selectedState;
  },
  [types.SELECTED_STATE_DATA](state, selectedStateDetail) {
    state.selectedStateDetail = selectedStateDetail;
  },
  [types.SET_ERROR](state, error) {
    state.error.push(error);
  },
  [types.SET_LOADING](state, data) {
    state.loading = data;
  },
};
