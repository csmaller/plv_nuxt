<script setup lang="ts"></script>

<template>
  <div class="home grid w-full">
    <Divider link="tasting" />
    <Tasting class="col-12" />
    <Divider link="tours" />
    <h1 class="w-full text-center mt-4 experiences">EXPERIENCES</h1>
    <Tours class="col-12" />
    <Divider link="picnic" />
    <Picnic class="col-12" />
    <Divider link="proposal" />
    <Proposal class="col-12" />
    <!-- <Divider link="firepit" />
    <FirePit class="col-12" /> -->
    <Divider />
  </div>
</template>
<style lang="scss" scoped>
.experiences {
  color: var(--color-gray-green);
  font-family: var(--font-baskerville);
  font-size: 36px;
}
</style>
