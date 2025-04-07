<script setup>
import { ref } from 'vue';

const jobCategories = ref([]);

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
</script>

<template>
  <div class="p-4">
   
    <!-- Removed Pay Grades section -->
    <rs-card class="p-4 mt-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Job Categories</h1>
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

      <rs-modal title="Job Category" v-model="showCategoryModal" ok-title="Save" :ok-callback="saveJobCategory">
        <FormKit type="text" v-model="showCategoryModalForm.category" name="category" label="Category" style="font-family: Arial;" />
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