<script setup>
import { ref } from 'vue';

const attachmentsRecords = ref([
  { id: 1, attachment: 'Resume.pdf' },
  { id: 2, attachment: 'CoverLetter.docx' }
]);
const showAttachmentsModal = ref(false);
const selectedAttachments = ref([]);
let editingAttachment = null;

const membershipsRecords = ref([
  { id: 1, membership: 'Premium Club' },
  { id: 2, membership: 'Gold Membership' }
]);
const showMembershipModal = ref(false);
let editingMembership = null;

const openAttachmentsModal = (record = null) => {
  if (record) {
    editingAttachment = record;
  } else {
    editingAttachment = null;
  }
  showAttachmentsModal.value = true;
};

const saveAttachment = () => {
  if (editingAttachment) {
    // Update existing record logic
  } else {
    attachmentsRecords.value.push({ id: Date.now(), attachment: 'New Attachment' });
  }
  showAttachmentsModal.value = false;
};

const deleteAttachment = (record) => {
  attachmentsRecords.value = attachmentsRecords.value.filter(ar => ar.id !== record.id);
};

const deleteSelectedAttachments = () => {
  attachmentsRecords.value = attachmentsRecords.value.filter(ar => !selectedAttachments.value.includes(ar.id));
  selectedAttachments.value = [];
};

const openMembershipModal = (record = null) => {
  if (record) {
    editingMembership = record;
  } else {
    editingMembership = null;
  }
  showMembershipModal.value = true;
};

const saveMembership = () => {
  if (editingMembership) {
    // Update existing record logic
  } else {
    membershipsRecords.value.push({ id: Date.now(), membership: 'New Membership' });
  }
  showMembershipModal.value = false;
};

const deleteMembership = (record) => {
  membershipsRecords.value = membershipsRecords.value.filter(mr => mr.id !== record.id);
};
</script>

<template>
  <div class="p-4">
    <rs-card class="p-4 mt-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Attachments</h1>
        <button class="bg-green-600 text-white py-2 px-4 rounded-full" @click="openAttachmentsModal()" style="font-family: Arial;">+ Add</button>
      </div>
      <hr class="mb-4">
      <p class="text-gray-600 mb-4" style="font-family: Arial;">({{ attachmentsRecords.length }}) Records Found</p>
      <div class="flex justify-between items-center mb-4">
        <p class="text-gray-600" style="font-family: Arial;">({{ selectedAttachments.length }}) Records Selected</p>
        <button v-if="selectedAttachments.length > 0" class="bg-red-400 text-white py-2 px-4 rounded-full" @click="deleteSelectedAttachments" style="font-family: Arial;">Delete Selected</button>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <rs-card v-for="record in attachmentsRecords" :key="record.id" class="p-4 bg-gray-100 rounded-lg relative">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <input type="checkbox" v-model="selectedAttachments" :value="record.id" />
              <div>
                <h6 class="font-semibold text-gray-700" style="font-family: Arial;">Attachment</h6>
                <p class="text-gray-500 text-lg" style="font-family: Arial;">{{ record.attachment }}</p>
              </div>
            </div>
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
              <button class="bg-green-200 text-gray-700 p-2 rounded-full" @click="editAttachment(record)">
                <Icon name="material-symbols:edit-outline-rounded" class="text-lg"></Icon>
              </button>
              <button class="bg-red-200 text-gray-700 p-2 rounded-full" @click="deleteAttachment(record)">
                <Icon name="material-symbols:delete-outline" class="text-lg"></Icon>
              </button>
            </div>
          </div>
        </rs-card>
      </div>

      <rs-modal title="Add Attachments" v-model="showAttachmentsModal" ok-title="Save" :ok-callback="saveAttachment">
        <FormKit
          type="file"
          label="Documents"
          accept=".pdf,.doc,.docx,.xml,.md,.csv"
          help="Select as many documents as you would like."
        />
        <FormKit type="textarea" placeholder="Type your comment here ..." label="Comment" help="Enter a comment about the document." />
      </rs-modal>
    </rs-card>

    <rs-card class="p-4 mt-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Memberships</h1>
        <button class="bg-green-600 text-white py-2 px-4 rounded-full" @click="openMembershipModal()" style="font-family: Arial;">+ Add</button>
      </div>
      <hr class="mb-4">
      <p class="text-gray-600 mb-4" style="font-family: Arial;">({{ membershipsRecords.length }}) Records Found</p>
      <div class="grid grid-cols-1 gap-4">
        <rs-card v-for="record in membershipsRecords" :key="record.id" class="p-4 bg-gray-100 rounded-lg relative">
          <div class="flex justify-between items-center">
            <div>
              <h6 class="font-semibold text-gray-700" style="font-family: Arial;">Membership</h6>
              <p class="text-gray-500 text-lg" style="font-family: Arial;">{{ record.membership }}</p>
            </div>
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
              <button class="bg-green-200 text-gray-700 p-2 rounded-full" @click="editMembership(record)">
                <Icon name="material-symbols:edit-outline-rounded" class="text-lg"></Icon>
              </button>
              <button class="bg-red-200 text-gray-700 p-2 rounded-full" @click="deleteMembership(record)">
                <Icon name="material-symbols:delete-outline" class="text-lg"></Icon>
              </button>
            </div>
          </div>
        </rs-card>
      </div>

      <rs-modal title="Add Membership" v-model="showMembershipModal" ok-title="Save" :ok-callback="saveMembership">
     
          <FormKit
            type="select"
            label="Membership*"
            :options="[{ label: '-- Select --', value: '' }, 'Premium Club', 'Gold Membership']"
            style="font-family: Arial;"
          />
          <FormKit
            type="select"
            label="Subscription Paid By"
            :options="[{ label: '-- Select --', value: '' }, 'Company', 'Employee']"
            style="font-family: Arial;"
          />
          <FormKit
            type="text"
            label="Subscription Amount"
            style="font-family: Arial;"
          />
          <FormKit
            type="select"
            label="Currency"
            :options="[{ label: '-- Select --', value: '' }, 'USD', 'EUR', 'GBP']"
            style="font-family: Arial;"
          />
          <FormKit
            type="date"
            label="Subscription Commence Date"
            style="font-family: Arial;"
          />
          <FormKit
            type="date"
            label="Subscription Renewal Date"
            style="font-family: Arial;"
          />
      
      </rs-modal>
    </rs-card>
  </div>
</template>

<style scoped>
.rs-card {
  border-radius: 10px;
  font-family: Arial;
}
</style>
