<template>
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
              <span class="text-body-1" v-show="TLItem.isPeriod">From</span>
              <v-row>
                <v-col
                  cols="12"
                  sm="4"
                >
                  <v-text-field
                    label="Year*"
                    required
                    v-model="TLItem.startYear"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                >
                  <v-text-field
                    label="Month"
                    v-model="TLItem.startMonth"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                >
                  <v-text-field
                    label="Day"
                    v-model="TLItem.startDay"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12" md="6" class="flex-column" v-show="TLItem.isPeriod">
              <span class="text-body-1">To</span>
              <v-row>
                <v-col
                  cols="12"
                  sm="4"
                >
                  <v-text-field
                    label="Year*"
                    required
                    v-model="TLItem.endYear"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                >
                  <v-text-field
                    label="Month"
                    v-model="TLItem.endMonth"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                >
                  <v-text-field
                    label="Day"
                    v-model="TLItem.endDay"
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-col>
            <v-col cols="12">
              <v-checkbox label="Period" v-model="TLItem.isPeriod"></v-checkbox>
            </v-col>
            <v-col cols="12">
              <v-text-field
                label="Tags"
                hint="Separate tags with comma"
                v-model="TLItem.tagsInString"
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
          variant="flat"
          @click="isDialogShown = false"
        >
          Close
        </v-btn>
        <v-btn
          color="green-darken-1"
          variant="flat"
          @click="isDialogShown = false; saveTLItem()"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { type PropType } from 'vue';
import { type TLItem } from '@/interfaces';
import store from '@/store';

const isDialogShown = defineModel('isDialogShown');
const props = defineProps({
  TLItem: {
    type: Object as PropType<TLItem>,
    required: true,
    deep: true
  }
});

const saveTLItem = () => {
  props.TLItem.startMonth = props.TLItem.startMonth ? props.TLItem.startMonth : '01';
  props.TLItem.startDay = props.TLItem.startDay ? props.TLItem.startDay : '01';
  props.TLItem.startTime = `${props.TLItem.startYear}-${props.TLItem.startMonth}-${props.TLItem.startDay}`;
  props.TLItem.endTime = `${props.TLItem.endYear}-${props.TLItem.endMonth}-${props.TLItem.endDay}`;
  props.TLItem.tagsInArray = props.TLItem.tagsInString.split(',');
  props.TLItem.id = new Date().toISOString();
  let item = Object.assign({}, props.TLItem);
  store.dispatch('saveTLItem', item);
};
</script>