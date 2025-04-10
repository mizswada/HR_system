<script setup>
import { ref } from 'vue';

const jobCategories = ref([
  { category: 'Software Engineer' },
  { category: 'Data Analyst' },
  { category: 'HR Manager' }
]);

const showCategoryModal = ref(false);
const showCategoryModalForm = ref({
  category: '',
});

const selectedCategories = ref([]);
let editingCategory = null;

// New state for search functionality
const reportName = ref('');

const openCategoryModal = (category = null) => {
  if (category) {
    showCategoryModalForm.value.category = category.category;
    editingCategory = category;
  } else {
    showCategoryModalForm.value.category = '';
    editingCategory = null;
  }
  showCategoryModal.value = true;
};

const saveJobCategory = () => {
  if (showCategoryModalForm.value.category) {
    if (editingCategory) {
      editingCategory.category = showCategoryModalForm.value.category;
    } else {
      jobCategories.value.push({ category: showCategoryModalForm.value.category });
    }
  }
  showCategoryModal.value = false;
};

const deleteJobCategory = (category) => {
  jobCategories.value = jobCategories.value.filter(jc => jc.category !== category.category);
};

const deleteSelectedCategories = () => {
  jobCategories.value = jobCategories.value.filter(jc => !selectedCategories.value.includes(jc.category));
  selectedCategories.value = [];
};

const resetSearch = () => {
  reportName.value = '';
};
const criteria = [
"Employee name",
                        "Pay Grade",
                        "Education",
                        "Employment Status",
                        "Service Period",
                        "Joined date",
                        "Job Title",
                        "Language",
                        "Skill",
                        "Age Group",
                        "Sub Unit",
                      ];

const include = [
                        "Current Employees Only",
                        "Current Employees and Past Employees",
                        "Past Employees Only",
                        "Employment Status",
                       
                      ];
 
const group = [
                        "Personal",
                        "Contact Details", 
                        "Emergency Contacts",
                        "Dependents",
                        "Immigration",
                        "Job",
                        "Salary",
                        "Subordinates",
                        "Supervisor",
                        "Work Experience",
                        "Skills",
                        "Languages",
                        "Licenses",
                        "Memberships",
                      ];

const field = [
                        "Employee ID",
                        "Employee Last Name",
                        "Employee First Name",
                        "Employee Middle Name",
                        "Date of Birth",
                        "Nationality",
                        "Gender",
                        "Marital Status",
                        "Driver's License Number", 
                        "license Expiry Date",
                        "Other ID",
                      ];
</script>

<template>
  <div class="p-4">
    <!-- New Employee Reports Search Card -->
    <rs-card class="p-4">
      <h2 class="text-lg font-bold mb-4" style="font-family: Arial;">Employee Reports</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
        <div>
          <label for="reportName" class="block text-gray-700 font-medium mb-2" style="font-family: Arial;">Report Name</label>
          <input
            id="reportName"
            type="text"
            v-model="reportName"
            placeholder="Type for hints..."
            class="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div class="flex gap-4 justify-end">
          <button
            @click="resetSearch"
            class="border border-green-500 text-green-500 px-4 py-2 rounded-lg hover:bg-purple-100"
            style="font-family: Arial;"
          >
            Reset
          </button>
          <button
            class="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600"
            style="font-family: Arial;"
          >
            Search
          </button>
        </div>
      </div>
    </rs-card>

    <!-- Existing Job Categories Section -->
    <rs-card class="p-4 mt-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Employee Report</h1>
        <button class="bg-green-600 text-white py-2 px-4 rounded-full" @click="openCategoryModal()" style="font-family: Arial;">+ Add</button>
      </div>
      <hr class="mb-4">
      <p class="text-gray-600 mb-4" style="font-family: Arial;">({{ jobCategories.length }}) Records Found</p>
      <div class="flex justify-between items-center mb-4">
        <p class="text-gray-600" style="font-family: Arial;">({{ selectedCategories.length }}) Records Selected</p>
        <button v-if="selectedCategories.length > 0" class="bg-red-400 text-white py-2 px-4 rounded-full" @click="deleteSelectedCategories" style="font-family: Arial;">Delete Selected</button>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <rs-card v-for="category in jobCategories" :key="category.category" class="p-4 bg-gray-100 rounded-lg relative">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <input type="checkbox" v-model="selectedCategories" :value="category.category" />
              <div>
                <h6 class="font-semibold text-gray-700" style="font-family: Arial;">Job Category</h6>
                <p class="text-gray-500 text-lg" style="font-family: Arial;">{{ category.category }}</p>
              </div>
            </div>
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
              <button class="bg-green-200 text-gray-700 p-2 rounded-full" @click="openCategoryModal(category)">
                <Icon name="material-symbols:edit-outline-rounded" class="text-lg"></Icon>
              </button>
              <button class="bg-red-200 text-gray-700 p-2 rounded-full" @click="deleteJobCategory(category)">
                <Icon name="material-symbols:delete-outline" class="text-lg"></Icon>
              </button>
            </div>
          </div>
        </rs-card>
      </div>

      <rs-modal title="Add Report" v-model="showCategoryModal" ok-title="Save" :ok-callback="saveJobCategory">
        <div class="grid grid-cols-1 gap-4">
          <!-- Report Name -->
          <div>
            <FormKit 
                        type="text" 
                        label="Required Validation"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Required <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
          </div>

          <!-- Selection Criteria -->
          <div>
            
           
                      <FormKit
                        type="select"
                        label="Selection criteria"
                        :options="criteria"
                      />

                      <FormKit
                        type="select"
                        label="Include"
                        :options="include"
                      />
                    
          </div>

          <!-- Display Fields -->
          <div>
            <label class="block text-gray-700 font-medium mb-2" style="font-family: Arial;">Display Fields</label>
            <div class="grid grid-cols-2 gap-4">
              <div>
                <FormKit
                        type="select"
                        label="Select Display Field Group"
                        :options="group"
                      />

                      <FormKit
                        type="select"
                        label="Select Display Field"
                        :options="field"
                      />
                  <!-- Add options dynamically if needed -->
              </div>
              
            </div>
          </div>
        </div>
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