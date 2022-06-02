import * as types from "./mutation-types";
// eslint-disable-next-line
import StatesAPI from "../../api/states";

const getAllStates = async ({ commit, state, dispatch }) => {
  try {
    commit(types.SET_LOADING, true);
    console.log("Getting all states", state);
    let response = await StatesAPI.getAllStates();
    response = response.data.data;
    console.log(response);
    dispatch('selectState', response[0]);
    commit(types.SET_STATES, response);
    commit(types.SET_STATES_COPY, response);
    commit(types.SET_LOADING, false);
  } catch (error) {
    commit(types.SET_ERROR, error);
    commit(types.SET_STATES, []);
    commit(types.SET_LOADING, false);
  }
};

const highlightStates = ({ commit }, data) => {
  commit(types.SET_HIGHLIGHT, data);
};

const showLoader = ({ commit }, data) => {
  commit(types.SET_LOADING, data);
};

const selectState = async ({ commit, state }, data) => {
  try {
    console.log("Getting state detail", data);
    console.log("state", state);
    let response = await StatesAPI.getStateDetails(data);
    response = response.data.data;
    console.log(response.map((item) => item.population).reduce((prev, next) => prev + next));
    console.log(data.population)
    data = {
      ...data,
      isSumAccurate:
        response.map((item) => item.population).reduce((prev, next) => prev + next) === data.population,
    };
    console.log("data", data);
    commit(types.SELECT_STATE, data);
    commit(types.SELECTED_STATE_DATA, response);
  } catch (error) {
    commit(types.SET_ERROR, error);
    commit(types.SELECT_STATE, {});
    commit(types.SELECTED_STATE_DATA, []);
  }
};

const filterResults = async ({ commit, state, dispatch }, text) => {
  try {
    let states = [];
    if (text.trim()) {
      let copyOfData = [...state.copyOfstates];
      states = copyOfData.filter((data) => {
        return data.state.toLowerCase().includes(text.toLowerCase());
      });
      if (states.length === 1) {
        dispatch('selectState', states[0])
      }
    } else {
      console.log("inside else",state.copyOfstates);
      states = state.copyOfstates;
    }
    commit(types.SET_STATES, states);
  } catch (error) {
    commit(types.SET_ERROR, error);
    commit(types.SET_STATES, []);
  }
};

export default {
  getAllStates,
  highlightStates,
  selectState,
  filterResults,
  showLoader
};
