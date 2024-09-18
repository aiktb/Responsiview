<script setup lang="ts">
const url = ref("https://github.com");
</script>

<template>
  <div>
    <div class="relative min-h-screen">
      <AppDeviceLaptop :url class="absolute bottom-0 translate-x-0" />
      <AppDeviceTablet :url class="absolute bottom-0 translate-x-[600px]" />
      <AppDeviceMobile :url class="absolute bottom-0 translate-x-[1600px] [zoom:75%]" />
    </div>
  </div>
</template>
