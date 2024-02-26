<script setup lang="ts">
import images from '@/content/json/main.json';
</script>

<template>
  <div class="col hidden sm:hidden lg:flex"></div>
  <div class="col-12 sm:col-12 lg:col-3">
    <ImageLink :src="images.images[0].tasting_image" url="/visit#tasting">
      <h3 class="w-full absolute top-5 text-center left-0 text-white">TASTING ROOM</h3>
    </ImageLink>
  </div>
  <div class="col-12 sm:col-12 lg:col-4 flex-column">
    <ImageLink :src="images.images[0].events_image" url="/events#calendar">
      <h3 class="w-full absolute bottom-10 left-5 text-white">UPCOMING EVENTS</h3>
    </ImageLink>
    <ImageLink :src="images.images[0].experience_image" url="/visit#tours">
      <h3 class="w-full absolute bottom-10 right-10 text-right text-white">EXPERIENCES</h3>
    </ImageLink>
  </div>
  <div class="col-12 sm:col-12 lg:col-3">
    <ImageLink :src="images.images[0].wine_image" url="#wines">
      <h3 class="w-full absolute top-5 text-center left-0 text-white">WINES</h3>
    </ImageLink>
  </div>
</template>

<style scoped lang="scss"></style>
