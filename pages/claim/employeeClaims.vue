<script>
export default {
  data() {
    return {
      event: [
        { label: "--Select--", value: "st" },
        { label: "Office", value: "oe" },
        { label: "Training", value: "tr" },
        { label: "Meeting", value: "mt" },
        { label: "Conference", value: "cf" },
        { label: "Workshop", value: "ws" },
      ],
      status: [
        { label: "--Select--", value: "st" },
        { label: "Pending Approval", value: "pa" },
        { label: "Approved", value: "ap" },
        { label: "Rejected", value: "re" },
        { label: "Cancelled", value: "ca" },
      ],
      include: [
        { label: "Current Employees Only", value: "ce" },
        { label: "Current and Past Employees", value: "cpe" },
        { label: "Past Employees Only", value: "pe" },
      ],
      fromDate: null,
      toDate: null,
      data: [
        {
          "ReferenceID": "202504100000011",
          "employeeName": "Firdaus Ahmad",
          "eventName": "Office",
          "expenseTypes": "Petrol",
          "currency": "Malaysia Ringgit",
          "submittedDate": "20/5/2025",
          "status": "Pending Approval",
          "amount": "40.00",
          "attachments": "Receipt.pdf",
          "action": "edit",
        },

        {
          "ReferenceID": "202504100000014",
          "employeeName": "Arif Kamil",
          "eventName": "Office",
          "expenseTypes": "Airfare",
          "currency": "Malaysia Ringgit",
          "submittedDate": "14/5/2025",
          "status": "Approved",
          "amount": "250.00",
          "attachments": "Receipt.pdf",
          "action": "edit",
        },
      ],
    };

    
  },
  methods: {
    navigateToAssignClaim() {
      this.$router.push('/claim/assignClaim');
    },
  },
};
</script>
<template>
  <div class="card bg-white p-4 mb-4">
    <RsCollapse>
      <RsCollapseItem title="Employee Claims" :open="true">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-6">
          <FormKit type="text" label="Employee Name" placeholder="Type for hints..." />
          <FormKit type="text" label="Reference Id" placeholder="Type for hints..." />
          <FormKit
              type="select"
              label="Event Name"
              :options="event"
              v-model="event"
          />
          <FormKit
              type="select"
              label="Status"
              :options="status"
              v-model="status"
          />
          <FormKit type="date" v-model="fromDate" label="From Date" />
          <FormKit type="date" v-model="toDate" label="To Date" />
          <FormKit
              type="select"
              label="Include"
              :options="include"
              v-model="include"
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
      <rs-button @click="navigateToAssignClaim">
        <Icon name="material-symbols:add" class="mr-1"></Icon>
          Assign Claim
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
    <template v-slot:attachments="{ value }">
        <a :href="value.attachments" target="_blank" class="text-blue-500 underline">
          View Attachment
        </a>
      </template>
      <template v-slot:action="{ value }">
        <div class="flex justify-center items-center">
          <Icon
            name="material-symbols:edit-outline-rounded"
            class="text-primary hover:text-primary/90 cursor-pointer mr-1"
            size="22"
            @click="openModal(value, 'edit')"
          ></Icon>
        </div>
      </template>
    </rs-table>
  </div>
</template>