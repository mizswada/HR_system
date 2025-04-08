<script>
export default {
    data() {
    return {
      startMonth : [
                  { label: "--Select--", value: "st" },
                  { label: "January", value: "jan" },
                  { label: "February", value: "feb"},
                  { label: "March", value: "mar",  },
                  { label: "April", value: "apr",  },
                  { label: "May", value: "may",  },
                  { label: "June", value: "jun",  },
                  { label: "July", value: "jul",  },
                  { label: "August", value: "aug",  },
                  { label: "September", value: "sep",  },
                  { label: "October", value: "oct",  },
                  { label: "November", value: "nov",  },
                  { label: "December", value: "dec",  },
    ],
    startDate : [
                  { label: "--Select--", value: "st" },
                  { label: "1", value: "1" },
                  { label: "2", value: "2"},
                  { label: "3", value: "3",  },
                  { label: "4", value: "4",  },
                  { label: "5", value: "5",  },
                  { label: "6", value: "6",  },
                  { label: "7", value: "7",  },
                  { label: "8", value: "8",  },
                  { label: "9", value: "9",  },
                  { label: "10", value: "10",  },
                  { label: "11", value: "11",  },
                  { label: "12", value: "12",  },
                  { label: "13", value: "13",  },
                  { label: "14", value: "14",  },
                  { label: "15", value: "15",  },
                  { label: "16", value: "16",  },
                  { label: "17", value: "17",  },
                  { label: "18", value: "18",  },
                  { label: "19", value: "19",  },
                  { label: "20", value: "20",  },
                  { label: "21", value: "21",  },
                  { label: "22", value: "22",  },
                  { label: "23", value: "23",  },
                  { label: "24", value: "24",  },
                  { label: "25", value: "25",  },
                  { label: "26", value: "26",  },
                  { label: "27", value: "27",  },
                  { label: "28", value: "28",  },
                  { label: "29", value: "29",  },
                  { label: "30", value: "30",  },
                  { label: "31", value: "31",  },
                ],
      selectedstartDate: [],
      selectedstartMonth: [],
    };
  },
  methods: {
    resetFilters() {
      this.selectedstartMonth = [];
      this.selectedstartDate = [];
    },
    searchLeaves() {
      console.log("Selected Start Month:", this.selectedstartMonth);
      console.log("Selected Start Date:", this.selectedstartDate);
      // Add logic to save or process the selected values
    }
  }
};
</script>
<template>
  <div class="bg-white p-4 rounded shadow mb-4">
    <div class="outline-container border p-4 mb-4">
      <h6>Leave Period</h6>
      <FormKit
        type="select"
        label="Start Month"
        validation="required"
        :options="startMonth"
      />
      <FormKit
        type="select"
        label="Start Date"
        validation="required"
        :options="startDate"
      />
      <div class="flex justify-end space-x-4 mt-4">
        <button @click="resetFilters" class="bg-blue-500 text-white px-4 py-2 rounded">Reset</button>
        <button @click="searchLeaves" class="bg-green-500 text-white px-4 py-2 rounded">Save</button>
      </div>
    </div>
  </div>
</template>