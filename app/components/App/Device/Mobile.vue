<script setup lang="ts">
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  url: string;
}>();

const size = { width: 508, height: 1102 };
const insetStyle = {
  top: "24px",
  left: "28px",
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
        'relative h-[576px] w-[282px] bg-[size:100%_100%] bg-[center_center] bg-no-repeat [mask-position:center_center] [mask-repeat:no-repeat] [mask-size:100%_100%]',
        props.class,
      )
    "
    :style="{
      maskImage: 'url(\'/images/iphone-mask.png\')',
    }"
  >
    <picture :style="insetStyle" class="absolute [zoom:50%]">
      <img :src="imgBase64Url" />
    </picture>
    <figure
      class="absolute h-[576px] w-[282px] bg-[url('/images/iphone.png')] bg-[size:100%_100%] bg-[center_center] bg-no-repeat"
    />
  </div>
</template>
