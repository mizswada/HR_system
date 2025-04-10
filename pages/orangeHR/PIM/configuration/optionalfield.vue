<template>
  <div class="optional-fields-container">
    <h2>Optional Fields</h2>
    <div class="section">
      <h3>Show Deprecated Fields</h3>
      <div class="toggle-row">
        <span>Show Nick Name, Smoker and Military Service in Personal Details</span>
        <v-switch v-model="deprecatedFields" />
        <v-btn icon="mdi-toggle-switch" @click="toggleDeprecatedFields"></v-btn>
      </div>
    </div>
    <hr />
    <div class="section">
      <h3>Country Specific Information</h3>
      <div class="toggle-row">
        <span>Show SSN field in Personal Details</span>
        <v-switch v-model="showSSN" />
        <v-btn icon="mdi-toggle-switch" @click="toggleSSN"></v-btn>
      </div>
      <div class="toggle-row">
        <span>Show SIN field in Personal Details</span>
        <v-switch v-model="showSIN" />
        <v-btn icon="mdi-toggle-switch" @click="toggleSIN"></v-btn>
      </div>
      <div class="toggle-row">
        <span>Show US Tax Exemptions menu</span>
        <v-switch v-model="showTaxExemptions" />
        <v-btn icon="mdi-toggle-switch" @click="toggleTaxExemptions"></v-btn>
      </div>
    </div>
    <v-btn color="purple" class="save-button" @click="saveSettings">Save</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      deprecatedFields: false,
      showSSN: false,
      showSIN: false,
      showTaxExemptions: false,
    };
  },
  methods: {
    saveSettings() {
      // Logic to save the settings
      console.log("Settings saved:", {
        deprecatedFields: this.deprecatedFields,
        showSSN: this.showSSN,
        showSIN: this.showSIN,
        showTaxExemptions: this.showTaxExemptions,
      });
    },
    toggleDeprecatedFields() {
      this.deprecatedFields = !this.deprecatedFields;
    },
    toggleSSN() {
      this.showSSN = !this.showSSN;
    },
    toggleSIN() {
      this.showSIN = !this.showSIN;
    },
    toggleTaxExemptions() {
      this.showTaxExemptions = !this.showTaxExemptions;
    },
  },
};
</script>

<style scoped>
.optional-fields-container {
  background-color: #f9f9fc;
  padding: 20px;
  border-radius: 8px;
  font-family: Arial, sans-serif;
  position: relative;
}

h2 {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
}

.section {
  margin-bottom: 20px;
}

h3 {
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 10px;
}

.toggle-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
}

hr {
  border: none;
  border-top: 1px solid #ddd;
  margin: 20px 0;
}

.save-button {
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px 20px;
  background-color: #6200ea;
  color: white;
  text-align: center;
  border: none;
  border-radius: 20px;
  cursor: pointer;
}

.save-button:hover {
  background-color: #3700b3;
}
</style>
