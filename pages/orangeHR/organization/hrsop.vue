<script setup>

const options = [
                        "Human Resources",
                        "Finance",
                        "Marketing",
                        "Sales",
                        "IT",
                        "Customer Service",
                        "Research and Development",
                        "Production",
                        "Logistics",
                        "Legal",
                        "Administration",
                      ];
                      
                      </script>


<template>

     <div>
    <h2>Human Resources SOP</h2>
    <form>
    </form>
    </div>
    <!-- Required Validation with Required Symbol -->
     <div>
    <FormKit 
      type="text" 
      label="Required Validation"
      validation="required"
      validation-visibility="dirty"
    >
      <template #label>
        <label
          class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
        >
          Name <span class="text-danger">*</span>
        </label>
      </template>
    </FormKit>
    </div>
    <FormKit
                        type="select"
                        label="Department"
                        :options="options"
                      />
                      <FormKit type="textarea" placeholder="type your messages here ..." rows="8" label="Description"/>
                      <FormKit
                        type="file"
                        label="Documents"
                        accept=".pdf,.doc,.docx,.xml,.md,.csv"
                        help="Select as many documents as you would like."
                      />
    </template>