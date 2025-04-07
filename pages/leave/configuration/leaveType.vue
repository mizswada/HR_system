<script setup>
import { ref } from 'vue';

const data = [
  {
    "name": "Annual Leave",
    "action": "edit",
    "entitlement": "No",
  },
  {
    "name": "Sick Leave",
    "action": "edit",
    "entitlement": "No",
  },
  {
    "name": "Maternity Leave",
    "action": "edit",
    "entitlement": "No",
  },
  {
    "name": "Paternity Leave",
    "action": "edit",
    "entitlement": "No",
  },
  {
    "name": "Study Leave",
    "action": "edit",
    "entitlement": "No",
  },
  {
    "name": "Unpaid Leave",
    "action": "edit",
    "entitlement": "No",
  },
];
const options = ["Yes", "No"];

const showModal = ref(false);
const showModalDelete = ref(false);
const modalType = ref('');
const showModalForm = ref({
  leaveType: '',
  entitlement: 'No', // Default value for entitlement
});
const showModalDeleteForm = ref({
  leaveType: ''
});

const columns = [
  { name: 'name', label: 'Name' },
  { name: 'action', label: 'Actions' }
];

function openModal(value, action) {
  modalType.value = action;
  if (action === 'edit' && value) {
    showModalForm.value = { ...value };
  } else {
    showModalForm.value = {
      leaveType: '',
      entitlement: 'No', // Reset to default value
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

function saveLeaveType() {
  if (modalType.value === 'add') {
    data.push({ ...showModalForm.value, action: 'edit' });
  } else if (modalType.value === 'edit') {
    const index = data.findIndex(item => item.name === showModalForm.value.leaveType);
    if (index !== -1) {
      data[index] = { ...showModalForm.value, action: 'edit' };
    }
  }
  console.log('Save', showModalForm.value);
  showModal.value = false;
}

function deleteLeaveType() {
  const index = data.findIndex(item => item.name === showModalDeleteForm.value.leaveType);
  if (index !== -1) {
    data.splice(index, 1);
  }
  console.log('Delete', showModalDeleteForm.value);
  showModalDelete.value = false;
}
</script>

<template>
  <div class="mb-4">
    <h1 class="text-2xl font-bold">Leave Types</h1>
    <div class="flex justify-end items-center mb-4">
      <rs-button @click="openModal(null, 'add')">
        <Icon name="material-symbols:add" class="mr-1"></Icon>
          Add
      </rs-button>
    </div>
  </div>
  <rs-table
    :data="data"
    :columns="columns"
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
  <rs-modal
    :title="modalType == 'edit' ? 'Edit Leave Type' : 'Add Leave Type'"
    ok-title="Save"
    :ok-callback="saveLeaveType"
    v-model="showModal"
    :overlay-close="false"
  >
    <FormKit
      type="text"
      v-model="showModalForm.leaveType"
      name="leaveType"
      label="Leave Type"
      :disabled="modalType == 'edit' ? true : false"
    />
    <FormKit
      type="radio"
      label="Entitlement"
      help="Is Entitlement Situational?"
      v-model="showModalForm.entitlement"
      :options="options"
    />
  </rs-modal>
  <!-- Modal Delete Confirmation -->
  <rs-modal
    title="Delete Confirmation"
    ok-title="Yes"
    cancel-title="No"
    :ok-callback="deleteLeaveType"
    v-model="showModalDelete"
    :overlay-close="false"
  >
    <p>
      Are you sure want to delete this leaveType {{
        showModalDeleteForm.leaveType
      }}?
    </p>
  </rs-modal>
</template>