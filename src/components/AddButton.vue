<template>
  <v-btn @click="showEventForm()">
    Add
    <v-dialog
      v-model="dialog"
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
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-textarea
                  label="Description"
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
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="4"
                  >
                    <v-text-field
                      label="Month"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="4"
                  >
                    <v-text-field
                      label="Day"
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
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="4"
                  >
                    <v-text-field
                      label="Month"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="4"
                  >
                    <v-text-field
                      label="Day"
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
            @click="dialog = false"
          >
            Close
          </v-btn>
          <v-btn
            color="blue-darken-1"
            variant="text"
            @click="dialog = false"
          >
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AddButton',
  setup() {
    const dialog = ref(false);
    const isPeriod = ref(false);
    const showEventForm = () => {
      console.log('showEventForm');

    };

    return {
      dialog,
      isPeriod,
      showEventForm,
    }
  }
});
</script>