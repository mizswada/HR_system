<script>
export default {
  data() {
    return {
      date: null, // Default value for date fields
      nationality: [
        { value: 'us', label: 'United States' },
        { value: 'ca', label: 'Canada' },
        // Add more options as needed
      ],
      maritalStatus: [
        { value: 'single', label: 'Single' },
        { value: 'married', label: 'Married' },
        // Add more options as needed
      ],
      gender: [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
        // Add more options as needed
      ],
      smoker: [
        { value: true, label: 'Yes' },
      ],
      field: [], // Placeholder for table fields
      data: [], // Placeholder for table data
      showModal: false, // Controls the visibility of the modal
      modalType: '', // Tracks whether the modal is for 'add' or 'edit'
    };
  },
  methods: {
    openModal(data, action) {
      // Implement modal logic here
      this.modalType = action;
      this.showModal = true;
    },
    searchLeaves() {
      // Implement save logic here
    },
    openModalDelete(data) {
      // Logic to handle delete action
      if (confirm('Are you sure you want to delete this item?')) {
        // Perform delete operation here
        console.log('Deleted item:', data);
      }
    },
    saveattachments() {
      // Logic to save attachments
      console.log('Saving attachments...');
      this.showModal = false; // Close the modal after saving
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
        <h5 class="font-bold">Personal Details</h5>
        <FormKit type="text" label="Employee Full Name" validation="required"/>
        <FormKit type="text" label="Nickname"/>
        <FormKit type="text" label="Employee Id"/>
        <FormKit type="text" label="Other Id"/>
        <FormKit type="text" label="Driver's License Number"/>
        <FormKit type="date" :value="date" label="License Expiry Date" />
        <FormKit type="text" label="SSN Number"/>
        <FormKit type="text" label="SIN Number"/>
                <FormKit
                  type="select"
                  label="Nationality"
                  :options="nationality"
                />
                <FormKit
                  type="select"
                  label="Marital Status"
                  :options="maritalStatus"
                />
                <FormKit type="date" :value="date" label="Date of Birth" />
                <FormKit
                  type="radio"
                  label="Gender"
                  :options="gender"
                />
                <FormKit type="text" label="Military Service"/>

                <FormKit
                  type="checkbox"
                  label="Smoker"
                  :options="smoker"
                />
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