<template>
  <v-container>
    <v-card
      class="mx-auto"
      max-width="344"
    >
      <v-card-item>
        <v-card-title>{{ TLItem.eventTitle }}</v-card-title>
        <v-card-subtitle>{{ TLItem.startTime }} ~ {{ TLItem.endTime }}</v-card-subtitle>
        <v-card-text>{{ TLItem.eventDescription }}</v-card-text>
        <v-layout class="d-flex flex-wrap">
          <v-btn
            v-for="item in TLItem.tagsInArray"
            :key="item"
            variant="tonal"
            rounded="xl"
            class="text-none mr-2 mb-2"
          >
            <v-icon icon="mdi-pound"></v-icon>{{ item }}
          </v-btn>
        </v-layout>
      </v-card-item>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="editTLItem">
          Edit
          <EventForm
            v-model:isDialogShown="isDialogShown"
            :TLItem="TLItem"
          >
          </EventForm>
        </v-btn>
        <v-btn @click="deleteTLItem">
          Delete
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { defineComponent, type PropType, toRefs, ref, computed } from 'vue';
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
    const editTLItem = () => {
      console.log('editTLItem');
    };
    const deleteTLItem = () => {
      store.dispatch('deleteTLItem', TLItem.value.id);
    };

    return {
      TLItem,
      isDialogShown,
      editTLItem,
      deleteTLItem
    }
  }
});
</script>