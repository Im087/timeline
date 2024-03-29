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
                :error-messages="v$.eventTitle.$errors.map(error => error.$message)"
                @input="v$.eventTitle.$touch"
                @blur="v$.eventTitle.$touch"
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
                    :error-messages="v$.startYear.$errors.map(error => error.$message)"
                    @input="v$.startYear.$touch"
                    @blur="v$.startYear.$touch"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                >
                  <v-text-field
                    label="Month"
                    v-model="TLItem.startMonth"
                    :error-messages="v$.startMonth.$errors.map(error => error.$message)"
                    @input="v$.startMonth.$touch"
                    @blur="v$.startMonth.$touch"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                >
                  <v-text-field
                    label="Day"
                    v-model="TLItem.startDay"
                    :error-messages="v$.startDay.$errors.map(error => error.$message)"
                    @input="v$.startDay.$touch"
                    @blur="v$.startDay.$touch"
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
                    :error-messages="v$.endYear.$errors.map(error => error.$message)"
                    @input="v$.endYear.$touch"
                    @blur="v$.endYear.$touch"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                >
                  <v-text-field
                    label="Month"
                    v-model="TLItem.endMonth"
                    :error-messages="v$.endMonth.$errors.map(error => error.$message)"
                    @input="v$.endMonth.$touch"
                    @blur="v$.endMonth.$touch"
                  ></v-text-field>
                </v-col>
                <v-col
                  cols="12"
                  sm="4"
                >
                  <v-text-field
                    label="Day"
                    v-model="TLItem.endDay"
                    :error-messages="v$.endDay.$errors.map(error => error.$message)"
                    @input="v$.endDay.$touch"
                    @blur="v$.endDay.$touch"
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
          :disabled="v$.$invalid"
          @click="isDialogShown = false; saveTLItem()"
        >
          Save
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup lang="ts">
import { type PropType, type ModelRef, computed, reactive, watch } from 'vue';
import { type TLItem } from '@/interfaces';
import store from '@/store';
import { emptyItem } from '@/consts';
import { useVuelidate } from '@vuelidate/core';
import { required, numeric, maxValue, requiredIf } from '@vuelidate/validators';
import { useVueFlow } from '@vue-flow/core';

const props = defineProps({
  TLItem: {
    type: Object as PropType<TLItem>,
    required: true,
    deep: true
  }
});
let TLItem: TLItem = reactive(Object.assign({}, props.TLItem));
const isDialogShown: ModelRef<boolean | undefined> = defineModel('isDialogShown');
watch(isDialogShown, (newValue) => {
  if(newValue) {
    for (let key in TLItem) {
      TLItem[key] = props.TLItem[key];
    }
  } else {
    for (let key in TLItem) {
      TLItem[key] = emptyItem[key];
    }
    v$.value.$reset();
  }
});

const rules = computed(() => {
  return {
    eventTitle: {
      required
    },
    startYear: {
      required,
      numeric
    },
    startMonth: {
      numeric,
      maxValue: maxValue(12)
    },
    startDay: {
      numeric,
      maxValue: maxValue(31)
    },
    endYear: {
      requiredIfIsPeriod: requiredIf(TLItem.isPeriod),
      numeric
    },
    endMonth: {
      numeric,
      maxValue: maxValue(12)
    },
    endDay: {
      numeric,
      maxValue: maxValue(31)
    },
  }
});
const v$ = useVuelidate(rules, TLItem);

const { addNodes, findNode } = useVueFlow();
const generateNode = (data: TLItem) => {
  return {
    id: data.id,
    type: 'event',
    position: { x: Math.random() * 500, y: Math.random() * 500 },
    data: data
  }
};
const addNode = (data: TLItem) => {
  addNodes(generateNode(data));
};
const updateNode = (id: string) => {
  const targetNode = findNode(id);
  for (const key in targetNode?.data) {
    targetNode.data[key] = TLItem[key];
  }
};

const generateStartTime = () => {
  TLItem.startMonth = TLItem.startMonth ? TLItem.startMonth : '01';
  TLItem.startDay = TLItem.startDay ? TLItem.startDay : '01';
  TLItem.startTime = `${TLItem.startYear}-${TLItem.startMonth}-${TLItem.startDay}`;
};
const generateEndTime = () => {
  TLItem.endMonth = TLItem.isPeriod ? (TLItem.endMonth ? TLItem.endMonth : '01') : '';
  TLItem.endDay = TLItem.isPeriod ? (TLItem.endDay ? TLItem.endDay : '01') : '';
  TLItem.endTime = TLItem.isPeriod ? `${TLItem.endYear}-${TLItem.endMonth}-${TLItem.endDay}` : '';
};
const generateTags = () => {
  TLItem.tagsInArray = TLItem.tagsInString.split(',').filter((tag) => tag && tag.trim());
  TLItem.tagsInArray.forEach((tag, index, arr) => arr[index] = tag.trim());
  TLItem.tagsInString = TLItem.tagsInArray.join(', ');
};
const saveTLItem = () => {
  generateStartTime();
  generateEndTime();
  generateTags();

  if (TLItem.id) {
    let item = Object.assign({}, TLItem);
    updateNode(TLItem.id);

    store.dispatch('updateTLItem', item);
    store.dispatch('updateGraphElement', item);
  } else {
    TLItem.id = new Date().toISOString();
    let item = Object.assign({}, TLItem);
    addNode(item);

    store.dispatch('addTLItem', item);
    store.dispatch('addGraphElement', generateNode(item));
  }
};
</script>