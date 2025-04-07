<script setup>
import { ref } from 'vue';

const terminationReasons = ref([]);

const showReasonModal = ref(false);
const showReasonModalForm = ref({
  reason: '',
});

const selectedReasons = ref([]);
let editingReason = null;

const openReasonModal = (reason = null) => {
  if (reason) {
    showReasonModalForm.value.reason = reason.reason;
    editingReason = reason;
  } else {
    showReasonModalForm.value.reason = '';
    editingReason = null;
  }
  showReasonModal.value = true;
};

const saveTerminationReason = () => {
  if (showReasonModalForm.value.reason) {
    if (editingReason) {
      editingReason.reason = showReasonModalForm.value.reason;
    } else {
      terminationReasons.value.push({ reason: showReasonModalForm.value.reason });
    }
  }
  showReasonModal.value = false;
};

const deleteTerminationReason = (reason) => {
  terminationReasons.value = terminationReasons.value.filter(tr => tr.reason !== reason.reason);
};

const deleteSelectedReasons = () => {
  terminationReasons.value = terminationReasons.value.filter(tr => !selectedReasons.value.includes(tr.reason));
  selectedReasons.value = [];
};
</script>

<template>
  <div class="p-4">
    <rs-card class="p-4 mt-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Termination Reasons</h1>
        <button class="bg-green-600 text-white py-2 px-4 rounded-full" @click="openReasonModal()" style="font-family: Arial;">+ Add</button>
      </div>
      <hr class="mb-4">
      <p class="text-gray-600 mb-4" style="font-family: Arial;">({{ terminationReasons.length }}) Records Found</p>
      <div class="flex justify-between items-center mb-4">
        <p class="text-gray-600" style="font-family: Arial;">({{ selectedReasons.length }}) Records Selected</p>
        <button v-if="selectedReasons.length > 0" class="bg-red-400 text-white py-2 px-4 rounded-full" @click="deleteSelectedReasons" style="font-family: Arial;">Delete Selected</button>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <rs-card v-for="reason in terminationReasons" :key="reason.reason" class="p-4 bg-gray-100 rounded-lg relative">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <input type="checkbox" v-model="selectedReasons" :value="reason.reason" />
              <div>
                <h6 class="font-semibold text-gray-700" style="font-family: Arial;">Termination Reason</h6>
                <p class="text-gray-500 text-lg" style="font-family: Arial;">{{ reason.reason }}</p>
              </div>
            </div>
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
              <button class="bg-green-200 text-gray-700 p-2 rounded-full" @click="openReasonModal(reason)">
                <Icon name="material-symbols:edit-outline-rounded" class="text-lg"></Icon>
              </button>
              <button class="bg-red-200 text-gray-700 p-2 rounded-full" @click="deleteTerminationReason(reason)">
                <Icon name="material-symbols:delete-outline" class="text-lg"></Icon>
              </button>
            </div>
          </div>
        </rs-card>
      </div>

      <rs-modal title="Termination Reason" v-model="showReasonModal" ok-title="Save" :ok-callback="saveTerminationReason">
        <FormKit type="text" v-model="showReasonModalForm.reason" name="Name" label="Name" style="font-family: Arial;" />
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
