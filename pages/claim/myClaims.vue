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
    };
  },
};
</script>
<template>
  <div class="card bg-white p-4 mb-4">
    <RsCollapse>
      <RsCollapseItem title="My Claims" :open="true">
        <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-x-6">
          <FormKit type="text" label="Reference Id" placeholder="Type for hints..."/>
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
      <rs-button @click="openModalClaim(null, 'add')">
        <Icon name="material-symbols:add" class="mr-1"></Icon>
          Create Claim
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
      <template v-slot:action="data">
        <div class="flex justify-center items-center">
          <Icon
            name="material-symbols:edit-outline-rounded"
            class="text-primary hover:text-primary/90 cursor-pointer mr-1"
            size="22"
            @click="openModal(data.value, 'edit')"
          ></Icon>
        </div>
      </template>
    </rs-table>
  </div>
</template>