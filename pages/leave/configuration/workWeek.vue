<script>
export default {
  data() {
    return {
      options: ["Full Day", "Half Day", "Non-working Day"],
    };
  },
  
};
</script>
<template>
 <div>
    <div class="outline-container border p-4 mb-4">
    <h6>Work Week</h6>
    <FormKit
            type="select"
            label="Monday"
            validation="required"
            :options="options"
         />
    <FormKit
            type="select"
            label="Tuesday"
            validation="required"
            :options="options"
         />
    <FormKit
            type="select"
            label="Wednesday"
            validation="required"
            :options="options"
         />
    <FormKit
            type="select"
            label="Thursday"
            validation="required"
            :options="options"
         />
    <FormKit
            type="select"
            label="Friday"
            validation="required"
            :options="options"
         />
    <FormKit
            type="select"
            label="Saturday"
            validation="required"
            :options="options"
         />
    <FormKit
            type="select"
            label="Sunday"
            validation="required"
            :options="options"
         />
         <div class="flex justify-end space-x-4 mt-4">
    <button @click="searchLeaves" class="bg-green-500 text-white px-4 py-2 rounded">Save</button>
  </div>
</div>
  </div>
</template>