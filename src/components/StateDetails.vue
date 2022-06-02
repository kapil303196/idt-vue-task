<template>
  <div class="d-flex fixTableHead tw-25 m-2">
    <table
      v-if="
        selectedStateName &&
        selectedStatePopulation &&
        selectedStateDetail.length > 0
      "
      class="table table-striped"
    >
      <thead>
        <tr>
          <th colspan="2">
            {{ selectedStateName }} has
            {{ selectedStateDetail.length }} Counties
          </th>
        </tr>
        <tr>
          <th colspan="2">
            Population {{ selectedStatePopulation }} is
            {{ selectedState.isSumAccurate ? "Accurate" : "Not accurate" }}
          </th>
        </tr>
        <tr>
          <th scope="col">Counties</th>
          <th scope="col">Population</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(state, i) in selectedStateDetail" :key="i">
          <td scope="row">{{ state.county }}</td>
          <td scope="row">{{ state.population }}</td>
        </tr>
      </tbody>
    </table>
    <div v-else>
        Select a state to display details...
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from "vuex";
import StatesList from "../components/StatesList.vue";
export default {
  name: "StateDetails",
  computed: {
    ...mapGetters({
      states: "states/states",
      copyOfstates: "states/copyOfstates",
      highlightedStates: "states/highlightedStates",
      selectedState: "states/selectedState",
      selectedStateDetail: "states/selectedStateDetail",
    }),
    selectedStateName() {
      return this.selectedState.state;
    },
    selectedStatePopulation() {
      return this.selectedState.population;
    },
  },
  mounted() {},
  methods: {
  },
  components: {
    StatesList,
  },
};
</script>