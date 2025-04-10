<script setup>
import { ref } from 'vue';
import { DateTime } from "luxon";

const date = ref(DateTime.now());

const salaryField = [
  "Salary Component",
  "pim.amount",
  "Currency",
  "Pay Frequency",
  "Direct Deposit Amount",
];
const salaryData = [
  {
    salaryComponent: "Basic Salary",
    amount: "5000",
    currency: "USD",
    payFrequency: "Monthly",
    directDepositAmount: "5000",
  },
  {
    salaryComponent: "Housing Allowance",
    amount: "2000",
    currency: "USD",
    payFrequency: "Monthly",
    directDepositAmount: "2000",
  },
];

const supervisorField = ["Name", "Reporting Method"];
const supervisorData = [
  {
    name: "John Doe",
    reportingMethod: "Direct",
  },
  {
    name: "Jane Smith",
    reportingMethod: "Indirect",
  },
];

const subordinateField = ["Name", "Reporting Method"];
const subordinateData = [
  {
    name: "Alice Johnson",
    reportingMethod: "Direct",
  },
  {
    name: "Bob Brown",
    reportingMethod: "Indirect",
  },
];

const attachmentField = [
  "File Name",
  "Description",
  "Size",
  "Type",
  "Date Added",
  "Added By",
  "Actions",
];
const attachmentData = [
  {
    fileName: "contract.pdf",
    description: "Employment Contract",
    size: "1.2 MB",
    type: "PDF",
    dateAdded: "2023-01-15",
    addedBy: "Admin",
    actions: "View",
  },
  {
    fileName: "payslip_march.pdf",
    description: "March Payslip",
    size: "500 KB",
    type: "PDF",
    dateAdded: "2023-03-31",
    addedBy: "Admin",
    actions: "Download",
  },
];
</script>

<template>
  <div class="p-4">
    <rs-card class="p-4 mt-8">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold" style="font-family: Arial;">Assigned Salary Components</h1>
      </div>
      <hr class="mb-4">
      <rs-table
        :field="salaryField"
        :data="salaryData"
        :options="{
          variant: 'default',
          striped: true,
          borderless: true,
          hover: true,
          fixed: false,
        }"
        basic
      ></rs-table>

      <h1 class="text-2xl font-bold mt-8" style="font-family: Arial;">Assigned Supervisors</h1>
      <hr class="mb-4">
      <rs-table
        :field="supervisorField"
        :data="supervisorData"
        :options="{
          variant: 'default',
          striped: true,
          borderless: true,
          hover: true,
          fixed: false,
        }"
        basic
      ></rs-table>

      <h1 class="text-2xl font-bold mt-8" style="font-family: Arial;">Assigned Subordinates</h1>
      <hr class="mb-4">
      <rs-table
        :field="subordinateField"
        :data="subordinateData"
        :options="{
          variant: 'default',
          striped: true,
          borderless: true,
          hover: true,
          fixed: false,
        }"
        basic
      ></rs-table>

      <h1 class="text-2xl font-bold mt-8" style="font-family: Arial;">Attachments</h1>
      <hr class="mb-4">
      <rs-table
        :field="attachmentField"
        :data="attachmentData"
        :options="{
          variant: 'default',
          striped: true,
          borderless: true,
          hover: true,
          fixed: false,
        }"
        basic
      ></rs-table>
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
