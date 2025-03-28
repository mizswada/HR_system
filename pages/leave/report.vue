<script>
export default {
  data() {
    return {
      formType: 'leave', // 'leave' or 'employee'
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
      location: [
                  { label: "--Select--", value: "st" },
                  { label: "Kuala Lumpur", value: "kl" },
                  { label: "Selangor", value: "sl",  },
                  { label: "Melaka", value: "ml",  },
                  
                ],
      subUnit : [
                  { label: "--Select--", value: "st" },
                  { label: "Unit Developer RnD", value: "RnD" },
                  { label: "Corrad Software", value: "cs",  },
                  { label: "Product", value: "pr",  },
                  
                ],
      jobTitle: ['Manager', 'Developer', 'Analyst'], // Example options
      selectedLeaveType: '',
      selectedPeriod: '',
      selectedLocation: '',
      selectedSubUnit: '',
      selectedJobTitle: '',
      selectedEmployeeName: '',
      selectedEmployeePeriod: ''
    };
  },
  methods: {
    searchLeaves() {
      if (this.formType === 'leave') {
        console.log('Generating Leave Entitlements and Usage Report with the following filters:');
        console.log('Leave Type:', this.selectedLeaveType);
        console.log('Leave Period:', this.selectedPeriod);
        console.log('Location:', this.selectedLocation);
        console.log('Sub Unit:', this.selectedSubUnit);
        console.log('Job Title:', this.selectedJobTitle);
      } else if (this.formType === 'employee') {
        console.log('Generating Employee Leave Report with the following filters:');
        console.log('Employee Name:', this.selectedEmployeeName);
        console.log('Leave Period:', this.selectedEmployeePeriod);
      }
    }
  }
};
</script>
<template>
    <rs-collapse>
        <rs-collapse-item title="Leave Entitlemets and Usage Report">
            <div class="mb-4">
                <label>
                    <input type="radio" value="leave" v-model="formType" /> Leave Type
                </label>
                <label class="ml-4">
                    <input type="radio" value="employee" v-model="formType" /> Employee 
                </label>
            </div>
            <div v-if="formType === 'leave'">
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
                <FormKit
                    type="select"
                    label="Location"
                    :options="location"
                    v-model="selectedLocation"
                />
                <FormKit
                    type="select"
                    label="Sub Unit"
                    :options="subUnit"
                    v-model="selectedSubUnit"
                />
                <FormKit
                    type="select"
                    label="Job Title"
                    :options="jobTitle"
                    v-model="selectedJobTitle"
                />
            </div>
            <div v-else-if="formType === 'employee'">
                <FormKit type="text" label="Employee Name"/>
                <FormKit
                    type="select"
                    label="Leave Period"
                    :options="leavePeriod"
                    v-model="selectedPeriod"
                />
            </div>
            <div class="flex justify-end space-x-4 mt-4">
                <button @click="searchLeaves" class="bg-green-500 text-white px-4 py-2 rounded">Generate</button>
            </div>
        </rs-collapse-item>
    </rs-collapse>
</template>