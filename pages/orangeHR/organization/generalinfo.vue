<script setup>
import { ref } from 'vue';



const jobTitles = ref([]);

const showTitleModal = ref(false);
const showTitleModalForm = ref({
  title: '',
  department: '',
  description: '',
  documents: null,
});

const selectedTitles = ref([]);
let editingTitle = null;

const openTitleModal = (title = null) => {
  if (title) {
    showTitleModalForm.value.title = title.title;
    editingTitle = title;
  } else {
    showTitleModalForm.value.title = '';
    showTitleModalForm.value.department = '';
    showTitleModalForm.value.description = '';
    showTitleModalForm.value.documents = null;
    editingTitle = null;
  }
  showTitleModal.value = true;
};

const saveJobTitle = () => {
  if (showTitleModalForm.value.title) {
    if (editingTitle) {
      editingTitle.title = showTitleModalForm.value.title;
    } else {
      jobTitles.value.push({ title: showTitleModalForm.value.title });
    }
  }
  showTitleModal.value = false;
};

const deleteJobTitle = (title) => {
  jobTitles.value = jobTitles.value.filter(jt => jt.title !== title.title);
};

const deleteSelectedTitles = () => {
  jobTitles.value = jobTitles.value.filter(jt => !selectedTitles.value.includes(jt.title));
  selectedTitles.value = [];
};

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

const sampleData = [
  { name: 'John Doe', position: 'Software Engineer', department: 'IT', salary: 60000 },
  { name: 'Jane Smith', position: 'Project Manager', department: 'Operations', salary: 75000 },
  { name: 'Alice Johnson', position: 'HR Specialist', department: 'Human Resources', salary: 50000 },
  { name: 'Bob Brown', position: 'Data Analyst', department: 'Finance', salary: 55000 },
  { name: 'Charlie Davis', position: 'Marketing Coordinator', department: 'Marketing', salary: 45000 }
];
</script>

<template>
  <div class="p-4">
 
    <rs-card class="p-4 mt-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">General Information</h1>
        <button class="bg-green-600 text-white py-2 px-4 rounded-full" @click="openTitleModal()" style="font-family: Arial;">+ Add</button>
      </div>
      <hr class="mb-4">
      <p class="text-gray-600 mb-4" style="font-family: Arial;">({{ jobTitles.length }}) Records Found</p>
      <div class="flex justify-between items-center mb-4">
        <p class="text-gray-600" style="font-family: Arial;">({{ selectedTitles.length }}) Records Selected</p>
        <button v-if="selectedTitles.length > 0" class="bg-red-400 text-white py-2 px-4 rounded-full" @click="deleteSelectedTitles" style="font-family: Arial;">Delete Selected</button>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <rs-card v-for="title in jobTitles" :key="title.title" class="p-4 bg-gray-100 rounded-lg relative">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <input type="checkbox" v-model="selectedTitles" :value="title.title" />
              <div>
                <h6 class="font-semibold text-gray-700" style="font-family: Arial;">General Information</h6>
                <p class="text-gray-500 text-lg" style="font-family: Arial;">{{ title.title }}</p>
              </div>
            </div>
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
              <button class="bg-green-200 text-gray-700 p-2 rounded-full" @click="openTitleModal(title)">
                <Icon name="material-symbols:edit-outline-rounded" class="text-lg"></Icon>
              </button>
              <button class="bg-red-200 text-gray-700 p-2 rounded-full" @click="deleteJobTitle(title)">
                <Icon name="material-symbols:delete-outline" class="text-lg"></Icon>
              </button>
            </div>
          </div>
        </rs-card>
      </div>


      <rs-modal title="Human Resources SOP" v-model="showTitleModal" ok-title="Save" :ok-callback="saveJobTitle">
        <div class="grid grid-cols-1 gap-4">
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
    </div>
        <FormKit type="textarea" placeholder="Type your messages here ..." label="Description" help="Enter a comment about the document." />
      </rs-modal>
    </rs-card>
  </div>
</template>

<style scoped>
/* Add any additional styles here */
.rs-card {
  border-radius: 10px;
  font-family: Arial;
}
</style>