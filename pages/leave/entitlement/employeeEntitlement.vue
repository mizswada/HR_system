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

      data: [
        {
          "leaveType": "Annual Leave",
          "entitlementType": "Added",
          "validFrom": "01-01-2025",
          "validTo": "31-12-2025",
          "Days": "5",
          "action": "edit",
        },
      ],
    };
  },
  methods: {
    searchLeaves() {
      console.log("Selected Leave Type:", this.selectedLeaveType);
      console.log("Selected Leave Period:", this.selectedPeriod);
    },
    navigateToEmployeeEntitlement() {
      this.$router.push('/leave/entitlement/addEntitlement');
    },
  },
};
</script>
<template>
    <RsCollapse>
      <RsCollapseItem title="Employee Entititlement" :open="true">
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
        </RsCollapseItem>
      </RsCollapse>

      <div class="card bg-white p-4 mb-4">
    <div class="flex justify-start items-center mb-4">
      <rs-button @click="navigateToEmployeeEntitlement">
        <Icon name="material-symbols:add" class="mr-1"></Icon>
          Add
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
      <template v-slot:action="{ value }">
        <div class="flex justify-center items-center">
          <Icon
            name="material-symbols:edit-outline-rounded"
            class="text-primary hover:text-primary/90 cursor-pointer mr-1"
            size="22"
            @click="openModal(value, 'edit')"
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
  </div>
</template>