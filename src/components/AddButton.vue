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

<script lang="ts">
import { defineComponent, ref } from 'vue';

import EventForm from './EventForm.vue';

export default defineComponent({
  name: 'AddButton',
  components: {
    EventForm,
  },
  setup() {
    const isDialogShown = ref(false);
    const TLItem = ref({
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

    return {
      isDialogShown,
      TLItem,
    }
  }
});
</script>