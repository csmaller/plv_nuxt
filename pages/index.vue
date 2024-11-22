<script setup lang="ts">
import { useToast } from 'primevue/usetoast';

const route = useRoute();
const toast = useToast();

onMounted(() => {
  if (route.query.contacted) doToast();
  doToast();
});

const doToast = async () => {
  toast.add({
    severity: 'success',
    summary: 'Sent',
    detail: 'Thank you! Your info has been sent over!',
    life: 3000,
  });
};

/**
 * Display the toast message.
 */
</script>

<template>
  <div class="home grid w-full">
    <Banner />
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
