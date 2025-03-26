<script setup>
import { ref } from 'vue';

const jobTitles = ref([
  { title: 'Developer' },
  { title: 'Jr. Developer' },
  { title: 'UI/UX Developer' },
]);

const showModal = ref(false);
const showModalForm = ref({
  title: '',
});

const openModal = (job = null) => {
  if (job) {
    showModalForm.value.title = job.title;
  } else {
    showModalForm.value.title = '';
  }
  showModal.value = true;
};

const saveJobTitle = () => {
  if (showModalForm.value.title) {
    const existingJob = jobTitles.value.find(job => job.title === showModalForm.value.title);
    if (!existingJob) {
      jobTitles.value.push({ title: showModalForm.value.title });
    }
  }
  showModal.value = false;
};

const deleteJobTitle = (job) => {
  jobTitles.value = jobTitles.value.filter(j => j.title !== job.title);
};
</script>

<template>
  <div class="p-4">
    <div class="flex  items-centre mb-6 gap-2">

      <rs-dropdown title="Job" variant="success">
        <rs-dropdown-item> Option 1 </rs-dropdown-item>
        <rs-dropdown-item> Option 2 </rs-dropdown-item>
        <rs-dropdown-item> Option 3 </rs-dropdown-item>
      </rs-dropdown>
      <rs-dropdown title="Organization" variant="success">
        <rs-dropdown-item> Option 1 </rs-dropdown-item>
        <rs-dropdown-item> Option 2 </rs-dropdown-item>
        <rs-dropdown-item> Option 3 </rs-dropdown-item>
      </rs-dropdown>
      <rs-dropdown title="Qualifications" variant="success">
        <rs-dropdown-item> Option 1 </rs-dropdown-item>
        <rs-dropdown-item> Option 2 </rs-dropdown-item>
        <rs-dropdown-item> Option 3 </rs-dropdown-item>
      </rs-dropdown>

      <rs-button variant="success">Nationalities</rs-button>
      <rs-button variant="success">Corporate Branding</rs-button>

      <rs-dropdown title="Configuration" variant="success">
        <rs-dropdown-item> Option 1 </rs-dropdown-item>
        <rs-dropdown-item> Option 2 </rs-dropdown-item>
        <rs-dropdown-item> Option 3 </rs-dropdown-item>
      </rs-dropdown>
    </div>
    <rs-card class="p-4">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Job Titles</h1>
        <button class="bg-green-600 text-white py-2 px-4 rounded-full" @click="openModal()">+ Add</button>
      </div>
      <hr class="mb-4">
      <p class="text-gray-600 mb-4">({{ jobTitles.length }}) Records Found</p>
      <div class="grid grid-cols-1 gap-4">
        <rs-card v-for="job in jobTitles" :key="job.title" class="relative p-4 bg-gray-100 rounded-full">
          <div class="flex justify-between items-center w-full">
            <div>
              <h2 class="text-sm text-gray-700">Job Titles</h2>
              <p class="text-gray-500 text-lg">{{ job.title }}</p>
            </div>
            <div class="flex gap-2 absolute right-2 top-1/2 transform -translate-y-1/2">
              <button class="bg-red-300 text-gray-700 p-2 rounded-full" @click="deleteJobTitle(job)">
                <Icon name="material-symbols:delete-outline" class="text-lg"></Icon>
              </button>
              <button class="bg-gray-300 text-gray-700 p-2 rounded-full" @click="openModal(job)">
                <Icon name="material-symbols:edit-outline-rounded" class="text-lg"></Icon>
              </button>
            </div>
          </div>
        </rs-card>
      </div>

      <rs-modal title="Job Title" v-model="showModal" ok-title="Save" :ok-callback="saveJobTitle">
        <FormKit type="text" v-model="showModalForm.title" name="title" label="Job Title" />
      </rs-modal>
    </rs-card>
  </div>
</template>

<style scoped>
/* Add any additional styles here */
.rs-card {
  border-radius: 50px;
}
</style>