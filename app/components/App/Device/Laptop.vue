<script setup lang="ts">
import type { HTMLAttributes } from "vue";

const props = defineProps<{
  class?: HTMLAttributes["class"];
  url: string;
}>();

const size = { width: 1610, height: 1040 };
const insetStyle = {
  top: "24px",
  left: "180px",
  width: `${size.width.toString()}px`,
  height: `${size.height.toString()}px`,
  maskImage: "url('/images/macbook-mask.png')",
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
  <figure
    :class="
      cn(
        'relative h-[602px] w-[984px] bg-[size:100%_100%] bg-[center_center] bg-no-repeat',
        props.class,
      )
    "
    :style="{ backgroundImage: 'url(\'/images/macbook.png\')' }"
  >
    <picture
      class="absolute [mask-position:center_center] [mask-size:100%_100%] [zoom:50%]"
      :style="insetStyle"
    >
      <img :src="imgBase64Url" />
    </picture>
  </figure>
</template>
