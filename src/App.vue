<template>
  <div class="app d-flex flex-column">
    <ToolBar></ToolBar>
    <Event></Event>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ToolBar from './components/ToolBar.vue';
import Event from './components/Event.vue';

export default defineComponent({
  name: 'App',
  components: {
    ToolBar,
    Event
  },
  setup() {

  }
});
</script>

<style lang="scss" scoped>
.app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
</style>
