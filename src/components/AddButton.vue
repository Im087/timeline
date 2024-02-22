<template>
  <v-btn>
    Add
    <EventForm
      v-model:isDialogShown="isDialogShown"
      :TLItem="TLItem"
    >
    </EventForm>
  </v-btn>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { TLItem } from '@/interfaces';

import EventForm from './EventForm.vue';
import { reactive } from 'vue';

const isDialogShown = ref(false);
const TLItem: TLItem = reactive({
  id: '',
  eventTitle: '',
  eventDescription: '',
  isPeriod: false,
  startYear: '',
  startMonth: '',
  startDay: '',
  startTime: '',
  endYear: '',
  endMonth: '',
  endDay: '',
  endTime: '',
  tagsInString: '',
  tagsInArray: [],
});
</script>