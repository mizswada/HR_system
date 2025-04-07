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
      currency: [
        { label: "--Select--", value: "st" },
        { label: "Malaysian Ringgit", value: "rm" },
        { label: "Singapore Dollar", value: "sg" },
        { label: "US Dollar", value: "us" },
        { label: "Euro", value: "eu" },
        { label: "British Pound", value: "uk" },
      ],
    };
  },
};
</script>
<template>
  <div class="card p-4 mb-4">
    <h3>Submit Claim</h3>
    <FormKit
      type="select"
      label="Event"
      validation="required"
      :options="event"
    />
    <FormKit
      type="select"
      label="Currency"
      validation="required"
      :options="currency"
    />
    <FormKit type="textarea" rows="3" label="Remarks" />
    <div class="flex justify-end space-x-4 mt-4">
      <button @click="resetFilters" class="bg-blue-500 text-white px-4 py-2 rounded">Cancel</button>
      <button @click="searchLeaves" class="bg-green-500 text-white px-4 py-2 rounded">Create</button>
    </div>
  </div>
    
</template>