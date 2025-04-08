<script>
export default {
  data() {
    return {
      fromDate: '',
      toDate: '',
      options : ["Individual Employee", "Multiple Employees"],      
      leaveType : [
        { label: "--Select--", value: "st" },
        { label: "Annual Leave", value: "al" },
        { label: "Compassionate Leave", value: "cl"},
        { label: "Medical Leave", value: "ml" },
        { label: "Unpaid Leave", value: "ul" },
      ],
      leavePeriod : [
        { label: "--Select--", value: "st" },
        { label: "01-01-2023 - 31-12-2023", value: "2023" },
        { label: "01-01-2024 - 31-12-2024", value: "2024" },
        { label: "01-01-2025 - 31-12-2025", value: "2025" },
        { label: "01-01-2026 - 31-12-2026", value: "2026"},
      ],
      selectedLeaveType: [],
      selectedOptions: [],
      selectedPeriod: [],
    };
  },
  methods: {
    resetFilters() {
      this.fromDate = '';
      this.toDate = '';
      this.selectedLeaveType = [];
      this.selectedOptions = [];
      this.selectedPeriod = [];
    },
    searchLeaves() {
      // Logic to save the leave entitlement
      console.log("Saving leave entitlement with the following details:");
      console.log("From Date:", this.fromDate);
      console.log("To Date:", this.toDate);
      console.log("Selected Leave Type:", this.selectedLeaveType);
      console.log("Selected Options:", this.selectedOptions);
      console.log("Selected Period:", this.selectedPeriod);
    }
  }
};
</script>
<template>
    <div class="outline-container border p-4 mb-4">
        <h5 class="font-bold">Add Leave Entitlement</h5>
        <div class="bg-white p-6 rounded shadow">
            <FormKit
              type="radio"
              label="Add to"
              :options="options"
              input-class="flex space-x-4"
            />
            <FormKit type="text" label="Employee Name"/>
            <FormKit
              type="select"
              label="Leave Type"
              :options="leaveType"
            />
            <FormKit
              type="select"
              label="Leave Period"
              :options="leavePeriod"
            />
            <FormKit type="text" label="Entitlement"/>
            <div class="flex justify-end space-x-4 mt-4">
              <button @click="resetFilters" class="bg-blue-500 text-white px-4 py-2 rounded">Cancel</button>
              <button @click="searchLeaves" class="bg-green-500 text-white px-4 py-2 rounded">Save</button>
            </div>
        </div>
    </div>
</template>