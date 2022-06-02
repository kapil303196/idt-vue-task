<template>
  <div class="Home">
    <div class="d-flex main-layout">
      <div class="d-flex justify-content-end">
        <StateSearch />
      </div>
      <div class="d-flex">
        <StatesList :states="states" />
        <StatesList :states="states" />
        <StateDetails />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { mapGetters } from 'vuex';
import StatesList from '../components/StatesList.vue'
import StateDetails from '../components/StateDetails.vue'
import StateSearch from '../components/StateSearch.vue'
export default {
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapGetters({
      states: "states/states",
      selectedState: "states/selectedState",
      error: "states/error",
    }),
    selectedStateName() {
      return this.selectedState.state;
    },
    selectedStatePopulation() {
      return this.selectedState.population;
    },
  },
  mounted() {
    this.$store.dispatch("states/getAllStates");
  },
  methods: {
  },
  components: {
    StatesList,
    StateDetails,
    StateSearch
  }
};
</script>
