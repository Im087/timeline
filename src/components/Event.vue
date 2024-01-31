<template>
  <v-container>
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-card-item>
        <v-card-title>{{ TLItem.eventTitle }}</v-card-title>
        <v-card-subtitle>
          {{ TLItem.startTime }} 
          <span v-show="TLItem.isPeriod">~ {{ TLItem.endTime }}</span>
        </v-card-subtitle>
        <v-card-text>{{ TLItem.eventDescription }}</v-card-text>
        <v-layout class="d-flex flex-wrap">
          <v-btn
            v-for="item in TLItem.tagsInArray"
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
  </v-container>
</template>

<script lang="ts">
import { defineComponent, type PropType, toRefs, ref } from 'vue';
import { type TLItem } from '@/interfaces';
import store from '@/store';

import EventForm from './EventForm.vue';

export default defineComponent({
  name: 'Event',
  props: {
    TLItem: {
      type: Object as PropType<TLItem>,
      required: true,
      deep: true,
    }
  },
  components: {
    EventForm,
  },
  setup(props) {
    const TLItem = toRefs(props).TLItem;
    const isDialogShown = ref(false);

    const deleteTLItem = () => {
      store.dispatch('deleteTLItem', TLItem.value.id);
    };

    return {
      TLItem,
      isDialogShown,
      deleteTLItem
    }
  }
});
</script>