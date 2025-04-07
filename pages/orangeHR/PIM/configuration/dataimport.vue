<template>
  <div class="data-import">
    <div class="note">
      <p><strong>Note:</strong></p>
      <ul>
        <li>Column order should not be changed</li>
        <li>First Name and Last Name are compulsory</li>
        <li>All date fields should be in YYYY-MM-DD format</li>
        <li>If gender is specified, value should be either Male or Female</li>
        <li>Each import file should be configured for 100 records or less</li>
        <li>Multiple import files may be required</li>
        <li>
          Sample CSV file: 
          <a href="#" class="download-link">Download</a>
        </li>
      </ul>
    </div>
    <div class="file-upload">
      <FormKit
        type="file"
        label="Documents"
        accept=".pdf,.doc,.docx,.xml,.md,.csv"
        help="Select as many documents as you would like."
      />
    </div>
    <button class="upload-button">Upload</button>
  </div>
</template>

<script setup></script>

<style scoped>
.data-import {
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
}

.note {
  margin-bottom: 20px;
  background-color: #e9ecef;
  padding: 15px;
  border-radius: 5px;
}

.note p {
  font-weight: bold;
}

.note ul {
  list-style-type: disc;
  padding-left: 20px;
}

.download-link {
  color: #6c63ff;
  text-decoration: none;
}

.download-link:hover {
  text-decoration: underline;
}

.file-upload {
  margin-bottom: 20px;
}

.upload-button {
  background-color: #6c63ff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
}

.upload-button:hover {
  background-color: #5a54d1;
}
</style>

