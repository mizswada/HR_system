<script setup>
const items = [
  {
    title: 'Item 1',
    content: 'This is the content for item 1'
  },
  {
    title: 'Item 2',
    content: 'This is the content for item 2'
  },
  {
    title: 'Item 3',
    content: 'This is the content for item 3'
  }
];
</script>

<template>
  <div class="p-4 space-y-8">
    <h1 class="text-2xl font-bold mb-4">Collapse Component Documentation</h1>

    <!-- Basic Example -->
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Basic Collapse</h2>
      <RsCollapse>
        <RsCollapseItem v-for="(item, index) in items" 
          :key="index"
          :title="item.title"
        >
          <p class="p-4">{{ item.content }}</p>
        </RsCollapseItem>
      </RsCollapse>
    </div>

    <!-- Open Item Example -->
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Item Open by Default</h2>
      <p class="text-gray-600 mb-2">Second item is opened by default</p>
      <RsCollapse>
        <RsCollapseItem title="First Item">
          <p class="p-4">This item starts closed</p>
        </RsCollapseItem>
        <RsCollapseItem title="Second Item" open>
          <p class="p-4">This item starts open</p>
        </RsCollapseItem>
        <RsCollapseItem title="Third Item">
          <p class="p-4">This item starts closed</p>
        </RsCollapseItem>
      </RsCollapse>
    </div>

    <!-- Multiple Open Items Example -->
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Multiple Items Open</h2>
      <p class="text-gray-600 mb-2">First and third items are opened by default</p>
      <RsCollapse>
        <RsCollapseItem title="First Item" open>
          <p class="p-4">This item starts open</p>
        </RsCollapseItem>
        <RsCollapseItem title="Second Item">
          <p class="p-4">This item starts closed</p>
        </RsCollapseItem>
        <RsCollapseItem title="Third Item" open>
          <p class="p-4">This item starts open</p>
        </RsCollapseItem>
      </RsCollapse>
    </div>

    <!-- Accordion Example -->
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Accordion Mode</h2>
      <p class="text-gray-600 mb-2">First item is opened by default in accordion mode</p>
      <RsCollapse accordion>
        <RsCollapseItem title="First Item" open>
          <p class="p-4">This item starts open</p>
        </RsCollapseItem>
        <RsCollapseItem title="Second Item">
          <p class="p-4">This item starts closed</p>
        </RsCollapseItem>
        <RsCollapseItem title="Third Item">
          <p class="p-4">This item starts closed</p>
        </RsCollapseItem>
      </RsCollapse>
    </div>

    <!-- Border Style Example -->
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">Border Style</h2>
      <p class="text-gray-600 mb-2">Second item is opened by default with border style</p>
      <RsCollapse type="border">
        <RsCollapseItem title="First Item">
          <p class="p-4">This item starts closed</p>
        </RsCollapseItem>
        <RsCollapseItem title="Second Item" open>
          <p class="p-4">This item starts open</p>
        </RsCollapseItem>
        <RsCollapseItem title="Third Item">
          <p class="p-4">This item starts closed</p>
        </RsCollapseItem>
      </RsCollapse>
    </div>

    <!-- API Documentation -->
    <div class="space-y-4">
      <h2 class="text-xl font-semibold">API Documentation</h2>
      
      <div class="space-y-2">
        <h3 class="font-semibold">RsCollapse Props</h3>
        <ul class="list-disc list-inside pl-4 space-y-2">
          <li><code>accordion</code> (Boolean) - Enable accordion mode where only one item can be open at a time</li>
          <li><code>type</code> (String) - Style variant: 'default', 'border', or 'card'</li>
        </ul>
      </div>

      <div class="space-y-2">
        <h3 class="font-semibold">RsCollapseItem Props</h3>
        <ul class="list-disc list-inside pl-4 space-y-2">
          <li><code>title</code> (String) - Title of the collapse item</li>
          <li><code>open</code> (Boolean) - Whether the item should be open by default</li>
        </ul>
      </div>
    </div>
  </div>
</template>
