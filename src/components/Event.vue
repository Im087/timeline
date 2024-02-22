<template>
  <v-card
    class="mx-auto"
    max-width="344"
  >
    <v-card-item>
      <v-card-title>{{ props.TLItem.eventTitle }}</v-card-title>
      <v-card-subtitle>
        {{ props.TLItem.startTime }} 
        <span v-show="props.TLItem.isPeriod">~ {{ props.TLItem.endTime }}</span>
      </v-card-subtitle>
      <v-card-text>{{ props.TLItem.eventDescription }}</v-card-text>
      <v-layout class="d-flex flex-wrap">
        <v-btn
          v-for="item in props.TLItem.tagsInArray"
          :key="item"
          variant="tonal"
          rounded="xl"
          prepend-icon="mdi-pound"
          class="text-none mr-2 mb-2"
        >
          {{ item }}
        </v-btn>
      </v-layout>
    </v-card-item>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn
        variant="flat"
        color="yellow-darken-1"
      >
        Edit
        <EventForm
          v-model:isDialogShown="isDialogShown"
          :TLItem="TLItem"
        >
        </EventForm>
      </v-btn>
      <v-btn
        variant="flat"
        color="red-darken-1"
        @click="deleteTLItem"
      >
        Delete
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script setup lang="ts">
import { type PropType, ref } from 'vue';
import { type TLItem } from '@/interfaces';
import store from '@/store';
import { useVueFlow } from '@vue-flow/core'

import EventForm from './EventForm.vue';

const props = defineProps({
  TLItem: {
    type: Object as PropType<TLItem>,
    required: true,
    deep: true,
  }
});

const isDialogShown = ref(false);

const { removeNodes } = useVueFlow();

const deleteTLItem = () => {
  store.dispatch('deleteTLItem', props.TLItem.id);
  removeNodes(props.TLItem.id);
};
</script>