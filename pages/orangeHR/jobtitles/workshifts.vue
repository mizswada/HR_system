<script setup>
import { ref } from 'vue';

const workShifts = ref([
  { name: 'Morning Shift', from: '08:00 AM', to: '04:00 PM', hoursPerDay: 8 },
  { name: 'Evening Shift', from: '04:00 PM', to: '12:00 AM', hoursPerDay: 8 },
  { name: 'Night Shift', from: '12:00 AM', to: '08:00 AM', hoursPerDay: 8 }
]);

const showShiftModal = ref(false);
const showShiftModalForm = ref({
  name: '',
  from: '',
  to: '',
  hoursPerDay: 0,
});

const selectedShifts = ref([]);
let editingShift = null;

const openShiftModal = (shift = null) => {
  if (shift) {
    showShiftModalForm.value.name = shift.name;
    showShiftModalForm.value.from = shift.from;
    showShiftModalForm.value.to = shift.to;
    showShiftModalForm.value.hoursPerDay = shift.hoursPerDay;
    editingShift = shift;
  } else {
    showShiftModalForm.value.name = '';
    showShiftModalForm.value.from = '';
    showShiftModalForm.value.to = '';
    showShiftModalForm.value.hoursPerDay = 0;
    editingShift = null;
  }
  showShiftModal.value = true;
};

const saveWorkShift = () => {
  if (showShiftModalForm.value.name && showShiftModalForm.value.from && showShiftModalForm.value.to) {
    if (editingShift) {
      editingShift.name = showShiftModalForm.value.name;
      editingShift.from = showShiftModalForm.value.from;
      editingShift.to = showShiftModalForm.value.to;
      editingShift.hoursPerDay = showShiftModalForm.value.hoursPerDay;
    } else {
      workShifts.value.push({ 
        name: showShiftModalForm.value.name,
        from: showShiftModalForm.value.from,
        to: showShiftModalForm.value.to,
        hoursPerDay: showShiftModalForm.value.hoursPerDay
      });
    }
  }
  showShiftModal.value = false;
};

const deleteWorkShift = (shift) => {
  workShifts.value = workShifts.value.filter(ws => ws.name !== shift.name);
};

const deleteSelectedShifts = () => {
  workShifts.value = workShifts.value.filter(ws => !selectedShifts.value.includes(ws.name));
  selectedShifts.value = [];
};
</script>

<template>
  <div class="p-4">
   
    <rs-card class="p-4 mt-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Work Shifts</h1>
        <button class="bg-green-600 text-white py-2 px-4 rounded-full" @click="openShiftModal()" style="font-family: Arial;">+ Add</button>
      </div>
      <hr class="mb-4">
      <p class="text-gray-600 mb-4" style="font-family: Arial;">({{ workShifts.length }}) Record Found</p>
      <div class="flex justify-between items-center mb-4">
        <p class="text-gray-600" style="font-family: Arial;">({{ selectedShifts.length }}) Records Selected</p>
        <button v-if="selectedShifts.length > 0" class="bg-red-400 text-white py-2 px-4 rounded-full" @click="deleteSelectedShifts" style="font-family: Arial;">Delete Selected</button>
      </div>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white">
          <thead>
            <tr>
              <th class="py-2 px-4 border-b border-gray-200 text-left text-gray-600" style="font-family: Arial;"> </th>
              <th class="py-2 px-4 border-b border-gray-200 text-left text-gray-600" style="font-family: Arial;">Name</th>
              <th class="py-2 px-4 border-b border-gray-200 text-left text-gray-600" style="font-family: Arial;">From</th>
              <th class="py-2 px-4 border-b border-gray-200 text-left text-gray-600" style="font-family: Arial;">To</th>
              <th class="py-2 px-4 border-b border-gray-200 text-left text-gray-600" style="font-family: Arial;">Hours Per Day</th>
              <th class="py-2 px-4 border-b border-gray-200 text-left text-gray-600" style="font-family: Arial;">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="shift in workShifts" :key="shift.name" class="hover:bg-gray-100">
              <td class="py-2 px-4 border-b border-gray-200">
                <input type="checkbox" v-model="selectedShifts" :value="shift.name" />
              </td>
              <td class="py-2 px-4 border-b border-gray-200 text-gray-700" style="font-family: Arial;">{{ shift.name }}</td>
              <td class="py-2 px-4 border-b border-gray-200 text-gray-700" style="font-family: Arial;">{{ shift.from }}</td>
              <td class="py-2 px-4 border-b border-gray-200 text-gray-700" style="font-family: Arial;">{{ shift.to }}</td>
              <td class="py-2 px-4 border-b border-gray-200 text-gray-700" style="font-family: Arial;">{{ shift.hoursPerDay }}</td>
              <td class="py-2 px-4 border-b border-gray-200">
                <div class="flex gap-2">
                  <button class="bg-green-200 text-gray-700 p-2 rounded-full" @click="openShiftModal(shift)">
                    <Icon name="material-symbols:edit-outline-rounded" class="text-lg"></Icon>
                  </button>
                  <button class="bg-red-200 text-gray-700 p-2 rounded-full" @click="deleteWorkShift(shift)">
                    <Icon name="material-symbols:delete-outline" class="text-lg"></Icon>
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <rs-modal title="Work Shift" v-model="showShiftModal" ok-title="Save" :ok-callback="saveWorkShift">
        <FormKit type="text" v-model="showShiftModalForm.name" name="name" label="Name" style="font-family: Arial;" />
        <FormKit type="text" v-model="showShiftModalForm.from" name="from" label="From" style="font-family: Arial;" />
        <FormKit type="text" v-model="showShiftModalForm.to" name="to" label="To" style="font-family: Arial;" />
        <FormKit type="number" v-model="showShiftModalForm.hoursPerDay" name="hoursPerDay" label="Hours Per Day" style="font-family: Arial;" />
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