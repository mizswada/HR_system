<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      countryOptions: [
        { value: 'US', label: 'United States' },
        { value: 'CA', label: 'Canada' },
        { value: 'UK', label: 'United Kingdom' },
        // Add more countries as needed
      ],
      field: [
        { key: 'name', label: 'File Name' },
        { key: 'comment', label: 'Comment' },
        { key: 'action', label: 'Action' },
      ],
      data: [], // Table data for attachments
      showModal: false,
      modalType: null,
    };
  },
  methods: {
    openModal(data, type) {
      this.modalType = type;
      this.showModal = true;
      // Handle data for edit if needed
    },
    openModalDelete(data) {
      // Handle delete confirmation logic
      console.log('Delete attachment:', data);
    },
    saveattachments() {
      // Logic to save attachments
      console.log('Attachments saved');
      this.showModal = false;
    },
    searchLeaves() {
      // Logic to save contact details
      console.log('Contact details saved');
    },
  },
};
</script>
<template>
    <div class="outline-container border p-4 mb-4">
        <div class="flex items-center mb-4">
            <img src="/path/to/default-profile.jpg" alt="Profile Picture" class="w-24 h-24 rounded-full mr-4" />
            <h5 class="font-bold text-lg">John Doe</h5>
        </div>
        <h5 class="font-bold">Contact Details</h5>
        <h6 class="font-bold">Address</h6>
        <FormKit type="text" label="Street 1"/>
        <FormKit type="text" label="Street 2"/>
        <FormKit type="text" label="City"/>
        <FormKit type="text" label="State/Province"/>
        <FormKit type="text" label="Zip/Postal Code"/>
        <FormKit type="select" 
                 label="Country"
                 options="countryOptions"
                 placeholder="--Select--"
        />

        <h6 class="font-bold">Telephone</h6>
        <FormKit type="text" label="Home"/>
        <FormKit type="text" label="Mobile"/>
        <FormKit type="text" label="Work"/>

        <h6 class="font-bold">Email</h6>
        <FormKit type="text" label="Work Email"/>
        <FormKit type="text" label="Other Email"/>

        <div class="col-span-full flex justify-end space-x-4 mt-8">
                    <button @click="searchLeaves" class="bg-green-500 text-white px-4 py-2 rounded">Save</button>
        </div>
    </div>

    <div class="outline-container border p-4 mb-4">
        <div class="flex justify-between items-center mb-4">
            <h5 class="font-bold">Attachments</h5>
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
    :title="modalType == 'edit' ? 'Edit Attachments' : 'Add Attachments'"
    ok-title="Save"
    :ok-callback="saveattachments"
    v-model="showModal"
    :overlay-close="false"
  >
                <FormKit
                  type="file"
                  label="Select File"
                  validation="required"
                  accept=".pdf,.doc,.docx,.xml,.md,.csv"
                  help="Accept up to 1MB"
                />

                <FormKit type="textarea" placeholder="Type comment here" label="Comment"/>
  </rs-modal>
    </div>
</template>