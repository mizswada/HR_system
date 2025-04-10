<script setup>
import { ref } from 'vue';



const jobTitles = ref([
  { title: 'Software Engineer' },
  { title: 'Project Manager' },
  { title: 'UI/UX Designer' }
]);

const showTitleModal = ref(false);
const showTitleModalForm = ref({
  title: '',
});

const selectedTitles = ref([]);
let editingTitle = null;

const openTitleModal = (title = null) => {
  if (title) {
    showTitleModalForm.value.title = title.title;
    editingTitle = title;
  } else {
    showTitleModalForm.value.title = '';
    editingTitle = null;
  }
  showTitleModal.value = true;
};

const saveJobTitle = () => {
  if (showTitleModalForm.value.title) {
    if (editingTitle) {
      editingTitle.title = showTitleModalForm.value.title;
    } else {
      jobTitles.value.push({ title: showTitleModalForm.value.title });
    }
  }
  showTitleModal.value = false;
};

const deleteJobTitle = (title) => {
  jobTitles.value = jobTitles.value.filter(jt => jt.title !== title.title);
};

const deleteSelectedTitles = () => {
  jobTitles.value = jobTitles.value.filter(jt => !selectedTitles.value.includes(jt.title));
  selectedTitles.value = [];
};

import { DateTime } from "luxon";
        
        const dt = DateTime.now();

        const dateStart = dt.plus({ days: -7 }).toFormat("yyyy-MM-dd");
        const dateEnd = dt.plus({ days: 7 }).toFormat("yyyy-MM-dd");

        const title = [
        { label: "select", value: "my", attrs: { disabled: true } },,
                        "Programmer",
                        "Developer",
                        "Designer",
];
const categories = [
        { label: "select", value: "my", attrs: { disabled: true } },,
                        "Sales Manager",
                        "Sales Executive",
                        "Sales Associate",
                        
];
</script>

<template>
  <div class="p-4">
 
    <rs-card class="p-4 mt-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Job </h1>
        <button class="bg-green-600 text-white py-2 px-4 rounded-full" @click="openTitleModal()" style="font-family: Arial;">+ Add</button>
      </div>
      <hr class="mb-4">
      <p class="text-gray-600 mb-4" style="font-family: Arial;">({{ jobTitles.length }}) Records Found</p>
      <div class="flex justify-between items-center mb-4">
        <p class="text-gray-600" style="font-family: Arial;">({{ selectedTitles.length }}) Records Selected</p>
        <button v-if="selectedTitles.length > 0" class="bg-red-400 text-white py-2 px-4 rounded-full" @click="deleteSelectedTitles" style="font-family: Arial;">Delete Selected</button>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <rs-card v-for="title in jobTitles" :key="title.title" class="p-4 bg-gray-100 rounded-lg relative">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <input type="checkbox" v-model="selectedTitles" :value="title.title" />
              <div>
                <h6 class="font-semibold text-gray-700" style="font-family: Arial;">Job Title</h6>
                <p class="text-gray-500 text-lg" style="font-family: Arial;">{{ title.title }}</p>
              </div>
            </div>
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
              <button class="bg-green-200 text-gray-700 p-2 rounded-full" @click="openTitleModal(title)">
                <Icon name="material-symbols:edit-outline-rounded" class="text-lg"></Icon>
              </button>
              <button class="bg-red-200 text-gray-700 p-2 rounded-full" @click="deleteJobTitle(title)">
                <Icon name="material-symbols:delete-outline" class="text-lg"></Icon>
              </button>
            </div>
          </div>
        </rs-card>
      </div>


      <rs-modal title="Job Title" v-model="showTitleModal" ok-title="Save" :ok-callback="saveJobTitle">
        <FormKit
                        type="date"
                        label="Date"
                        help="Enter date (the date must be between 6/6/2022 and 20/6/2022)"
                        :validation="[['date_between', dateStart, dateEnd]]"
                        validation-visibility="live"
                      />
                      <FormKit
                        type="select"
                        label="Job title"
                        :options="title"
                      />
                      <FormKit type="text" label="Job Specification" value="Not Specified" readonly/>

                  
                      <FormKit
                        type="select"
                        label="Job Category"
                        :options="categories"
                      />
                      <FormKit
                        type="select"
                        label="Sub Unit"
                        :options="[{ label: 'Select', value: '', attrs: { disabled: true } }, 'HR', 'Finance', 'IT']"
                      />
                      <FormKit
                        type="select"
                        label="Location"
                        :options="[{ label: 'Select', value: '', attrs: { disabled: true } }, 'New York', 'London', 'Tokyo']"
                      />
                      <FormKit
                        type="select"
                        label="Employment Status"
                        :options="[{ label: 'Select', value: '', attrs: { disabled: true } }, 'Full-Time', 'Part-Time', 'Contract']"
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
