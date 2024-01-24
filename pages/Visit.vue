<script setup lang="ts"></script>

<template>
  <div class="home grid w-full">
    <Divider link="tasting" />
    <Tasting class="col-12" />
    <Divider link="tours" />
    <Tours class="col-12" />
    <Divider link="picnic" />
    <Picnic class="col-12" />
    <Divider link="proposal" />
    <Proposal class="col-12" />
    <Divider link="firepit" />
    <FirePit class="col-12" />
    <Divider />
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
