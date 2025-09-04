<template>
  <div class="min-h-screen text-white bg-black">
    <Header />
    <main>
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import Header from '~/components/Header.vue';
</script>

<style>

</style>