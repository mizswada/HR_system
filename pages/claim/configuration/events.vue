<script>
export default {
  data() {
    return {
      status: [
        { label: "--Select--", value: "st" },
        { value: 'active', label: 'Active' },
        { value: 'inactive', label: 'Inactive' },
      ],
      data: [
        {
          "name": "Office",
          "status": "Active",
          "action": "edit",
        },

        {
          "name": "Meeting",
          "status": "Active",
          "action": "edit",
        },
      ],
      showModal: false,
      modalType: '',
      showModalForm: {
        eventName: '',
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
      if (type === 'edit' && data) {
        this.showModalForm = { ...data };
      } else {
        this.showModalForm = {
          eventName: '',
          description: '',
          status: '',
        };
      }
      this.showModal = true;
    },
    openModalDelete(data) {
      // Logic to handle delete modal
    },
    saveSkill() {
      if (this.modalType === 'add') {
        // Logic to add a new event
        this.data.push({ ...this.showModalForm });
      } else if (this.modalType === 'edit') {
        // Logic to edit an existing event
        const index = this.data.findIndex(
          (item) => item.eventName === this.showModalForm.eventName
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
  <div class="card bg-white p-4 mb-4">
    <RsCollapse>
      <RsCollapseItem title="Employee Claims" :open="true">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-6">
          <FormKit type="text" label="Event Name" placeholder="Type for hints..."/>
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
      </RsCollapseItem>
    </RsCollapse>
  </div>

  <div class="card bg-white p-4 mb-4">
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
  </div>

  <rs-modal
    :title="modalType == 'edit' ? 'Edit Event' : 'Add Event'"
    ok-title="Save"
    :ok-callback="saveSkill"
    v-model="showModal"
    :overlay-close="false"
  >
    <FormKit
      type="text"
      v-model="showModalForm.eventName"
      name="eventName"
      label="Event Name"
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