<script setup>

const payGrades = ref([
  { name: 'Grade A', currency: 'USD' },
  { name: 'Grade B', currency: 'EUR' },
  { name: 'Grade C', currency: 'GBP' },
  { name: 'Grade D', currency: 'JPY' },
  { name: 'Grade E', currency: 'AUD' }
]);

const showModal = ref(false);
const showModalForm = ref({
  name: '',
  currency: '',
});

const openModal = (payGrade = null) => {
  if (payGrade) {
    showModalForm.value.name = payGrade.name;
    showModalForm.value.currency = payGrade.currency;
  } else {
    showModalForm.value.name = '';
    showModalForm.value.currency = '';
  }
  showModal.value = true;
};

const savePayGrade = () => {
  if (showModalForm.value.name && showModalForm.value.currency) {
    const existingPayGrade = payGrades.value.find(pg => pg.name === showModalForm.value.name);
    if (existingPayGrade) {
      existingPayGrade.name = showModalForm.value.name;
      existingPayGrade.currency = showModalForm.value.currency;
    } else {
      payGrades.value.push({ name: showModalForm.value.name, currency: showModalForm.value.currency });
    }
  }
  showModal.value = false;
};

const deletePayGrade = (payGrade) => {
  payGrades.value = payGrades.value.filter(pg => pg.name !== payGrade.name);
};
</script>

<template>
  <div class="p-4">
   
    <rs-card class="p-4">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Pay Grades</h1>
        <button class="bg-green-600 text-white py-2 px-4 rounded-full" @click="openModal()" style="font-family: Arial;">+ Add</button>
      </div>
      <hr class="mb-4">
      <p class="text-gray-600 mb-4" style="font-family: Arial;">({{ payGrades.length }}) Record Found</p>
      <div class="grid grid-cols-1 gap-4">
        <rs-card v-for="payGrade in payGrades" :key="payGrade.name" class="p-4 bg-gray-100 rounded-lg relative">
          <div class="flex justify-between items-center">
            <div>
              <h6 class="font-semibold text-gray-700" style="font-family: Arial;">Name</h6>
              <p class="text-gray-500 text-lg" style="font-family: Arial;">{{ payGrade.name }}</p>
            </div>
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
              <button class="bg-green-200 text-gray-700 p-2 rounded-full" @click="openModal(payGrade)">
                <Icon name="material-symbols:edit-outline-rounded" class="text-lg"></Icon>
              </button>
              <button class="bg-red-200 text-gray-700 p-2 rounded-full" @click="deletePayGrade(payGrade)">
                <Icon name="material-symbols:delete-outline" class="text-lg"></Icon>
              </button>
            </div>
          </div>
          <div class="mt-4">
            <h6 class="font-semibold text-gray-700" style="font-family: Arial;">Currency</h6>
            <p class="text-gray-500 text-lg" style="font-family: Arial;">{{ payGrade.currency }}</p>
          </div>
        </rs-card>
      </div>

      <rs-modal title="Pay Grade" v-model="showModal" ok-title="Save" :ok-callback="savePayGrade">
        <FormKit type="text" v-model="showModalForm.name" name="name" label="Name" style="font-family: Arial;" />
        <FormKit type="text" v-model="showModalForm.currency" name="currency" label="Currency" style="font-family: Arial;" />
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