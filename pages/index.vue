<script setup lang="ts"></script>

<template>
  <div class="home grid w-full">
    <div class="col hidden sm:hidden lg:flex"></div>
    <div class="col-12 sm:col-12 lg:col-3">
      <ImageLink src="/img/barn-night-cropped.png" url="/visit#tasting">
        <h3 class="w-full absolute top-5 text-center left-0">TASTING ROOM</h3>
      </ImageLink>
    </div>
    <div class="col-12 sm:col-12 lg:col-4 flex-column">
      <ImageLink src="/img/jessi.jpeg" url="/events#calendar">
        <h3 class="w-full absolute bottom-10 left-5 text-white">UPCOMING EVENTS</h3>
      </ImageLink>
      <ImageLink src="/img/picnic-cropped.png" url="/visit#tours">
        <h3 class="w-full absolute bottom-10 right-10 text-right text-white">EXPERIENCES</h3>
      </ImageLink>
    </div>
    <div class="col-12 sm:col-12 lg:col-3">
      <ImageLink src="/img/wine-bottle.jpg" url="#wines">
        <h3 class="w-full absolute top-5 text-center left-0">WINES</h3>
      </ImageLink>
    </div>
    <div class="col hidden sm:hidden lg:flex"></div>
    <Divider link="about" />
    <About class="col-12" />
    <Divider link="history" />
    <History class="col-12" />
    <Divider link="wines" />
    <Wines class="col-12" />
    <Divider link="orchard" />
    <Orchard class="col-12" />
    <Divider link="store" />
    <Store class="col-12" />
  </div>
</template>

<style scoped lang="scss">
h3 {
  font-family: var(--font-baskerville);
  font-size: 22px;
  cursor: pointer;
}
.top-10 {
  top: 10%;
}
.bottom-10 {
  bottom: 10%;
}
</style>
