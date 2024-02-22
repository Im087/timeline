<template>
  <v-layout class="layout d-flex flex-column">
    <ToolBar></ToolBar>
    <!-- <Event
      v-for="item in TLItems"
      :key="item.id"
      :TLItem="item"
    >
    </Event> -->
    <VueFlow
      v-model="graphElements"
      class="vue-flow"
    >
      <template #node-event="eventProps">
        <Event :TLItem="eventProps.data"></Event>
      </template>
      <!-- <template #edge-special="specialEdgeProps">
        <SpecialEdge v-bind="specialEdgeProps" />
      </template> -->
      <MiniMap />
    </VueFlow>
  </v-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import ToolBar from './components/ToolBar.vue';
import Event from './components/Event.vue';

import { VueFlow, useVueFlow, type Elements } from '@vue-flow/core';
import { MiniMap } from '@vue-flow/minimap';

useVueFlow();

const graphElements = ref<Elements>([]);
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

.vue-flow {
  height: 100%;
  width: 100%;

  &:deep(.vue-flow__viewport) {
    height: 100%;
    width: 100%;

    .vue-flow__pane {
      height: 100%;
      width: 100%;

      .vue-flow__transformationpane {
        height: 100%;
        width: 100%;

        .vue-flow__nodes {
          height: 100%;
          width: 100%;

          .vue-flow__node {
            max-width: 344px;
          }
        }
      }
    }
  }
}

/* import the necessary styles for Vue Flow to work */
@import '@vue-flow/core/dist/style.css';
/* import the default theme, this is optional but generally recommended */
@import '@vue-flow/core/dist/theme-default.css';
/* import the default minimap styles */
@import '@vue-flow/minimap/dist/style.css';
</style>
