<script>
import { ref } from 'vue';

export default {
  data() {
    return {

      immigrationData: [
        {
          document: "Passport",
          number: "A12345678",
          issuedBy: "United States",
          eligibleReviewDate: "2025-12-01",
          action: "edit",
        },
      ],
      attachmentsData: [
        {
          fileName: "ImmigrationDocument.pdf",
          uploadedDate: "2023-10-01",
          comment: "Passport scan",
          action: "edit",
        },
      ],
      document: [
        { value: 'passport', label: 'Passport' },
        { value: 'visa', label: 'Visa' },
      ],
      country: [
        { value: 'us', label: 'United States' },
        { value: 'ca', label: 'Canada' },
      ],
      modalType: '',
      showImmigrationModal: false,
      showAttachmentModal: false,
      selectedData: null,
    };
  },
  methods: {
    openModalImmigration(record, type) {
      this.modalType = type;
      this.showImmigrationModal = true;
      // Handle record data if editing
    },
    saveImmigration() {
      // Logic to save immigration record
      this.showImmigrationModal = false;
    },
    openModalDeleteImmigration(record) {
      // Logic to handle deletion of immigration record
    },
    openModalAttachment(record, type) {
      this.modalType = type;
      this.showAttachmentModal = true;
      // Handle record data if editing
    },
    saveAttachments() {
      // Logic to save attachment
      this.showAttachmentModal = false;
    },
    openModalDeleteAttachment(record) {
      // Logic to handle deletion of attachment
    },
  },
};
</script>
<template>
    <div class="outline-container border p-4 mb-4">
        <div class="flex justify-between items-center mb-4">
            <h5 class="font-bold">Assigned Immigration Records</h5>
            <rs-button @click="openModalImmigration(null, 'add')">
                <Icon name="material-symbols:add" class="mr-1"></Icon>
                Add
            </rs-button>
        </div>
        <rs-table
      :field="field"
      :data="immigrationData"
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
            @click="openModalImmigration(data.value, 'edit')"
          ></Icon>
          <Icon
              name="material-symbols:close-rounded"
              class="text-primary hover:text-primary/90 cursor-pointer"
              size="22"
              @click="openModalDeleteImmigration(data.value)"
            ></Icon>
        </div>
      </template>
    </rs-table>
    <rs-modal
    :title="modalType == 'edit' ? 'Edit Immigration Records' : 'Add Immigration Records'"
    ok-title="Save"
    :ok-callback="saveImmigration"
    v-model="showImmigrationModal"
    :overlay-close="false"
  >             <FormKit
                  type="radio"
                  label="Document"
                  :options="document"
                />
                <FormKit 
                  type="text" 
                  label="Number"
                  validation="required"
                  validation-visibility="dirty"
                />
                <FormKit type="date" :value="date" label="Date of Birth" />
                <FormKit type="date" :value="date" label="Date of Birth" />
                <FormKit 
                  type="text" 
                  label="Eligible Status"
                  validation-visibility="dirty"
                />
                <FormKit
                  type="select"
                  label="Issued By"
                  aria-placeholder="--Select--"
                  validation="required"
                  :options="country"
                />
                <FormKit type="date" :value="date" label="Eligible Review Date" />
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
      :data="attachmentsData"
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