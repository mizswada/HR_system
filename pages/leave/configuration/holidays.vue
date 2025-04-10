<script>
export default {
  data() {
    return {
      data: [
        {
          name: "John Doe",
          date: "15/5/2025",
          "fullDay/HalfDay": "Full Day",
          repeatsAnnualy: "No",
          action: "edit",
        },
      ],
      showModal: false,
      modalType: null,
      fromDate: null,
      toDate: null,
      options: [
        { value: "Yes", label: "Yes" },
        { value: "No", label: "No" },
      ],
    };
  },
  methods: {
    openModal(data, type) {
      this.modalType = type;
      this.showModal = true;
      if (type === "edit" && data) {
        // Populate form fields with data for editing
        this.fromDate = data.date;
        this.toDate = data.date; // Adjust as needed
      } else {
        // Reset form fields for adding
        this.fromDate = null;
        this.toDate = null;
      }
    },
    saveHolidays() {
      // Logic to save holiday data
      this.showModal = false;
    },
    openModalDelete(data) {
      // Logic to handle delete confirmation
      console.log("Delete holiday:", data);
    },
    resetFilters() {
      this.fromDate = null;
      this.toDate = null;
    },
    searchLeaves() {
      // Logic to filter holiday data
      console.log("Search holidays from", this.fromDate, "to", this.toDate);
    },
  },
};
</script>
<template>
  <div class="bg-white p-4 rounded shadow mb-4">
    <RsCollapse>
      <RsCollapseItem title="Holidays" :open="true">
        <div class="grid grid-cols-1 lg:grid-cols-4 gap-x-6">
          <FormKit type="date" v-model="fromDate" label="From Date" />
          <FormKit type="date" v-model="toDate" label="To Date" />
          <div class="space-x-4 mt-8">
            <button @click="resetFilters" class="bg-blue-500 text-white px-4 py-2 rounded">Reset</button>
            <button @click="searchLeaves" class="bg-green-500 text-white px-4 py-2 rounded">Search</button>
          </div>
        </div>
      </RsCollapseItem>
    </RsCollapse>
  </div>
  <div class="bg-white p-4 rounded shadow mb-4">
    <div class="flex justify-start items-center mb-4">
      <rs-button @click="openModal(null, 'add')">
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
  </div>
  <rs-modal
    :title="modalType == 'edit' ? 'Edit Holidays' : 'Add Holidays'"
    ok-title="Save"
    :ok-callback="saveHolidays"
    v-model="showModal"
    :overlay-close="false"
  >
    <FormKit type="text" label="Employee Name" />
    <FormKit type="date" v-model="fromDate" label="From Date" />
    <FormKit type="date" v-model="toDate" label="To Date" />
    <FormKit type="radio" label="Repeats Annualy" :options="options" />
  </rs-modal>
</template>