<script setup lang="ts"></script>

<template>
  <div class="flex flex-column p-0">
    <div class="flex flex-wrap w-full px-4 justify-content-center">
      <h1 class="text-center underline pb-2">Mission</h1>
      <Mission />
    </div>
    <div class="parent">
      <div class="flex w-12 p-0 main-img"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.parent {
  -webkit-mask-image: linear-gradient(to top, rgb(0, 0, 0) 0%, transparent 100%);
  mask-image: linear-gradient(to top, rgba(0, 0, 0, 1) 70%, transparent 100%);

  .main-img {
    min-height: 760px;
    min-width: 100vw;
    background-image: url(/img/main_bg.jpg);
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-repeat: no-repeat;
    background-position: 0% 7%;

    .main-banner {
      font-size: 100px;
      text-align: center;

      @media (max-width: 700px) {
        font-size: 34px;
        margin-top: 60px !important;
      }

      @media (max-width: 500px) {
        margin-top: 24px !important;
      }
    }

    @media (max-width: 768px) {
      min-height: 580px;
    }

    @media (max-width: 480px) {
      min-height: 320px;
    }
  }
}
</style>
