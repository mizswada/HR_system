<script setup>
import { ref, defineComponent } from "vue";

// Tree structure data
const organizationTree = ref([
  {
    name: "Toyyibpay Sdn Bhd",
    expanded: true,
    children: [
      {
        name: "002: Unit Developer RnD",
        expanded: false,
        children: [],
      },
      {
        name: "C003: Corrad Software",
        expanded: true,
        children: [
          {
            name: "C0031: Product",
            expanded: false,
            children: [],
          },
        ],
      },
      {
        name: "sfsdf: fdsfsd",
        expanded: false,
        children: [],
      },
    ],
  },
]);

// Modal visibility state
const showModal = ref(false);
const selectedNode = ref(null);

// Function to toggle node expansion
const toggleNode = (node) => {
  node.expanded = !node.expanded;
};

// Function to open the modal
const openModal = (node) => {
  selectedNode.value = node;
  showModal.value = true;
};

// Function to save the new unit
const saveUnit = (unitId, name, description) => {
  if (selectedNode.value) {
    selectedNode.value.children.push({
      name: `${unitId}: ${name}`,
      expanded: false,
      children: [],
    });
  }
  showModal.value = false;
};

// Define the TreeNode component
const TreeNode = defineComponent({
  name: "TreeNode",
  props: {
    node: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const toggleNode = (node) => {
      node.expanded = !node.expanded;
    };

    return { toggleNode, openModal };
  },
  template: `
    <div>
      <div
        @click="toggleNode(node)"
        class="cursor-pointer flex items-center gap-2 py-1"
      >
        <span v-if="node.children && node.children.length" class="text-purple-500">
          {{ node.expanded ? '▼' : '▶' }}
        </span>
        <span>{{ node.name }}</span>
        <button @click.stop="openModal(node)" class="ml-auto text-purple-500">+</button>
      </div>
      <ul v-if="node.expanded" class="pl-6 border-l-2 border-purple-200">
        <li v-for="(child, index) in node.children" :key="index">
          <TreeNode :node="child" />
        </li>
      </ul>
    </div>
  `,
});
</script>

<template>
  <div class="p-4 bg-gray-50 rounded-lg shadow">
    <div class="flex justify-between items-center mb-4">
      <h1 class="text-2xl font-bold" style="font-family: Arial;">Organization Structure</h1>
      <button @click="openModal(organizationTree[0])" class="bg-purple-500 text-white px-4 py-2 rounded-lg">+ Add</button>
    </div>
    <ul>
      <li v-for="(node, index) in organizationTree" :key="index">
        <TreeNode :node="node" />
      </li>
    </ul>
  </div>

  <!-- Modal -->
  <rs-modal v-model="showModal" title="Add Organization Unit">
    <form @submit.prevent="saveUnit(unitId, name, description)">
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2">Unit Id</label>
        <input v-model="unitId" type="text" class="w-full border rounded-lg px-3 py-2" required />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2">Name*</label>
        <input v-model="name" type="text" class="w-full border rounded-lg px-3 py-2" required />
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 font-bold mb-2">Description</label>
        <textarea v-model="description" class="w-full border rounded-lg px-3 py-2"></textarea>
      </div>
      <p class="text-gray-500 mb-4">This unit will be added under {{ selectedNode?.name }}</p>
      <div class="flex justify-end gap-4">
        <button type="button" @click="showModal = false" class="px-4 py-2 border rounded-lg">Cancel</button>
        <button type="submit" class="px-4 py-2 bg-purple-500 text-white rounded-lg">Save</button>
      </div>
    </form>
  </rs-modal>
</template>

