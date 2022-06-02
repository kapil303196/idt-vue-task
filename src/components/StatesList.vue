<template>
  <div class="d-flex fixTableHead m-2">
    <table class="table table-striped" v-if="states.length > 0">
      <thead>
        <tr>
          <th scope="col">State</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(state, i) in states"
          :key="i"
          :class="{ highlight: isInHighlight(state.state) }"
        >
          <td
            class="clickable"
            @dblclick="highLight(state.state)"
            @click="getStateDetail(state)"
          >
            {{ state.state }}
          </td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      There are no states
    </div>
  </div>
   
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "StatesList",
  computed: {
    ...mapGetters({
      highlightedStates: "states/highlightedStates",
      selectedState: "states/selectedState",
    }),
  },
  props: {
    states: {
      type: Array,
      default: () => ([])
    }
  },
  methods: {
    async getStateDetail(state) {
      this.$store.dispatch("states/selectState", state);
    },
    async highLight(state) {
        this.$store.dispatch("states/highlightStates", state);
    },
    isInHighlight(state) {
      return this.highlightedStates.includes(state);
    },
  },
};
</script>