<template>
  <div class="h-1 bg-gray-700">
    <div 
      class="h-full bg-red-600 transition-all duration-300"
      :style="{ width: `${progress}%` }"
    ></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  progress: number
}>()
</script>