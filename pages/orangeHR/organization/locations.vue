<script setup>
import { ref } from 'vue';

const jobTitles = ref([]);

const showTitleModal = ref(false);
const showTitleModalForm = ref({
  name: '',
  city: '',
  country: '',
  phone: '',
  numberOfEmployees: 0,
});

const selectedTitles = ref([]);
let editingTitle = null;

const openTitleModal = (title = null) => {
  if (title) {
    showTitleModalForm.value.name = title.name;
    showTitleModalForm.value.city = title.city;
    showTitleModalForm.value.country = title.country;
    showTitleModalForm.value.phone = title.phone;
    showTitleModalForm.value.numberOfEmployees = title.numberOfEmployees;
    editingTitle = title;
  } else {
    showTitleModalForm.value.name = '';
    showTitleModalForm.value.city = '';
    showTitleModalForm.value.country = '';
    showTitleModalForm.value.phone = '';
    showTitleModalForm.value.numberOfEmployees = 0;
    editingTitle = null;
  }
  showTitleModal.value = true;
};

const saveJobTitle = () => {
  if (showTitleModalForm.value.name && showTitleModalForm.value.city && showTitleModalForm.value.country) {
    if (editingTitle) {
      editingTitle.name = showTitleModalForm.value.name;
      editingTitle.city = showTitleModalForm.value.city;
      editingTitle.country = showTitleModalForm.value.country;
      editingTitle.phone = showTitleModalForm.value.phone;
      editingTitle.numberOfEmployees = showTitleModalForm.value.numberOfEmployees;
    } else {
      jobTitles.value.push({ 
        name: showTitleModalForm.value.name,
        city: showTitleModalForm.value.city,
        country: showTitleModalForm.value.country,
        phone: showTitleModalForm.value.phone,
        numberOfEmployees: showTitleModalForm.value.numberOfEmployees,
      });
    }
  }
  showTitleModal.value = false;
};

const deleteJobTitle = (title) => {
  jobTitles.value = jobTitles.value.filter(jt => jt.name !== title.name);
};

const deleteSelectedTitles = () => {
  jobTitles.value = jobTitles.value.filter(jt => !selectedTitles.value.includes(jt.name));
  selectedTitles.value = [];
};
</script>

<template>
  <div class="p-4">
    <rs-card class="p-4 mt-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Locations</h1>
        <button class="bg-green-600 text-white py-2 px-4 rounded-full" @click="openTitleModal()" style="font-family: Arial;">+ Add</button>
      </div>
      <hr class="mb-4">
      <p class="text-gray-600 mb-4" style="font-family: Arial;">({{ jobTitles.length }}) Records Found</p>
      <div class="flex justify-between items-center mb-4">
        <p class="text-gray-600" style="font-family: Arial;">({{ selectedTitles.length }}) Records Selected</p>
        <button v-if="selectedTitles.length > 0" class="bg-red-400 text-white py-2 px-4 rounded-full" @click="deleteSelectedTitles" style="font-family: Arial;">Delete Selected</button>
      </div>
      <rs-table :data="jobTitles" :options="{ variant: 'default', striped: true, borderless: true }" :options-advanced="{ sortable: true, responsive: true, filterable: false }" advanced>
        <template #cell-action="{ row }">
          <button @click="openTitleModal(row)">Edit</button>
          <button @click="deleteJobTitle(row)">Delete</button>
        </template>
      </rs-table>
      <rs-modal title="Job Title" v-model="showTitleModal" ok-title="Save" :ok-callback="saveJobTitle">
        <FormKit type="text" v-model="showTitleModalForm.name" name="name" label="Name" style="font-family: Arial;" />
        <FormKit type="text" v-model="showTitleModalForm.city" name="city" label="City" style="font-family: Arial;" />
        <FormKit type="select" v-model="showTitleModalForm.country" name="country" label="Country" style="font-family: Arial;">
          <option value="">-- Select --</option>
          <option value="Malaysia">Malaysia</option>
          <option value="Singapore">Singapore</option>
          <option value="Thailand">Thailand</option>
          <option value="Indonesia">Indonesia</option>
          <option value="Brunei">Brunei</option>
        </FormKit>
        <FormKit type="text" v-model="showTitleModalForm.phone" name="phone" label="Phone" style="font-family: Arial;" />
        <FormKit type="number" v-model="showTitleModalForm.numberOfEmployees" name="numberOfEmployees" label="Number of Employees" style="font-family: Arial;" />
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
