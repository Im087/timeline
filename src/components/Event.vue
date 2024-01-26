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
      </v-card-item>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn @click="editTLItem">
          Edit
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
                      <span class="text-body-1" v-show="TLItem.isPeriod">To</span>
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
                  variant="text"
                  @click="isDialogShown = false"
                >
                  Close
                </v-btn>
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="isDialogShown = false"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
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

export default defineComponent({
  name: 'Event',
  props: {
    TLItem: {
      type: Object as PropType<TLItem>,
      required: true,
      deep: true,
    }
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