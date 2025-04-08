<script setup>
import { ref } from 'vue';

const reportingMethods = ref([]);

const showMethodModal = ref(false);
const showMethodModalForm = ref({
  method: '',
});

const selectedMethods = ref([]);
let editingMethod = null;

const openMethodModal = (method = null) => {
  if (method) {
    showMethodModalForm.value.method = method.method;
    editingMethod = method;
  } else {
    showMethodModalForm.value.method = '';
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
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Reporting Methods</h1>
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
                <h6 class="font-semibold text-gray-700" style="font-family: Arial;">Reporting Method</h6>
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

      <rs-modal title="Reporting Method" v-model="showMethodModal" ok-title="Save" :ok-callback="saveReportingMethod">
        <FormKit type="text" v-model="showMethodModalForm.method" name="Name" label="Name" style="font-family: Arial;" />
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
