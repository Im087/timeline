<template>
  <div class="app d-flex flex-column">
    <ToolBar></ToolBar>
    <Event
      v-for="item in TLItems"
      :key="item.id"
      :TLItem="item"
    >
    {{ TLItems[0] }}
    </Event>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, type ComputedRef } from 'vue';
import ToolBar from './components/ToolBar.vue';
import Event from './components/Event.vue';
import store from '@/store';

import type { TLItem } from '@/interfaces';

export default defineComponent({
  name: 'App',
  components: {
    ToolBar,
    Event
  },
  setup() {
    const TLItems :ComputedRef<TLItem[]> = computed(() => {
      return store.getters.getTLItems;
    });

    return {
      TLItems,
    }
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
