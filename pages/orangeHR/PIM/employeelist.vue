<script setup>
const employmentStatusOptions = [
  { label: "Full-Time", value: "full-time" },
  { label: "Part-Time", value: "part-time" },
  { label: "Contract", value: "contract" },
];

const includeOptions = [
  { label: "Current Employees Only", value: "current" },
  { label: "All Employees", value: "all" },
];

const jobTitleOptions = [
  { label: "Developer", value: "developer" },
  { label: "Jr.Developer", value: "jr.developer" },
  { label: "UI/UX Developer", value: "UI/UX developer" },
];

const subUnitOptions = [
  { label: "Toyyibpay Sdn Bhd", value: "toyyibpay" },
  { label: "Unit Developer RnD", value: "rnd" },
  { label: "Corrad Software", value: "corrad" },
  { label: "Product", value: "product" },
  { label: "fdsfsd", value: "fdsfsd" },
];


function search() {
  alert("Search triggered");
}

function resetForm() {
  alert("Form reset");
}



</script>

<template>
  <div>
    <h2>Employee Information</h2>
    <form>
      <div>
        <FormKit 
                        type="text" 
                        label="Organization Name"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Organization Name <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
      <div>
        <FormKit 
          type="text" 
          label="Employee Id" 
          placeholder="Type for hints..."
        />
      </div>
      </div>
      <div>
        <FormKit 
          type="select" 
          label="Employment Status" 
          :options="employmentStatusOptions"
        />
      </div>
      <div>
        <FormKit 
          type="select" 
          label="Include" 
          :options="includeOptions"
        />
      </div>
      <div>
        <FormKit 
          type="text" 
          label="Supervisor Name" 
          placeholder="Type for hints..."
        />
      </div>
      <div>
        <FormKit 
          type="select" 
          label="Job Title" 
          :options="jobTitleOptions" 
          placeholder="-- Select --"
        />
      </div>
      <div>
        <FormKit 
          type="select" 
          label="Sub Unit" 
          :options="subUnitOptions" 
          placeholder="-- Select --"
        />
      </div>
      <div class="flex gap-4 mt-4">
        <rs-button variant="secondary" @click="resetForm">Reset</rs-button>
        <rs-button variant="primary" @click="search">Search</rs-button>
      </div>
    </form>
  </div>
</template>

  


