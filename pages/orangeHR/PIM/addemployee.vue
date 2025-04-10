<script setup>
import { ref } from 'vue';

const jobCategories = ref([
  { category: 'Software Development' },
  { category: 'Human Resources' },
  { category: 'Finance' },
  { category: 'Marketing' },
  { category: 'Customer Support' }
]);

const showCategoryModal = ref(false);
const showCategoryModalForm = ref({
  category: '',
});

const selectedCategories = ref([]);
let editingCategory = null;

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

const options = ["Enabled", "Disabled"];


</script>

<template>
<div class="p-4">
   
    <!-- Removed Pay Grades section -->
    <rs-card class="p-4 mt-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Add Employee</h1>
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
 
      <rs-modal title="Add Employee Form" v-model="showCategoryModal" ok-title="Save" :ok-callback="saveJobCategory">
   <div>
     <!-- Profile Picture Section -->
     <div class="flex flex-col items-center">
       <div class="relative">
         <div class="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center">
           <Icon name="material-symbols:person-outline" class="text-gray-400 text-6xl"></Icon>
         </div>
         <button class="absolute bottom-0 right-0 bg-purple-600 text-white p-2 rounded-full">
           <Icon name="material-symbols:add" class="text-lg"></Icon>
         </button>
       </div>
       <p class="text-gray-500 text-sm mt-2 text-center">
         Accepts jpg, .png, .gif up to 1MB. Recommended dimensions: 200px X 200px
       </p>
     </div>
 
     <!-- Employee Details Section -->
     <div>
        <FormKit 
                        type="text" 
                        label="First Name"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            First Name <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>

                      <FormKit 
                        type="text" 
                        label="Middle Name"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                           Middle Name <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
                      <FormKit 
                        type="text" 
                        label="Last Name"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Last Name <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
                      <FormKit 
                        type="text" 
                        label="Employee ID"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Employee ID <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>

                      <div>
                        <h6> Create Login Details</h6>

                        <FormKit 
                        type="text" 
                        label="username"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Username <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>

                      <FormKit
                        type="radio"
                        label="Status"
                        :options="options"
                      />

                      <FormKit type="group">
                        <FormKit
                          type="password"
                          name="password"
                          label="Password"
                          help="Enter a new password"
                          validation="required"
                        />
                        <FormKit
                          type="password"
                          name="password_confirm"
                          label="Confirm password"
                          help="Confirm your new password"
                          validation="required|confirm"
                          validation-label="Password confirmation"
                        />
                      </FormKit>

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
