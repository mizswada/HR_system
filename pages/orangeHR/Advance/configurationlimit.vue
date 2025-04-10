<script setup>
import { ref } from 'vue';

const reportingMethods = ref([
  {
    requestDate: '2023-10-01',
    purpose: 'Travel Expenses',
    amount: 500,
    approver: 'Mohd Fauzy Bin Mat Yusop',
    status: 'PENDING'
  },
  {
    requestDate: '2023-09-15',
    purpose: 'Office Supplies',
    amount: 300,
    approver: 'Mohd Fauzy Bin Mat Yusop',
    status: 'APPROVE'
  },
  {
    requestDate: '2023-09-20',
    purpose: 'Conference Fees',
    amount: 200,
    approver: 'Mohd Fauzy Bin Mat Yusop',
    status: 'REJECT'
  }
]);

const showMethodModal = ref(false);
const showMethodModalForm = ref({
  method: '',
  status: '',
  approval: '',
  requestDate: '',
  purpose: '',
  amount: '',
  approver: '',
});

const selectedMethods = ref([]);
let editingMethod = null;

const openMethodModal = (method = null) => {
  if (method) {
    showMethodModalForm.value.method = method.method;
    showMethodModalForm.value.status = method.status || '';
    showMethodModalForm.value.approval = method.approval || '';
    showMethodModalForm.value.requestDate = method.requestDate || '';
    showMethodModalForm.value.purpose = method.purpose || '';
    showMethodModalForm.value.amount = method.amount || '';
    showMethodModalForm.value.approver = method.approver || '';
    editingMethod = method;
  } else {
    showMethodModalForm.value.method = '';
    showMethodModalForm.value.status = '';
    showMethodModalForm.value.approval = '';
    showMethodModalForm.value.requestDate = '';
    showMethodModalForm.value.purpose = '';
    showMethodModalForm.value.amount = '';
    showMethodModalForm.value.approver = '';
    editingMethod = null;
  }
  showMethodModal.value = true;
};

const saveReportingMethod = () => {
  if (showMethodModalForm.value.method) {
    if (editingMethod) {
      editingMethod.method = showMethodModalForm.value.method;
      editingMethod.status = showMethodModalForm.value.status;
      editingMethod.approval = showMethodModalForm.value.approval;
      editingMethod.requestDate = showMethodModalForm.value.requestDate;
      editingMethod.purpose = showMethodModalForm.value.purpose;
      editingMethod.amount = showMethodModalForm.value.amount;
      editingMethod.approver = showMethodModalForm.value.approver;
    } else {
      reportingMethods.value.push({ 
        method: showMethodModalForm.value.method,
        status: showMethodModalForm.value.status,
        approval: showMethodModalForm.value.approval,
        requestDate: showMethodModalForm.value.requestDate,
        purpose: showMethodModalForm.value.purpose,
        amount: showMethodModalForm.value.amount,
        approver: showMethodModalForm.value.approver,
      });
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
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Configuration Limit</h1>
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
                <h6 class="font-semibold text-gray-700" style="font-family: Arial;">Advance request</h6>
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

      <rs-modal title="New Advance Request" v-model="showMethodModal" ok-title="Submit" :ok-callback="saveReportingMethod">
        <FormKit type="date" v-model="showMethodModalForm.requestDate" name="Request Date" label="Request Date" style="font-family: Arial;" />
        <FormKit type="textarea" v-model="showMethodModalForm.purpose" name="Purpose" label="Purpose" style="font-family: Arial;" />
        <FormKit type="number" v-model="showMethodModalForm.amount" name="Amount Required" label="Amount Required" style="font-family: Arial;" />
        <FormKit type="select" v-model="showMethodModalForm.approver" name="Approver" label="Approver" :options="['Mohd Fauzy Bin Mat Yusop']" style="font-family: Arial;" />
        <FormKit type="select" v-model="showMethodModalForm.status" name="Status" label="Status" :options="['ALL', 'PENDING', 'APPROVE', 'REJECT']" style="font-family: Arial;" />
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
