<script setup>
import { ref } from 'vue';



const jobTitles = ref([]);
const educationRecords = ref([]);
const skillsRecords = ref([]);
const languagesRecords = ref([]);
const licensesRecords = ref([]);
const attachmentsRecords = ref([]);

const showTitleModal = ref(false);
const showEducationModal = ref(false);
const showSkillsModal = ref(false);
const showLanguagesModal = ref(false);
const showLicensesModal = ref(false);
const showAttachmentsModal = ref(false);

const showTitleModalForm = ref({
  title: '',
});
const educationForm = ref({
  level: '',
});
const skillsForm = ref({
  skill: '',
});
const languagesForm = ref({
  language: '',
});
const licensesForm = ref({
  license: '',
});
const attachmentsForm = ref({
  attachment: '',
});

const selectedTitles = ref([]);
const selectedEducation = ref([]);
const selectedSkills = ref([]);
const selectedLanguages = ref([]);
const selectedLicenses = ref([]);
const selectedAttachments = ref([]);

let editingTitle = null;
let editingEducation = null;
let editingSkill = null;
let editingLanguage = null;
let editingLicense = null;
let editingAttachment = null;

const openTitleModal = (title = null) => {
  if (title) {
    showTitleModalForm.value.title = title.title;
    editingTitle = title;
  } else {
    showTitleModalForm.value.title = '';
    editingTitle = null;
  }
  showTitleModal.value = true;
};

const openEducationModal = (record = null) => {
  if (record) {
    educationForm.value.level = record.level;
    editingEducation = record;
  } else {
    educationForm.value.level = '';
    editingEducation = null;
  }
  showEducationModal.value = true;
};

const openSkillsModal = (record = null) => {
  if (record) {
    skillsForm.value.skill = record.skill;
    editingSkill = record;
  } else {
    skillsForm.value.skill = '';
    editingSkill = null;
  }
  showSkillsModal.value = true;
};

const openLanguagesModal = (record = null) => {
  if (record) {
    languagesForm.value.language = record.language;
    editingLanguage = record;
  } else {
    languagesForm.value.language = '';
    editingLanguage = null;
  }
  showLanguagesModal.value = true;
};

const openLicensesModal = (record = null) => {
  if (record) {
    licensesForm.value.license = record.license;
    editingLicense = record;
  } else {
    licensesForm.value.license = '';
    editingLicense = null;
  }
  showLicensesModal.value = true;
};

const openAttachmentsModal = (record = null) => {
  if (record) {
    attachmentsForm.value.attachment = record.attachment;
    editingAttachment = record;
  } else {
    attachmentsForm.value.attachment = '';
    editingAttachment = null;
  }
  showAttachmentsModal.value = true;
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

const saveEducation = () => {
  if (educationForm.value.level) {
    if (editingEducation) {
      editingEducation.level = educationForm.value.level;
    } else {
      educationRecords.value.push({ id: Date.now(), level: educationForm.value.level });
    }
  }
  showEducationModal.value = false;
};

const saveSkill = () => {
  if (skillsForm.value.skill) {
    if (editingSkill) {
      editingSkill.skill = skillsForm.value.skill;
    } else {
      skillsRecords.value.push({ id: Date.now(), skill: skillsForm.value.skill });
    }
  }
  showSkillsModal.value = false;
};

const saveLanguage = () => {
  if (languagesForm.value.language) {
    if (editingLanguage) {
      editingLanguage.language = languagesForm.value.language;
    } else {
      languagesRecords.value.push({ id: Date.now(), language: languagesForm.value.language });
    }
  }
  showLanguagesModal.value = false;
};

const saveLicense = () => {
  if (licensesForm.value.license) {
    if (editingLicense) {
      editingLicense.license = licensesForm.value.license;
    } else {
      licensesRecords.value.push({ id: Date.now(), license: licensesForm.value.license });
    }
  }
  showLicensesModal.value = false;
};

const saveAttachment = () => {
  if (attachmentsForm.value.attachment) {
    if (editingAttachment) {
      editingAttachment.attachment = attachmentsForm.value.attachment;
    } else {
      attachmentsRecords.value.push({ id: Date.now(), attachment: attachmentsForm.value.attachment });
    }
  }
  showAttachmentsModal.value = false;
};

const deleteJobTitle = (title) => {
  jobTitles.value = jobTitles.value.filter(jt => jt.title !== title.title);
};

const deleteEducation = (record) => {
  educationRecords.value = educationRecords.value.filter(er => er.id !== record.id);
};

const deleteSkill = (record) => {
  skillsRecords.value = skillsRecords.value.filter(sr => sr.id !== record.id);
};

const deleteLanguage = (record) => {
  languagesRecords.value = languagesRecords.value.filter(lr => lr.id !== record.id);
};

const deleteLicense = (record) => {
  licensesRecords.value = licensesRecords.value.filter(lr => lr.id !== record.id);
};

const deleteAttachment = (record) => {
  attachmentsRecords.value = attachmentsRecords.value.filter(ar => ar.id !== record.id);
};

const deleteSelectedTitles = () => {
  jobTitles.value = jobTitles.value.filter(jt => !selectedTitles.value.includes(jt.title));
  selectedTitles.value = [];
};

const deleteSelectedEducation = () => {
  educationRecords.value = educationRecords.value.filter(er => !selectedEducation.value.includes(er.id));
  selectedEducation.value = [];
};

const deleteSelectedSkills = () => {
  skillsRecords.value = skillsRecords.value.filter(sr => !selectedSkills.value.includes(sr.id));
  selectedSkills.value = [];
};

const deleteSelectedLanguages = () => {
  languagesRecords.value = languagesRecords.value.filter(lr => !selectedLanguages.value.includes(lr.id));
  selectedLanguages.value = [];
};

const deleteSelectedLicenses = () => {
  licensesRecords.value = licensesRecords.value.filter(lr => !selectedLicenses.value.includes(lr.id));
  selectedLicenses.value = [];
};

const deleteSelectedAttachments = () => {
  attachmentsRecords.value = attachmentsRecords.value.filter(ar => !selectedAttachments.value.includes(ar.id));
  selectedAttachments.value = [];
};

import { DateTime } from "luxon";
        
        const dt = DateTime.now();

        const dateStart = dt.plus({ days: -7 }).toFormat("yyyy-MM-dd");
        const dateEnd = dt.plus({ days: 7 }).toFormat("yyyy-MM-dd");

        const title = [
        { label: "select", value: "my", attrs: { disabled: true } },,
                        "Programmer",
                        "Developer",
                        "Designer",
];
const skills = [
        { label: "select", value: "my", attrs: { disabled: true } },,
                        "laravel",
                        "vuejs",
                        "reactjs",
                        "angular",
                        "nodejs",
                        "python",
                        "java",                   
];

const license = [
        { label: "select", value: "my", attrs: { disabled: true } },,
                        "B2",
                        "D",
                        
                        
];

// Adding sample data to the tables
jobTitles.value = [
  { title: 'Software Engineer' },
  { title: 'Project Manager' },
  { title: 'Data Analyst' }
];

educationRecords.value = [
  { id: 1, level: 'Bachelor of Science in Computer Science' },
  { id: 2, level: 'Master of Business Administration' }
];

skillsRecords.value = [
  { id: 1, skill: 'JavaScript' },
  { id: 2, skill: 'Python' },
  { id: 3, skill: 'SQL' }
];

languagesRecords.value = [
  { id: 1, language: 'English' },
  { id: 2, language: 'Spanish' }
];

licensesRecords.value = [
  { id: 1, license: 'Driver’s License - Class B' },
  { id: 2, license: 'Certified Scrum Master' }
];

attachmentsRecords.value = [
  { id: 1, attachment: 'Resume.pdf' },
  { id: 2, attachment: 'Portfolio.zip' }
];
</script>

<template>
  <div class="p-4">
 
    <rs-card class="p-4 mt-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Work Experience</h1>
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
                <h6 class="font-semibold text-gray-700" style="font-family: Arial;">Work Experience</h6>
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


      <rs-modal title="Add Work Experience" v-model="showTitleModal" ok-title="Save" :ok-callback="saveJobTitle">
        <div class="grid grid-cols-3 gap-4">
          <FormKit
            type="select"
            label="Level*"
            :options="[{ label: 'Select', value: '', attrs: { disabled: true } }, 'Junior', 'Mid', 'Senior']"
            style="font-family: Arial;"
          />
          <FormKit
            type="text"
            label="Institute"
            style="font-family: Arial;"
          />
          <FormKit
            type="text"
            label="Major/Specialization"
            style="font-family: Arial;"
          />
          <FormKit
            type="text"
            label="Year"
            style="font-family: Arial;"
          />
          <FormKit
            type="text"
            label="GPA/Score"
            style="font-family: Arial;"
          />
          <FormKit
            type="date"
            label="Start Date"
            style="font-family: Arial;"
          />
          <FormKit
            type="date"
            label="End Date"
            style="font-family: Arial;"
          />
        </div>
      </rs-modal>
    </rs-card>

    <rs-card class="p-4 mt-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Education</h1>
        <button class="bg-green-600 text-white py-2 px-4 rounded-full" @click="openEducationModal()" style="font-family: Arial;">+ Add</button>
      </div>
      <hr class="mb-4">
      <p class="text-gray-600 mb-4" style="font-family: Arial;">({{ educationRecords.length }}) Records Found</p>
      <div class="flex justify-between items-center mb-4">
        <p class="text-gray-600" style="font-family: Arial;">({{ selectedEducation.length }}) Records Selected</p>
        <button v-if="selectedEducation.length > 0" class="bg-red-400 text-white py-2 px-4 rounded-full" @click="deleteSelectedEducation" style="font-family: Arial;">Delete Selected</button>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <rs-card v-for="record in educationRecords" :key="record.id" class="p-4 bg-gray-100 rounded-lg relative">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <input type="checkbox" v-model="selectedEducation" :value="record.id" />
              <div>
                <h6 class="font-semibold text-gray-700" style="font-family: Arial;">Level</h6>
                <p class="text-gray-500 text-lg" style="font-family: Arial;">{{ record.level }}</p>
              </div>
            </div>
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
              <button class="bg-green-200 text-gray-700 p-2 rounded-full" @click="openEducationModal(record)">
                <Icon name="material-symbols:edit-outline-rounded" class="text-lg"></Icon>
              </button>
              <button class="bg-red-200 text-gray-700 p-2 rounded-full" @click="deleteEducation(record)">
                <Icon name="material-symbols:delete-outline" class="text-lg"></Icon>
              </button>
            </div>
          </div>
        </rs-card>
      </div>

      <rs-modal title="Add Education" v-model="showEducationModal" ok-title="Save" :ok-callback="saveEducation">
        <FormKit type="text" v-model="educationForm.level" name="level" label="Level" style="font-family: Arial;" />
      </rs-modal>
    </rs-card>

    <rs-card class="p-4 mt-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Skills</h1>
        <button class="bg-green-600 text-white py-2 px-4 rounded-full" @click="openSkillsModal()" style="font-family: Arial;">+ Add</button>
      </div>
      <hr class="mb-4">
      <p class="text-gray-600 mb-4" style="font-family: Arial;">({{ skillsRecords.length }}) Records Found</p>
      <div class="flex justify-between items-center mb-4">
        <p class="text-gray-600" style="font-family: Arial;">({{ selectedSkills.length }}) Records Selected</p>
        <button v-if="selectedSkills.length > 0" class="bg-red-400 text-white py-2 px-4 rounded-full" @click="deleteSelectedSkills" style="font-family: Arial;">Delete Selected</button>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <rs-card v-for="record in skillsRecords" :key="record.id" class="p-4 bg-gray-100 rounded-lg relative">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <input type="checkbox" v-model="selectedSkills" :value="record.id" />
              <div>
                <h6 class="font-semibold text-gray-700" style="font-family: Arial;">Skill</h6>
                <p class="text-gray-500 text-lg" style="font-family: Arial;">{{ record.skill }}</p>
              </div>
            </div>
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
              <button class="bg-green-200 text-gray-700 p-2 rounded-full" @click="openSkillsModal(record)">
                <Icon name="material-symbols:edit-outline-rounded" class="text-lg"></Icon>
              </button>
              <button class="bg-red-200 text-gray-700 p-2 rounded-full" @click="deleteSkill(record)">
                <Icon name="material-symbols:delete-outline" class="text-lg"></Icon>
              </button>
            </div>
          </div>
        </rs-card>
      </div>

      <rs-modal title="Add Skill" v-model="showSkillsModal" ok-title="Save" :ok-callback="saveSkill">
        
          <FormKit
            type="select"
            label="Skill*"
            :options="skills"
            style="font-family: Arial;"
          />
          <FormKit
            type="text"
            label="Years of Experience"
            style="font-family: Arial;"
          />
          <FormKit
            type="textarea"
            label="Comments"
            style="font-family: Arial;"
          />
        
      </rs-modal>
    </rs-card>

    <rs-card class="p-4 mt-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Languages</h1>
        <button class="bg-green-600 text-white py-2 px-4 rounded-full" @click="openLanguagesModal()" style="font-family: Arial;">+ Add</button>
      </div>
      <hr class="mb-4">
      <p class="text-gray-600 mb-4" style="font-family: Arial;">({{ languagesRecords.length }}) Records Found</p>
      <div class="flex justify-between items-center mb-4">
        <p class="text-gray-600" style="font-family: Arial;">({{ selectedLanguages.length }}) Records Selected</p>
        <button v-if="selectedLanguages.length > 0" class="bg-red-400 text-white py-2 px-4 rounded-full" @click="deleteSelectedLanguages" style="font-family: Arial;">Delete Selected</button>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <rs-card v-for="record in languagesRecords" :key="record.id" class="p-4 bg-gray-100 rounded-lg relative">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <input type="checkbox" v-model="selectedLanguages" :value="record.id" />
              <div>
                <h6 class="font-semibold text-gray-700" style="font-family: Arial;">Language</h6>
                <p class="text-gray-500 text-lg" style="font-family: Arial;">{{ record.language }}</p>
              </div>
            </div>
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
              <button class="bg-green-200 text-gray-700 p-2 rounded-full" @click="openLanguagesModal(record)">
                <Icon name="material-symbols:edit-outline-rounded" class="text-lg"></Icon>
              </button>
              <button class="bg-red-200 text-gray-700 p-2 rounded-full" @click="deleteLanguage(record)">
                <Icon name="material-symbols:delete-outline" class="text-lg"></Icon>
              </button>
            </div>
          </div>
        </rs-card>
      </div>

      <rs-modal title="Add Languages" v-model="showLanguagesModal" ok-title="Save" :ok-callback="saveLanguage">
        <FormKit type="text" v-model="languagesForm.language" name="language" label="Language" style="font-family: Arial;" />
      </rs-modal>
    </rs-card>

    <rs-card class="p-4 mt-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Licenses</h1>
        <button class="bg-green-600 text-white py-2 px-4 rounded-full" @click="openLicensesModal()" style="font-family: Arial;">+ Add</button>
      </div>
      <hr class="mb-4">
      <p class="text-gray-600 mb-4" style="font-family: Arial;">({{ licensesRecords.length }}) Records Found</p>
      <div class="flex justify-between items-center mb-4">
        <p class="text-gray-600" style="font-family: Arial;">({{ selectedLicenses.length }}) Records Selected</p>
        <button v-if="selectedLicenses.length > 0" class="bg-red-400 text-white py-2 px-4 rounded-full" @click="deleteSelectedLicenses" style="font-family: Arial;">Delete Selected</button>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <rs-card v-for="record in licensesRecords" :key="record.id" class="p-4 bg-gray-100 rounded-lg relative">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <input type="checkbox" v-model="selectedLicenses" :value="record.id" />
              <div>
                <h6 class="font-semibold text-gray-700" style="font-family: Arial;">License</h6>
                <p class="text-gray-500 text-lg" style="font-family: Arial;">{{ record.license }}</p>
              </div>
            </div>
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
              <button class="bg-green-200 text-gray-700 p-2 rounded-full" @click="editLicense(record)">
                <Icon name="material-symbols:edit-outline-rounded" class="text-lg"></Icon>
              </button>
              <button class="bg-red-200 text-gray-700 p-2 rounded-full" @click="deleteLicense(record)">
                <Icon name="material-symbols:delete-outline" class="text-lg"></Icon>
              </button>
            </div>
          </div>
        </rs-card>
      </div>

      <rs-modal title="Add License" v-model="showLicensesModal" ok-title="Save" :ok-callback="saveLicense">
       
          <FormKit
            type="select"
            label="License Type*"
            :options="license"
            style="font-family: Arial;"
          />
          <FormKit
            type="text"
            label="License Number"
            style="font-family: Arial;"
          />
          <FormKit
            type="date"
            label="Issued Date"
            style="font-family: Arial;"
          />
          <FormKit
            type="date"
            label="Expiry Date"
            style="font-family: Arial;"
          />
        
      </rs-modal>
    </rs-card>

    <rs-card class="p-4 mt-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Attachments</h1>
        <button class="bg-green-600 text-white py-2 px-4 rounded-full" @click="openAttachmentsModal()" style="font-family: Arial;">+ Add</button>
      </div>
      <hr class="mb-4">
      <p class="text-gray-600 mb-4" style="font-family: Arial;">({{ attachmentsRecords.length }}) Records Found</p>
      <div class="flex justify-between items-center mb-4">
        <p class="text-gray-600" style="font-family: Arial;">({{ selectedAttachments.length }}) Records Selected</p>
        <button v-if="selectedAttachments.length > 0" class="bg-red-400 text-white py-2 px-4 rounded-full" @click="deleteSelectedAttachments" style="font-family: Arial;">Delete Selected</button>
      </div>
      <div class="grid grid-cols-1 gap-4">
        <rs-card v-for="record in attachmentsRecords" :key="record.id" class="p-4 bg-gray-100 rounded-lg relative">
          <div class="flex justify-between items-center">
            <div class="flex items-center gap-2">
              <input type="checkbox" v-model="selectedAttachments" :value="record.id" />
              <div>
                <h6 class="font-semibold text-gray-700" style="font-family: Arial;">Attachment</h6>
                <p class="text-gray-500 text-lg" style="font-family: Arial;">{{ record.attachment }}</p>
              </div>
            </div>
            <div class="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col items-center gap-2">
              <button class="bg-green-200 text-gray-700 p-2 rounded-full" @click="editAttachment(record)">
                <Icon name="material-symbols:edit-outline-rounded" class="text-lg"></Icon>
              </button>
              <button class="bg-red-200 text-gray-700 p-2 rounded-full" @click="deleteAttachment(record)">
                <Icon name="material-symbols:delete-outline" class="text-lg"></Icon>
              </button>
            </div>
          </div>
        </rs-card>
      </div>

      <rs-modal title="Add Attachments" v-model="showAttachmentsModal" ok-title="Save" :ok-callback="saveAttachment">
        <FormKit
                        type="file"
                        label="Documents"
                        accept=".pdf,.doc,.docx,.xml,.md,.csv"
                        help="Select as many documents as you would like."
                      />
                      <FormKit type="textarea" placeholder="Type your comment here ..." label="Comment" help="Enter a comment about the document." />
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
