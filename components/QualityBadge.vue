<template>
  <span 
    v-if="quality"
    class="px-2 py-1 text-xs font-bold rounded"
    :class="qualityClass"
  >
    {{ quality }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  quality?: string
}

const props = withDefaults(defineProps<Props>(), {
  quality: undefined
})

const qualityClass = computed(() => ({
  'bg-red-600 text-white': props.quality === 'HD',
  'bg-blue-600 text-white': props.quality === '4K',
  'bg-purple-600 text-white': props.quality === '8K',
  'bg-gray-600 text-white': !props.quality
}))
</script>