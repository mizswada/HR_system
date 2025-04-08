<script>
export default {
  data() {
    return {

        leaveType :[

                  { label: "--Select--", value: "st" },
                  { label: "Annual Leave", value: "al" },
                  { label: "Compassionate Leave", value: "cl"},
                  { label: "Medical Leave", value: "ml",  },
                  { label: "Unpaid Leave", value: "ul",  },
      ],

      leavePeriod : [
                  { label: "--Select--", value: "st" },
                  { label: "01-01-2023 - 31-12-2023", value: "2023" },
                  { label: "01-01-2024 - 31-12-2024", value: "2024" },
                  { label: "01-01-2025 - 31-12-2025", value: "2025" },
                  { label: "01-01-2026 - 31-12-2026", value: "2026"},
                  
      ],
      selectedLeaveType: [],
      selectedPeriod: [],
    };
  },
  methods: {
    searchLeaves() {
      console.log("Selected Leave Type:", this.selectedLeaveType);
      console.log("Selected Leave Period:", this.selectedPeriod);
    },
  },
};
</script>
<template>
    <rs-collapse>
        <rs-collapse-item title="Employee Entitlement">
          <h5 class="font-bold">Leave Entitlement</h5>
          <div class="bg-white p-6 rounded shadow">
            <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-5 gap-x-6">
              <FormKit type="text" label="Employee Name"/>
              <FormKit
                  type="select"
                  label="Leave Type"
                  :options="leaveType"
                  v-model="selectedLeaveType"
              />
              <FormKit
                  type="select"
                  label="Leave Period"
                  :options="leavePeriod"
                  v-model="selectedPeriod"
              />
              <div class="space-x-4 mt-8">
                <button @click="searchLeaves" class="bg-green-500 text-white px-4 py-2 rounded">Search</button>
              </div>
            </div>
          </div>
        </rs-collapse-item>
    </rs-collapse>
</template>