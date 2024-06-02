<template>
  <div>
    <AppHeader/>
    <NuxtPage />
    <AppFooter/>
  </div>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig();
console.log(runtimeConfig);
</script>
