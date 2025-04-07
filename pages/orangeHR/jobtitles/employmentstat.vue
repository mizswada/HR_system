<script setup>
import { ref } from 'vue';

const employmentStatuses = ref([]);

const showStatusModal = ref(false);
const showStatusModalForm = ref({
  status: '',
});

const selectedStatuses = ref([]);
let editingStatus = null;

const openStatusModal = (status = null) => {
  if (status) {
    showStatusModalForm.value.status = status.status;
    editingStatus = status;
  } else {
    showStatusModalForm.value.status = '';
    editingStatus = null;
  }
  showStatusModal.value = true;
};

const saveEmploymentStatus = () => {
  if (showStatusModalForm.value.status) {
    if (editingStatus) {
      editingStatus.status = showStatusModalForm.value.status;
    } else {
      employmentStatuses.value.push({ status: showStatusModalForm.value.status });
    }
  }
  showStatusModal.value = false;
};

const deleteEmploymentStatus = (status) => {
  employmentStatuses.value = employmentStatuses.value.filter(es => es.status !== status.status);
};

const deleteSelectedStatuses = () => {
  employmentStatuses.value = employmentStatuses.value.filter(es => !selectedStatuses.value.includes(es.status));
  selectedStatuses.value = [];
};
</script>

<template>
  <div class="p-4">
   
    <!-- Removed Pay Grades section -->
    <rs-card class="p-4 mt-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Employment Status</h1>
        <button class="bg-green-600 text-white py-2 px-4 rounded-full" @click="openStatusModal()" style="font-family: Arial;">+ Add</button>
      </div>
      <hr class="mb-4">
      <p class="text-gray-600 mb-4" style="font-family: Arial;">({{ employmentStatuses.length }}) Records Found</p>
      <div class="flex justify-between items-center mb-4">
        <p class="text-gray-600" style="font-family: Arial;">({{ selectedStatuses.length }}) Records Selected</p>
        <button v-if="selectedStatuses.length > 0" class="bg-red-400 text-white py-2 px-4 rounded-full" @click="deleteSelectedStatuses" style="font-family: Arial;">Delete Selected</button>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <rs-card v-for="status in employmentStatuses" :key="status.status" class="p-4 bg-gray-100 rounded-lg relative">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <input type="checkbox" v-model="selectedStatuses" :value="status.status" />
              <div>
                <h6 class="font-semibold text-gray-700" style="font-family: Arial;">Employment Status</h6>
                <p class="text-gray-500 text-lg" style="font-family: Arial;">{{ status.status }}</p>
              </div>
            </div>
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
              <button class="bg-green-200 text-gray-700 p-2 rounded-full" @click="openStatusModal(status)">
                <Icon name="material-symbols:edit-outline-rounded" class="text-lg"></Icon>
              </button>
              <button class="bg-red-200 text-gray-700 p-2 rounded-full" @click="deleteEmploymentStatus(status)">
                <Icon name="material-symbols:delete-outline" class="text-lg"></Icon>
              </button>
            </div>
          </div>
        </rs-card>
      </div>

      <rs-modal title="Employment Status" v-model="showStatusModal" ok-title="Save" :ok-callback="saveEmploymentStatus">
        <FormKit type="text" v-model="showStatusModalForm.status" name="status" label="Status" style="font-family: Arial;" />
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