<script setup lang="ts"></script>

<template>
  <div class="home grid w-full">
    <HomeImages />
    <div class="col hidden sm:hidden lg:flex"></div>
    <Divider link="about" />
    <About class="col-12" />
    <Divider link="history" />
    <History class="col-12" />
    <Divider link="wines" />
    <Wines class="col-12" />
    <Divider link="store" />
    <Store class="col-12" />
    <Divider link="orchard" />
    <Orchard class="col-12" />
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
