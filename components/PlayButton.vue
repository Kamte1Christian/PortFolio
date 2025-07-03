<template>
  <div 
  
    class="transform transition-all duration-300"
    
  >
    <div 
      class="w-5 h-5 bg-white/90 rounded-full flex items-center justify-center
             shadow-lg hover:scale-110 hover:bg-white transition-all duration-200
             backdrop-blur-sm"
    >
      <svg 
        class="w-4 h-4 text-black" 
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M8.5 5.3c0-1 1.2-1.6 2-1l9.5 6.7c0.8 0.6 0.8 1.8 0 2.4l-9.5 6.7c-0.8 0.6-2 0-2-1V5.3z"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
defineOptions({
  name: 'PlayButton'
})
</script>