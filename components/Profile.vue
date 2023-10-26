<script setup lang="ts">
interface PropsInterface {
  name: string;
  email?: string;
  phone?: string;
}
const props = defineProps<PropsInterface>();

const { name, email, phone } = toRefs(props);
</script>

<template>
  <div class="flex flex-column w-full justify-content-center align-content-center text-center">
    <h5 v-if="email" class="flex flex-column">
      <small>
        <a :href="`mailto:${email}`">{{ email }}</a>
      </small>
      <small v-if="phone">{{ phone }}</small>
    </h5>
    <div class="flex flex-column sm:flex-column md:flex-row gap-3 text-left p-4">
      <div class="flex-inline sm:w-full md:w-6">
        <ImageCarousel />
      </div>
      <div class="md:w-6 sm:w-full">
        <h2 class="sm:w-full mt-3 text-center">{{ name }}</h2>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.contact-link {
  margin-left: 140px;
  font-size: 16px;

  @media (max-width: 700px) {
    margin-left: 0;
  }
}
</style>
