<script>
export default {
  data() {
    return {
      fromDate: '',
      toDate: '',
      leaveType : [
                  { label: "--Select--", value: "st" },
                  { label: "Annual Leave", value: "al" },
                  { label: "Compassionate Leave", value: "cl"},
                  { label: "Medical Leave", value: "ml",  },
                  { label: "Unpaid Leave", value: "ul",  },
      ],
      
      selectedLeaveType: [],
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
    <div class="outline-container border p-4 mb-4">
        <h5>Apply Leave</h5>
        <div class="bg-white p-6 rounded shadow">
            <FormKit
                type="select"
                label="Leave Type"
                :options="leaveType"
            />
            <FormKit type="date" v-model="fromDate" label="From Date" />
            <FormKit type="date" v-model="toDate" label="To Date" />
            <FormKit type="textarea" placeholder="" rows="3" label="Comments"/>
            <div class="flex justify-end space-x-4 mt-4">
                <button @click="searchLeaves" class="bg-green-500 text-white px-4 py-2 rounded">Apply</button>
            </div>
        </div>
    </div>
</template>