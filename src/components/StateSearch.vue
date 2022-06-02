<template>
  <div class="d-flex mt-1">
    <form>
      <div class="form-group">
        <input
          type="text"
          v-model="search"
          class="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
          placeholder="Search Text"
        />
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "StateSearch",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    filterResults(text) {
      if (text.trim()) {
        this.states = this.copyOfstates.filter((state) => {
          return state.state.toLowerCase().includes(text.toLowerCase());
        });
        if (this.states.length === 1) {
          this.getStateDetail(this.states[0]);
        }
      } else {
        this.states = this.copyOfstates;
      }
    },
  },
  watch: {
    search: {
      immediate: true,
      handler(val) {
        this.$store.dispatch("states/filterResults", val.trim());
      },
    },
  },
};
</script>
