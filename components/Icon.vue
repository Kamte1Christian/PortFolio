<!-- components/Icon.vue -->
<template>
  <svg 
    :class="className"
    :width="size" 
    :height="size" 
    :viewBox="viewBox" 
    :fill="fill ? 'currentColor' : 'none'"
    :stroke="fill ? 'none' : 'currentColor'"
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
  >
    <!-- Play -->
    <polygon v-if="name === 'play'" points="5,3 19,12 5,21" :fill="fill ? 'currentColor' : 'none'" />
    
    <!-- Pause -->
    <rect v-else-if="name === 'pause'" x="6" y="4" width="4" height="16" />
    <rect v-else-if="name === 'pause'" x="14" y="4" width="4" height="16" />
    
    <!-- Plus -->
    <line v-else-if="name === 'plus'" x1="12" y1="5" x2="12" y2="19" />
    <line v-else-if="name === 'plus'" x1="5" y1="12" x2="19" y2="12" />
    
    <!-- Search -->
    <circle v-else-if="name === 'search'" cx="11" cy="11" r="8" />
    <path v-else-if="name === 'search'" d="m21 21-4.35-4.35" />
    
    <!-- Bell -->
    <path v-else-if="name === 'bell'" d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
    <path v-else-if="name === 'bell'" d="M13.73 21a2 2 0 0 1-3.46 0" />
    
    <!-- User -->
    <path v-else-if="name === 'user'" d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle v-else-if="name === 'user'" cx="12" cy="7" r="4" />
    
    <!-- Settings -->
    <circle v-else-if="name === 'settings'" cx="12" cy="12" r="3" />
    <path v-else-if="name === 'settings'" d="M12 1v6m0 6v6m6-12H6m12 6H6" />
    
    <!-- Menu -->
    <line v-else-if="name === 'menu'" x1="3" y1="6" x2="21" y2="6" />
    <line v-else-if="name === 'menu'" x1="3" y1="12" x2="21" y2="12" />
    <line v-else-if="name === 'menu'" x1="3" y1="18" x2="21" y2="18" />
    
    <!-- X (Close) -->
    <line v-else-if="name === 'x'" x1="18" y1="6" x2="6" y2="18" />
    <line v-else-if="name === 'x'" x1="6" y1="6" x2="18" y2="18" />
    
    <!-- Chevron Down -->
    <polyline v-else-if="name === 'chevron-down'" points="6,9 12,15 18,9" />
    
    <!-- Chevron Left -->
    <polyline v-else-if="name === 'chevron-left'" points="15,18 9,12 15,6" />
    
    <!-- Chevron Right -->
    <polyline v-else-if="name === 'chevron-right'" points="9,18 15,12 9,6" />
    
    <!-- Heart -->
    <path v-else-if="name === 'heart'" d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    
    <!-- Share -->
    <circle v-else-if="name === 'share'" cx="18" cy="5" r="3" />
    <circle v-else-if="name === 'share'" cx="6" cy="12" r="3" />
    <circle v-else-if="name === 'share'" cx="18" cy="19" r="3" />
    <line v-else-if="name === 'share'" x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
    <line v-else-if="name === 'share'" x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    
    <!-- Info -->
    <circle v-else-if="name === 'info'" cx="12" cy="12" r="10" />
    <line v-else-if="name === 'info'" x1="12" y1="16" x2="12" y2="12" />
    <line v-else-if="name === 'info'" x1="12" y1="8" x2="12.01" y2="8" />
    
    <!-- Star -->
    <polygon v-else-if="name === 'star'" points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" :fill="fill ? 'currentColor' : 'none'" />
    
    <!-- Calendar -->
    <rect v-else-if="name === 'calendar'" x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line v-else-if="name === 'calendar'" x1="16" y1="2" x2="16" y2="6" />
    <line v-else-if="name === 'calendar'" x1="8" y1="2" x2="8" y2="6" />
    <line v-else-if="name === 'calendar'" x1="3" y1="10" x2="21" y2="10" />
    
    <!-- Clock -->
    <circle v-else-if="name === 'clock'" cx="12" cy="12" r="10" />
    <polyline v-else-if="name === 'clock'" points="12,6 12,12 16,14" />
    
    <!-- Volume 2 -->
    <polygon v-else-if="name === 'volume-2'" points="11,5 6,9 2,9 2,15 6,15 11,19" />
    <path v-else-if="name === 'volume-2'" d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
    
    <!-- Volume X -->
    <polygon v-else-if="name === 'volume-x'" points="11,5 6,9 2,9 2,15 6,15 11,19" />
    <line v-else-if="name === 'volume-x'" x1="23" y1="9" x2="17" y2="15" />
    <line v-else-if="name === 'volume-x'" x1="17" y1="9" x2="23" y2="15" />
    
    <!-- Check -->
    <polyline v-else-if="name === 'check'" points="20,6 9,17 4,12" />
    
    <!-- Log Out -->
    <path v-else-if="name === 'log-out'" d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline v-else-if="name === 'log-out'" points="16,17 21,12 16,7" />
    <line v-else-if="name === 'log-out'" x1="21" y1="12" x2="9" y2="12" />
    
    <!-- Facebook -->
    <path v-else-if="name === 'facebook'" d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    
    <!-- Twitter -->
    <path v-else-if="name === 'twitter'" d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
    
    <!-- Instagram -->
    <rect v-else-if="name === 'instagram'" x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path v-else-if="name === 'instagram'" d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line v-else-if="name === 'instagram'" x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    
    <!-- YouTube -->
    <path v-else-if="name === 'youtube'" d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon v-else-if="name === 'youtube'" points="9.75,15.02 15.5,11.75 9.75,8.48" />
    
    <!-- Globe -->
    <circle v-else-if="name === 'globe'" cx="12" cy="12" r="10" />
    <line v-else-if="name === 'globe'" x1="2" y1="12" x2="22" y2="12" />
    <path v-else-if="name === 'globe'" d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    
    <!-- Headphones -->
    <path v-else-if="name === 'headphones'" d="M3 18v-6a9 9 0 0 1 18 0v6" />
    <path v-else-if="name === 'headphones'" d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    
    <!-- Shield -->
    <path v-else-if="name === 'shield'" d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    
    <!-- Smartphone -->
    <rect v-else-if="name === 'smartphone'" x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line v-else-if="name === 'smartphone'" x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: [String, Number],
    default: 24
  },
  className: {
    type: String,
    default: ''
  },
  fill: {
    type: Boolean,
    default: false
  }
})

const viewBox = computed(() => {
  return '0 0 24 24'
})
</script>