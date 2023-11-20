<script setup lang="ts"></script>

<template>
  <div class="hidden md:flex md:flex-wrap gap-3 cursor-pointer">
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/about">About</NuxtLink>
    <NuxtLink to="/contact">Contact</NuxtLink>
  </div>
</template>
<style lang="scss" scoped>
a {
  color: var(--color-primary);
  text-decoration: none;
  cursor: pointer;
  font-size: 24px;
  font-weight: 700;
  font-family: var(--font-family);
}
</style>
