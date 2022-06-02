<template>
  <div id="app">
    <div class="container d-flex justify-content-center align-items-center">
      <Loading v-if="loading"/>
      <router-view />
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import Loading from './components/Loading.vue'

export default {
  computed: {
    ...mapGetters({
      loading: "states/loading",
    }),
  },
  components: {
    Loading
  }
};
</script>
