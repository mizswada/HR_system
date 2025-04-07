<script setup>
import { ref } from 'vue';

const data = [
  {
    "race": "Malay",
    "religion": "Islam",
    "action": "edit",
  },

  {
    "race": "Chinese",
    "religion": "Christian",
    "action": "edit",
  }
]

const showModal = ref(false);
const showModalDelete = ref(false);
const modalType = ref('');
const showModalForm = ref({
  raceName: '',
  religionName: '',
});
const showModalDeleteForm = ref({
  raceName: '',
});


function openModal(value, action) {
  modalType.value = action;
  if (action === 'edit' && value) {
    showModalForm.value = { ...value };
  } else {
    showModalForm.value = {
      raceName: '',
    };
  }
  showModal.value = true;
}

function openModalDelete(value) {
  showModalDeleteForm.value = { ...value };
  showModalDelete.value = true;
}

function openModalAdd() {
  openModal(null, 'add');
}

function saveRace() {
  // Implement the logic to save user
  console.log('Save', showModalForm.value);
  showModal.value = false;
}

function deleteRace() {
  // Implement the logic to delete user
  console.log('Delete', showModalDeleteForm.value);
  showModalDelete.value = false;
}
</script>

<template>
  <div class="mb-4">
    <h1 class="text-2xl font-bold">Race & Religion</h1>
    <div class="card p-4 mt-4">
      <div class="flex justify-end items-center mb-4">
        <rs-button @click="openModal(null, 'add')">
          <Icon name="material-symbols:add" class="mr-1"></Icon>
          Add
        </rs-button>
      </div>
      <rs-table
        :data="data"
        :options="{
          variant: 'default',
          striped: true,
          borderless: true,
        }"
        :options-advanced="{
          sortable: true,
          responsive: true,
          filterable: false,
        }"
        advanced
      >
        <template v-slot:action="data">
          <div
            class="flex justify-center items-center"
          >
            <Icon
              name="material-symbols:edit-outline-rounded"
              class="text-primary hover:text-primary/90 cursor-pointer mr-1"
              size="22"
              @click="openModal(data.value, 'edit')"
            ></Icon>
            <Icon
              name="material-symbols:close-rounded"
              class="text-primary hover:text-primary/90 cursor-pointer"
              size="22"
              @click="openModalDelete(data.value)"
            ></Icon>
          </div>
        </template>
      </rs-table>
    </div>
  </div>
  <rs-modal
    :title="modalType == 'edit' ? 'Edit Race & Religion' : 'Add Race & Religion'"
    ok-title="Save"
    :ok-callback="saveRace"
    v-model="showModal"
    :overlay-close="false"
  >
    <FormKit
      type="text"
      v-model="showModalForm.raceName"
      name="raceName"
      label="Race"
      :disabled="modalType == 'edit' ? true : false"
    />

    <FormKit
      type="text"
      v-model="showModalForm.religionName"
      name="religionName"
      label="Religion"
      :disabled="modalType == 'edit' ? true : false"
    />
  </rs-modal>
  <!-- Modal Delete Confirmation -->
  <rs-modal
    title="Delete Confirmation"
    ok-title="Yes"
    cancel-title="No"
    :ok-callback="deleteRace"
    v-model="showModalDelete"
    :overlay-close="false"
  >
    <p>
      Are you sure want to delete this Race & Religion{{
        showModalDeleteForm.raceName
      }}?
    </p>
  </rs-modal>
</template>