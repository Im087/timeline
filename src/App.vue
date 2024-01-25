<template>
  <v-container class="app d-flex">
    <ToolBar></ToolBar>
  </v-container>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ToolBar from './components/ToolBar.vue';

export default defineComponent({
  name: 'App',
  components: {
    ToolBar,
  },
  setup() {

  }
});
</script>

<style lang="scss" scoped>
.app {
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
