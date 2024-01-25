<template>
  <v-toolbar extended class="toolbar d-flex">
    <AddButton></AddButton>
  </v-toolbar>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AddButton from './AddButton.vue';

export default defineComponent({
  name: 'ToolBar',
  components: {
    AddButton,
  },
  setup() {

  }
});
</script>

<style lang="scss" scoped>
.toolbar {
  background-color: lightblue;
  width: 100%;
}
</style>