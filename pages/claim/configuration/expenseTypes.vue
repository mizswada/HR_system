<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      status: [
        { label: "--Select--", value: "st" },
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
      ],
      field: [
        { key: 'expenseType', label: 'Expense Type' },
        { key: 'description', label: 'Description' },
        { key: 'status', label: 'Status' },
        { key: 'action', label: 'Action' },
      ],
      data: [],
      showModal: false,
      modalType: '',
      showModalForm: {
        expenseType: '',
        description: '',
        status: '',
      },
    };
  },
  methods: {
    resetFilters() {
      // Logic to reset filters
    },
    searchLeaves() {
      // Logic to search leaves
    },
    openModal(data, type) {
      this.modalType = type;
      if (type === 'edit') {
        this.showModalForm = { ...data };
      } else {
        this.showModalForm = {
          expenseType: '',
          description: '',
          status: '',
        };
      }
      this.showModal = true;
    },
    openModalDelete(data) {
      // Logic to handle delete modal
    },
    saveExpense() {
      if (this.modalType === 'add') {
        // Logic to add a new expense
        this.data.push({ ...this.showModalForm });
      } else if (this.modalType === 'edit') {
        // Logic to edit an existing expense
        const index = this.data.findIndex(
          (item) => item.expenseType === this.showModalForm.expenseType
        );
        if (index !== -1) {
          this.data[index] = { ...this.showModalForm };
        }
      }
      this.showModal = false;
    },
  },
};
</script>
<template>
    <rs-collapse>
        <rs-collapse-item title="Expense Types">
          <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-6">
            <FormKit type="text" label="Name" placeholder="Type for hints..."/>
            <FormKit
                type="select"
                label="Status"
                :options="status"
                v-model="status" 
            />
            <div class="col-span-full flex justify-end space-x-4 mt-8">
              <button @click="resetFilters" class="bg-blue-500 text-white px-4 py-2 rounded">Reset</button>
              <button @click="searchLeaves" class="bg-green-500 text-white px-4 py-2 rounded">Search</button>
            </div>
          </div>
        </rs-collapse-item>
    </rs-collapse>

    <div class="flex justify-start items-center mb-4">
      <rs-button @click="openModal(null, 'add')">
        <Icon name="material-symbols:add" class="mr-1"></Icon>
          Add
      </rs-button>
    </div>

    <rs-table
  :field="field"
                        :data="data"
                        :options="{
                          variant: 'default',
                          striped: true,
                          borderless: true,
                          hover: true,
                          fixed: false,
                        }"
                        basic
  >
    <template v-slot:action="data">
      <div class="flex justify-center items-center">
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
    :title="modalType == 'edit' ? 'Edit Expense' : 'Add Expense'"
    ok-title="Save"
    :ok-callback="saveExpense"
    v-model="showModal"
    :overlay-close="false"
  >
    <FormKit
      type="text"
      v-model="showModalForm.expenseType"
      name="expenseType"
      label="Expense Type"
      :disabled="modalType == 'edit' ? true : false"
    />
    <FormKit
      type="textarea"
      v-model="showModalForm.description"
      name="description"
      label="Description"
    />
    <FormKit
      type="select"
      v-model="showModalForm.status"
      name="status"
      label="Status"
      :options="status"
    />
  </rs-modal>
</template>