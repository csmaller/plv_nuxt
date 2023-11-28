<script setup lang="ts"></script>

<template>
  <div class="mx-3 grid w-full">
    <div class="col"></div>
    <div class="col-3">
      <ImageLink src="/img/barn-night-cropped.png" url="/about">
        <h3 class="w-full absolute top-5 text-center left-0">TASTING ROOM</h3>
      </ImageLink>
    </div>
    <div class="col-4 flex-column">
      <ImageLink src="/img/randy-cropped.png" url="/about">
        <h3 class="w-full absolute bottom-10 left-5 text-white">UPCOMING EVENTS</h3>
      </ImageLink>
      <ImageLink src="/img/picnic-cropped.png" url="/about">
        <h3 class="w-full absolute bottom-10 right-10 text-right text-white">EXPERIENCES</h3>
      </ImageLink>
    </div>
    <div class="col-3">
      <ImageLink src="/img/wine-bottle.jpg" url="/about">
        <h3 class="w-full absolute top-5 text-center left-0">WINES</h3>
      </ImageLink>
    </div>
    <div class="col"></div>
  </div>
</template>

<style scoped lang="scss">
h3 {
  font-family: var(--font-baskerville);
  font-size: 22px;
  cursor: pointer;

  @media (max-width: 550px) {
    font-size: 15px;
  }
}
.top-10 {
  top: 10%;
}
.bottom-10 {
  bottom: 10%;
}
</style>
