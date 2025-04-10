<script setup>
import { ref } from 'vue';

const reportingMethods = ref([
  { method: 'Employee ID', fieldName: 'Employee ID', screen: 'Personal Details', type: 'Text or Number' },
  { method: 'Emergency Contact Name', fieldName: 'Emergency Contact Name', screen: 'Emergency Contacts', type: 'Text or Number' },
  { method: 'Dependent Relationship', fieldName: 'Dependent Relationship', screen: 'Dependents', type: 'Drop Down' },
  { method: 'Passport Number', fieldName: 'Passport Number', screen: 'Immigration', type: 'Text or Number' },
  { method: 'Phone Number', fieldName: 'Phone Number', screen: 'Contact Details', type: 'Text or Number' }
]);

const showMethodModal = ref(false);
const showMethodModalForm = ref({
  method: '',
  fieldName: '',
  screen: '',
  type: '',
});

const selectedMethods = ref([]);
let editingMethod = null;

const openMethodModal = (method = null) => {
  if (method) {
    showMethodModalForm.value.method = method.method;
    editingMethod = method;
  } else {
    showMethodModalForm.value.method = '';
    showMethodModalForm.value.fieldName = '';
    showMethodModalForm.value.screen = '';
    showMethodModalForm.value.type = '';
    editingMethod = null;
  }
  showMethodModal.value = true;
};

const saveReportingMethod = () => {
  if (showMethodModalForm.value.method) {
    if (editingMethod) {
      editingMethod.method = showMethodModalForm.value.method;
    } else {
      reportingMethods.value.push({ method: showMethodModalForm.value.method });
    }
  }
  showMethodModal.value = false;
};

const deleteReportingMethod = (method) => {
  reportingMethods.value = reportingMethods.value.filter(rm => rm.method !== method.method);
};

const deleteSelectedMethods = () => {
  reportingMethods.value = reportingMethods.value.filter(rm => !selectedMethods.value.includes(rm.method));
  selectedMethods.value = [];
};
</script>

<template>
  <div class="p-4">
    <rs-card class="p-4 mt-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Custom Fields</h1>
        <button class="bg-green-600 text-white py-2 px-4 rounded-full" @click="openMethodModal()" style="font-family: Arial;">+ Add</button>
      </div>
      <hr class="mb-4">
      <p class="text-gray-600 mb-4" style="font-family: Arial;">({{ reportingMethods.length }}) Records Found</p>
      <div class="flex justify-between items-center mb-4">
        <p class="text-gray-600" style="font-family: Arial;">({{ selectedMethods.length }}) Records Selected</p>
        <button v-if="selectedMethods.length > 0" class="bg-red-400 text-white py-2 px-4 rounded-full" @click="deleteSelectedMethods" style="font-family: Arial;">Delete Selected</button>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <rs-card v-for="method in reportingMethods" :key="method.method" class="p-4 bg-gray-100 rounded-lg relative">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <input type="checkbox" v-model="selectedMethods" :value="method.method" />
              <div>
                <h6 class="font-semibold text-gray-700" style="font-family: Arial;">Custom Field</h6>
                <p class="text-gray-500 text-lg" style="font-family: Arial;">{{ method.method }}</p>
              </div>
            </div>
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
              <button class="bg-green-200 text-gray-700 p-2 rounded-full" @click="openMethodModal(method)">
                <Icon name="material-symbols:edit-outline-rounded" class="text-lg"></Icon>
              </button>
              <button class="bg-red-200 text-gray-700 p-2 rounded-full" @click="deleteReportingMethod(method)">
                <Icon name="material-symbols:delete-outline" class="text-lg"></Icon>
              </button>
            </div>
          </div>
        </rs-card>
      </div>

      <rs-modal title="Add Custom Field" v-model="showMethodModal" ok-title="Save" :ok-callback="saveReportingMethod">
        <FormKit type="text" v-model="showMethodModalForm.fieldName" name="Field Name" label="Field Name*" style="font-family: Arial;" />
        <FormKit
          type="select"
          v-model="showMethodModalForm.screen"
          name="Screen"
          label="Screen*"
          :options="['-- Select --', 'Personal Details', 'Contact Details', 'Emergency Contacts', 'Dependents', 'Immigration']"
          style="font-family: Arial;"
        />
        <FormKit
          type="select"
          v-model="showMethodModalForm.type"
          name="Type"
          label="Type*"
          :options="['-- Select --', 'Text or Number', 'Drop Down']"
          style="font-family: Arial;"
        />
      </rs-modal>
    </rs-card>
  </div>
</template>

<style scoped>
/* Add any additional styles here */
.rs-card {
  border-radius: 10px;
  font-family: Arial;
}
</style>
