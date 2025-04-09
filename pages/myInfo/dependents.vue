<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      field: [
        { key: 'name', label: 'Name' },
        { key: 'relationship', label: 'Relationship' },
        { key: 'dateOfBirth', label: 'Date of Birth' },
        { key: 'action', label: 'Action' },
      ],
      data: [], // Replace with actual data source
      relationship: [
        { value: 'spouse', label: 'Spouse' },
        { value: 'child', label: 'Child' },
        { value: 'other', label: 'Other' },
      ],
      showDependentModal: false,
      showAttachmentModal: false,
      modalType: '',
      selectedData: null,
    };
  },
  methods: {
    openModalDependent(data, type) {
      this.selectedData = data;
      this.modalType = type;
      this.showDependentModal = true;
    },
    openModalDeleteDependent(data) {
      if (confirm('Are you sure you want to delete this dependent?')) {
        // Implement delete logic here
        console.log('Deleted Dependent:', data);
      }
    },
    saveDependent() {
      // Implement save logic for dependents here
      console.log('Saved Dependent:', this.selectedData);
      this.showDependentModal = false;
    },
    openModalAttachment(data, type) {
      this.selectedData = data;
      this.modalType = type;
      this.showAttachmentModal = true;
    },
    openModalDeleteAttachment(data) {
      if (confirm('Are you sure you want to delete this attachment?')) {
        // Implement delete logic here
        console.log('Deleted Attachment:', data);
      }
    },
    saveAttachments() {
      // Implement save logic for attachments here
      console.log('Saved Attachment:', this.selectedData);
      this.showAttachmentModal = false;
    },
  },
};
</script>
<template>
    <div class="outline-container border p-4 mb-4">
        <div class="flex justify-between items-center mb-4">
            <h5 class="font-bold">Add Dependent</h5>
            <rs-button @click="openModalDependent(null, 'add')">
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
            @click="openModalDependent(data.value, 'edit')"
          ></Icon>
          <Icon
              name="material-symbols:close-rounded"
              class="text-primary hover:text-primary/90 cursor-pointer"
              size="22"
              @click="openModalDeleteDependent(data.value)"
            ></Icon>
        </div>
      </template>
    </rs-table>
    <rs-modal
    :title="modalType == 'edit' ? 'Edit Dependent' : 'Add Dependent'"
    ok-title="Save"
    :ok-callback="saveDependent"
    v-model="showDependentModal"
    :overlay-close="false"
  >
                <FormKit 
                  type="text" 
                  label="Name"
                  validation="required"
                  validation-visibility="dirty"
                />

                <FormKit
                  type="select"
                  label="Relationship"
                  aria-placeholder="--Select--"
                  validation="required"
                  :options="relationship"
                />
                <FormKit type="date" :value="date" label="Date of Birth" />
  </rs-modal>

    </div>
    <div class="outline-container border p-4 mb-4">
        <div class="flex justify-between items-center mb-4">
            <h5 class="font-bold">Attachments</h5>
            <rs-button @click="openModalAttachment(null, 'add')">
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
            @click="openModalAttachment(data.value, 'edit')"
          ></Icon>
          <Icon
              name="material-symbols:close-rounded"
              class="text-primary hover:text-primary/90 cursor-pointer"
              size="22"
              @click="openModalDeleteAttachment(data.value)"
            ></Icon>
        </div>
      </template>
    </rs-table>
    <rs-modal
    :title="modalType == 'edit' ? 'Edit Attachments' : 'Add Attachments'"
    ok-title="Save"
    :ok-callback="saveAttachments"
    v-model="showAttachmentModal"
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