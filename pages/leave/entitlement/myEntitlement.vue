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
      data: [
        {
          "leaveType": "Annual Leave",
          "entitlementType": "Annual Leave",
          "validFrom": "1-1-2025",
          "validTo": "31-12-2025",
          "days": "3",
          "action": "edit",
        },
      ],
      field: [
        { key: 'leaveType', label: 'Leave Type' },
        { key: 'entitlementType', label: 'Entitlement Type' },
        { key: 'validFrom', label: 'Valid From' },
        { key: 'validTo', label: 'Valid To' },
        { key: 'days', label: 'Days' },
        { key: 'action', label: 'Action' },
      ],
      filteredData: [], // To store filtered results
      selectedLeaveType: [],
      selectedOptions: [],
      selectedPeriod: [],
    };
  },
  methods: {
    navigateToAddEntitlement() {
      this.$router.push('/leave/entitlement/addEntitlement'); // Adjust the path as needed
    },
    searchLeaves() {
      // Filter data based on selectedLeaveType and selectedPeriod
      const leaveType = this.selectedLeaveType[0]?.value || null;
      const leavePeriod = this.selectedPeriod[0]?.value || null;

      this.filteredData = this.data.filter((item) => {
        const matchesLeaveType = leaveType ? item.leaveType === leaveType : true;
        const matchesLeavePeriod = leavePeriod
          ? item.validFrom.includes(leavePeriod) || item.validTo.includes(leavePeriod)
          : true;
        return matchesLeaveType && matchesLeavePeriod;
      });

      console.log('Filtered data:', this.filteredData);
    },
    openModal(rowData, action) {
      // Logic to handle opening a modal for editing or viewing details
      console.log(`Opening modal for ${action} with data:`, rowData);
    },
    openModalDelete(rowData) {
      // Logic to handle opening a confirmation modal for deletion
      console.log('Opening delete confirmation modal for:', rowData);
    },
  },
};
</script>
<template>
    <rs-collapse>
        <rs-collapse-item title="Employee Entitlement">
    
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
                    <div class="flex justify-end space-x-4 mt-4">
                        <button @click="searchLeaves" class="bg-green-500 text-white px-4 py-2 rounded">Search</button>
                    </div>
            </rs-collapse-item>
            </rs-collapse>
            <div class="mb-4">
    <div class="flex justify-start items-center mb-4">
      <rs-button @click="navigateToAddEntitlement">
        <Icon name="material-symbols:add" class="mr-1"></Icon>
          Add
      </rs-button>
    </div>
  </div>
  <rs-table
  :field="field"
                        :data="filteredData.length ? filteredData : data"
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