<script>
export default {
  data() {
    return {
      fromDate: '',
      toDate: '',
      statusLeave: [
        "Rejected",
        "Taken",
        "Pending Approval",
        "Cancelled",
        "Scheduled"
      ],
      leaveType : [
                  { label: "--Select--", value: "st" },
                  { label: "Annual Leave", value: "al" },
                  { label: "Compassionate Leave", value: "cl"},
                  { label: "Medical Leave", value: "ml",  },
                  { label: "Unpaid Leave", value: "ul",  },
      ],
       subUnit : [
                  { label: "--Select--", value: "st" },
                  { label: "Unit Developer RnD", value: "RnD" },
                  { label: "Corrad Software", value: "cs",  },
                  { label: "Product", value: "pr",  },
                  
                ],
      selectedStatus: [],
      selectedLeaveType: [],
      selectedSubUnit: [],
      data: [
        {
          "date": "15/5/2025",
          "employeeName": "Naim Danial",
          "leaveType": "Annual Leave",
          "leaveBalance": "15",
          "numberofDays": "5",
          "status": "Scheduled",
          "comments": "Going to Japan",
          "action": "edit",
        },
      ],
    };
  },
  methods: {
    resetFilters() {
      this.fromDate = '';
      this.toDate = '';
      this.selectedStatus = [];
      this.selectedSubUnit = [];
    },
    searchLeaves() {
      // Implement search logic here
    },
    openModal(value, action) {
      // Implement modal logic here
    },
    openModalDelete(value) {
      // Implement delete modal logic here
    },
  },
};
  </script>
<template>
  <RsCollapse>
    <RsCollapseItem title="Leave List" :open="true">
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-6">
        <FormKit type="date" v-model="fromDate" label="From Date" />
        <FormKit type="date" v-model="toDate" label="To Date" />
        <FormKit
          type="select"
          label="Status Leave"
          :options="statusLeave"
        />
        <FormKit
          type="select"
          label="Leave Type"
          :options="leaveType"
        />
        <!-- Removed extra items to fit 1 row with 4 items -->
      </div>
      <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-6 mt-4">
        <FormKit type="text" label="Employee Name" />
        <FormKit
          type="select"
          label="Sub Unit"
          :options="subUnit"
        />
        <!-- Add additional filters here if needed -->
      </div>
      <div class="col-span-full flex justify-end space-x-4 mt-8">
            <button @click="resetFilters" class="bg-blue-500 text-white px-4 py-2 rounded">Reset</button>
            <button @click="searchLeaves" class="bg-green-500 text-white px-4 py-2 rounded">Search</button>
          </div>
        </RsCollapseItem>
  </RsCollapse>

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
</template>
