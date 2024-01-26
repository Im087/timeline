<template>
  <v-btn>
    Add
    <v-dialog
      v-model="isDialogShown"
      activator="parent"
      width="auto"
    >
      <v-card>
        <v-card-title>
          <span class="text-h5">Event Details</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Title*"
                  required
                  v-model="TLItem.eventTitle"
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="Description"
                  v-model="TLItem.eventDescription"
                ></v-textarea>
              </v-col>
              <v-col cols="12" md="6" class="flex-column">
                <span class="text-body-1" v-show="isPeriod">From</span>
                <v-row>
                  <v-col
                    cols="12"
                    sm="4"
                  >
                    <v-text-field
                      label="Year*"
                      required
                      v-model="startYear"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="4"
                  >
                    <v-text-field
                      label="Month"
                      v-model="startMonth"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="4"
                  >
                    <v-text-field
                      label="Day"
                      v-model="startDay"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12" md="6" class="flex-column" v-show="isPeriod">
                <span class="text-body-1" v-show="isPeriod">To</span>
                <v-row>
                  <v-col
                    cols="12"
                    sm="4"
                  >
                    <v-text-field
                      label="Year*"
                      required
                      v-model="endYear"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="4"
                  >
                    <v-text-field
                      label="Month"
                      v-model="endMonth"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="4"
                  >
                    <v-text-field
                      label="Day"
                      v-model="endDay"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-col>
              <v-col cols="12">
                <v-checkbox label="Period" v-model="isPeriod"></v-checkbox>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Tags"
                  hint="Separate tags with comma"
                  v-model="tagsInString"
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="isDialogShown = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="isDialogShown = false; addEvent()"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, computed } from 'vue';

import type { TLItem } from '@/interfaces';
import store from '@/store';

export default defineComponent({
  name: 'AddButton',
  setup() {
    const isDialogShown = ref(false);
    const isPeriod = ref(false);
    const startYear = ref('');
    const startMonth = ref('01');
    const startDay = ref('01');
    const startTime = computed(() => {
      return `${startYear.value}-${startMonth.value}-${startDay.value}`;
    });
    const endYear = ref('');
    const endMonth = ref('01');
    const endDay = ref('01');
    const endTime = computed(() => {
      return `${endYear.value}-${endMonth.value}-${endDay.value}`;
    });
    const tagsInString = ref('');
    const tagsInArray = computed(() => {
      // todo: last letter missing
      return tagsInString.value.split(",");
    });
    const TLItem: TLItem = reactive({
      id: '',
      eventTitle: '',
      eventDescription: '',
      isPeriod,
      startYear,
      startMonth,
      startDay,
      startTime,
      endYear,
      endMonth,
      endDay,
      endTime,
      tagsInString,
      tagsInArray,
    });
    const addEvent = () => {
      TLItem.id = new Date().toISOString();
      let item = Object.assign({}, TLItem);
      store.dispatch('addTLItem', item);
    }

    return {
      isDialogShown,
      isPeriod,
      startYear,
      startMonth,
      startDay,
      endYear,
      endMonth,
      endDay,
      tagsInString,
      TLItem,
      addEvent,
    }
  }
});
</script>