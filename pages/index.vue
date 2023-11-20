<script setup lang="ts"></script>

<template>
  <div class="parent">
    <div class="flex flex-column main-img justify-content-center">
      <h3 class="w-full main-banner font-italic mt-3 text-white">Good Things Are Coming</h3>
      <div class="flex w-full justify-content-center gap-3">
        <Newsletter />
      </div>
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
      font-family: var(--font-family);
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
