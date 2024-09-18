<script setup lang="ts">
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  url: string;
}>();

const size = { width: 1262, height: 882 };
const insetStyle = {
  top: "47px",
  left: "47px",
  width: `${size.width.toString()}px`,
  height: `${size.height.toString()}px`,
};

const imgBase64Url = ref<string>();
const { $client } = useNuxtApp();
watchEffect(async () => {
  const imgBase64 = await $client.screenshot.query({
    url: props.url,
    width: size.width,
    height: size.height,
  });
  imgBase64Url.value = `data:image/png;base64,${imgBase64}`;
});
</script>

<template>
  <div
    :class="
      cn(
        'relative h-[488px] w-[676px] bg-[size:100%_100%] bg-[center_center] bg-no-repeat',
        props.class,
      )
    "
  >
    <picture :style="insetStyle" class="absolute [zoom:50%]">
      <img :src="imgBase64Url" />
    </picture>
    <figure
      class="absolute h-[488px] w-[676px] bg-[url('/images/ipad.png')] bg-[size:100%_100%] bg-[center_center] bg-no-repeat"
    />
  </div>
</template>
