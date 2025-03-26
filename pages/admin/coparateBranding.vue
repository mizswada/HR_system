<script setup>
import { ref } from 'vue';
import { FormKit } from '@formkit/vue';

const clientLogo = ref([
  { value: 'keepLogo', label: 'Keep Current' },
  { value: 'deleteLogo', label: 'Delete Current' },
  { value: 'keepLogo', label: 'Keep Current' },
]);

const loginBanner = ref([
  { value: 'keepBanner', label: 'Keep Current' },
  { value: 'deleteBanner', label: 'Delete Current' },
  { value: 'KeepBanner', label: 'Keep Current' },
]);

const clientLogoUrl = ref('path/to/client-logo.jpg'); // Replace with actual URL
const loginBannerUrl = ref('path/to/login-banner.jpg'); // Replace with actual URL

const resetToDefault = () => {
  // Handle reset to default
};

const preview = () => {
  // Handle preview
};

const publish = () => {
  // Handle publish
};

const primaryColor = ref('#000000');
const primaryFontColor = ref('#000000');
const primaryGradientColor1 = ref('#000000');
const secondaryColor = ref('#000000');
const secondaryFontColor = ref('#000000');
const primaryGradientColor2 = ref('#000000');
</script>

<template>
  <div class="mb-4">
    <h1 class="text-2xl font-bold">Coparate Branding</h1>
    <div class="border p-4 rounded-lg">
      <div class="grid grid-cols-3 gap-4 mt-4">
        <label class="flex items-center space-x-2">
          <span>Primary Color:</span>
          <input type="color" v-model="primaryColor" class="rounded-full" />
        </label>
        <label class="flex items-center space-x-2">
          <span>Primary Font Color:</span>
          <input type="color" v-model="primaryFontColor" class="rounded-full" />
        </label>
        <label class="flex items-center space-x-2">
          <span>Primary Gradient Color 1:</span>
          <input type="color" v-model="primaryGradientColor1" class="rounded-full" />
        </label>
        <label class="flex items-center space-x-2">
          <span>Secondary Color:</span>
          <input type="color" v-model="secondaryColor" class="rounded-full" />
        </label>
        <label class="flex items-center space-x-2">
          <span>Secondary Font Color:</span>
          <input type="color" v-model="secondaryFontColor" class="rounded-full" />
        </label>
        <label class="flex items-center space-x-2">
          <span>Primary Gradient Color 2:</span>
          <input type="color" v-model="primaryGradientColor2" class="rounded-full" />
        </label>
      </div>
      <hr class="my-4">
      <FormKit
        type="file"
        label="Client Banner"
        accept=".jpg,.png,.gif,.svg,"
        help="Accepts jpg, .png, .gif, .svg up to 1MB. Recommended dimensions: 182px X 50px"
      />
      <div class="flex items-center">
        <img :src="clientLogoUrl" alt="Client Logo" class="mr-4 w-24 h-24 object-contain" />
        <FormKit
          type="radio"
          label="Client Logo"
          :options="clientLogo"
        />
      </div>
      <div class="flex items-center">
        <img :src="loginBannerUrl" alt="Login Banner" class="mr-4 w-24 h-24 object-contain" />
        <FormKit
          type="radio"
          label="Login Banner"
          :options="loginBanner"
        />
      </div>
      <div class="flex justify-end space-x-4 mt-4">
        <button @click="resetToDefault" class="bg-gray-500 text-white px-4 py-2 rounded">Reset to Default</button>
        <button @click="preview" class="bg-blue-500 text-white px-4 py-2 rounded">Preview</button>
        <button @click="publish" class="bg-green-500 text-white px-4 py-2 rounded">Publish</button>
      </div>
    </div>
  </div>
</template>