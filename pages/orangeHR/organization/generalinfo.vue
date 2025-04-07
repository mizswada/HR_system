
<script setup>
 const options2 = [
                        { label: "Malaysia", value: "my", attrs: { disabled: true } },
                        { label: "Singapore", value: "sg", attrs: { disabled: true } },
                        { label: "Thailand", value: "th", attrs: { disabled: true } },
                        { label: "Indonesia", value: "id", attrs: { disabled: true } },
                        { label: "Brunei", value: "b", attrs: { disabled: true } },
                        { label: "Laos", value: "ls", attrs: { disabled: true } },
                        { label: "Cambodia", value: "cb", attrs: { disabled: true } },
                        { label: "Japan", value: "jp" },
                        { label: "Myanmar", value: "mm", attrs: { disabled: true } },
                      ];

                      function submit() {
                        alert("Form submitted");
                      }
</script>

<template>
  <div>
    <h2>General Information</h2>
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
      </div>
      <div>
        <FormKit 
         type="text" label="Readonly Text" value="3" disabled
                      />
                      
      </div>
      <div>
        <FormKit 
                        type="text" 
                        label="Registration Number"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Registration Number <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
      </div>
      <div>
        <FormKit 
                        type="text" 
                        label="Tax ID"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Tax ID <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
      </div>
      <div>
        <FormKit 
        
                        type="mask" 
                        label="Phone Number"
                        mask="###-########"
                        
                        >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Phone Number <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
      </div>
      <div>
        <FormKit 
                       
        type="mask" 
                        label="Phone Number"
                        mask="##-########"
                        >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Fax <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
      </div>
      <div>
        <FormKit 
                        type="text" 
                        label="Email"
                        validation="email"
                        validation-visibility="dirty"
                        >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Email<span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
      </div>
      <div>
        <FormKit 
                        type="text" 
                        label="Address"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Address 1<span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
      </div>
      <div>
        <FormKit 
                        type="text" 
                        label="Address"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            Address 2<span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
      </div>
      <div>
        <FormKit 
                        type="text" 
                        label="City"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            City<span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
      </div>
      <div>
        <FormKit 
                        type="text" 
                        label="State/Province"
                        validation="required"
                        validation-visibility="dirty"
                      >
                        <template #label>
                          <label
                            class="formkit-label text-gray-700 dark:text-gray-200 block mb-2 font-semibold text-sm formkit-invalid:text-red-500"
                          >
                            State/Province <span class="text-danger">*</span>
                          </label>
                        </template>
                      </FormKit>
      </div>
      <div>
        <FormKit 
                        type="text" 
                        label="Zip/Postal Code"
                        validation="number|between:0,100" 
                        validation-visibility="dirty"
                      />
      </div>
      <div>
        <FormKit
        type="select"
                        label="Which country you want to visit?"
                        :options="options2"
                      />
      </div>
      <div>
        <FormKit type="textarea" placeholder="type your message here..." rows="8" label="Company Policies"/>
      </div>

      <div>
        <FormKit
                        type="file"
                        label="Organization Chart"
                        accept=".pdf,.doc,.docx,.xml,.md,.csv"
                        help="Please upload the organization chart"
                      />
      </div>
      
      <rs-button variant="success" @click="submit">Submit</rs-button>
                      
     
    </form>
  </div>
</template>





