<script setup>
const props = defineProps({
  title: {
    type: String,
    required: false,
  },
  open: {
    type: Boolean,
    default: false
  }
});
const collapseGroup = ref(null);
const parentID = ref(null);
const defaultOpen = inject('defaultOpen', []);

const instance = getCurrentInstance();

const isAccordion = instance.parent.props.accordion;
const type = ref(instance.parent.props.type);
const height = ref(0);
const maxHeight = ref(60);

//watch intance type
watch(
  () => instance.parent.props.type,
  (newValue) => {
    type.value = newValue;
  },
  { deep: true }
);

const onClick = () => {
  const parentElement = document.querySelector(`#${collapseGroup.value.id}`);
  parentID.value = parentElement.parentElement.id;

  const scrollHeight = parentElement.scrollHeight;
  const targetOpenCollapse = parentElement.classList.contains(
    "accordion-group--open"
  );
  const openCollapse = document.querySelector(
    `#${parentID.value} .accordion-group--open`
  );

  if (isAccordion) {
    if (openCollapse) {
      const openCollapseHeader = document.querySelector(
        `#${parentID.value} .accordion-group--open .accordion-header`
      );
      openCollapse.style.maxHeight = `${openCollapseHeader.scrollHeight}px`;
      openCollapse.classList.remove("accordion-group--open");
    }
  }
  if (targetOpenCollapse) {
    parentElement.style.maxHeight = maxHeight.value + "px";
    parentElement.classList.remove("accordion-group--open");
  } else {
    parentElement.style.maxHeight = scrollHeight + "px";
    parentElement.classList.add("accordion-group--open");
  }
};

const initializeCollapse = () => {
  if (props.index === null) return;
  
  const shouldOpen = Array.isArray(defaultOpen) 
    ? defaultOpen.includes(props.index)
    : defaultOpen === props.index;

  if (shouldOpen) {
    nextTick(() => {
      const parentElement = document.querySelector(`#${collapseGroup.value.id}`);
      const scrollHeight = parentElement.scrollHeight;
      parentElement.style.maxHeight = scrollHeight + "px";
      parentElement.classList.add("accordion-group--open");
    });
  }
};

// On mounted get height collapse header and initialize state
onMounted(() => {
  try {
    const parentElement = document.querySelector(
      `#${collapseGroup.value.id} .accordion-header`
    );
    
    const scrollHeight = parentElement.scrollHeight;
    maxHeight.value = scrollHeight;
    height.value = scrollHeight;

    // Initialize open state if prop is true
    if (props.open) {
      nextTick(() => {
        const element = document.querySelector(`#${collapseGroup.value.id}`);
        const scrollHeight = element.scrollHeight;
        element.style.maxHeight = scrollHeight + "px";
        element.classList.add("accordion-group--open");
      });
    }
  } catch (error) {
    // console.log(error);
    return;
  }
});
</script>

<template>
  <div
    v-uid
    ref="collapseGroup"
    class="accordion-group"
    :class="{
      'accordion-default': type === 'default',
      'accordion-border': type === 'border',
      'accordion-card': type === 'card',
    }"
    :style="`max-height: ${maxHeight}px; transition-property: max-height`"
  >
    <div class="accordion-header" @click="onClick">
      <slot v-if="!!$slots.title" name="title"></slot>
      <span v-else> {{ title }}</span>
    </div>
    <div class="accordion-body">
      <slot />
    </div>
  </div>
</template>
