<script lang="ts" setup>
const images = ref(['barn', 'bottles', 'grapes', 'rows', 'rows2', 'vines', 'wedding', 'barn2']);
const currentSlide = ref(0);
</script>

<template>
  <Carousel
    v-model="currentSlide"
    :items-to-show="1"
    :wrap-around="true"
    :transition="1000"
    :autoplay="5000"
    :pause-autoplay-on-hover="true"
    class="carousel sm:w-full"
  >
    <template #slides>
      <Slide v-for="(slide, index) in images" :key="index">
        <img :src="`/img/slider/${slide}.jpg`" class="carousel__item" />
      </Slide>
    </template>
    <template #addons>
      <Navigation />
      <Pagination />
    </template>
  </Carousel>
</template>

<style lang="scss" scoped>
.carousel__item {
  height: 360px;
  width: 100%;
  display: flex;
  animation: fadeIn 3s;
}

:deep(.carousel__prev) {
  visibility: hidden;
}
:deep(.carousel__next) {
  visibility: hidden;
}
:deep(.carousel__pagination) {
  @media (max-width: 700px) {
    padding-left: 0;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes fadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.carousel__viewport {
  perspective: 600px;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.9;
  transform: rotateY(-20deg) scale(0.9);
}

.carousel__slide--active ~ .carousel__slide {
  transform: rotateY(20deg) scale(0.9);
}

.carousel__slide--prev {
  animation: fadeOut 2s;
}

.carousel__slide--next {
  opacity: 0;
}

.carousel__slide--visible {
  opacity: 0;
  animation: fadeIn 3s;
}

.carousel__slide--active {
  opacity: 1;
}
</style>
