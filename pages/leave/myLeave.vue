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
      leaveType: [
        "Annual Leave",
        "Compassionate Leave",
        "Medical Leave",
        "Unpaid Leave"
      ],
      selectedStatus: [],
      selectedLeaveType: [],
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
      this.selectedLeaveType = [];
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
  <rs-collapse>
    <rs-collapse-item title="My Leave List">
    <FormKit type="date" v-model="fromDate" label="From Date" />
    <FormKit type="date" v-model="toDate" label="To Date" />
    <p>Show Status with Leave</p>
    <v-select name="statusLeave" :options="statusLeave" multiple v-model="selectedStatus"></v-select>
    <FormKit
            type="select"
            label="Leave Type"
            :options="leaveType"
         />
    <div class="flex justify-end space-x-4 mt-4">
      <button @click="resetFilters" class="bg-blue-500 text-white px-4 py-2 rounded">Reset</button>
      <button @click="searchLeaves" class="bg-green-500 text-white px-4 py-2 rounded">Search</button>
    </div>
</rs-collapse-item>
</rs-collapse>

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