<template>
  <div>
    <slot />
    <input type="checkbox" :checked="checked" />
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  checked: {
    type: Boolean,
    default: false
  }
});
</script>