<script setup lang="ts"></script>

<template>
  <form name="plvContactUsForm" method="POST" netlify action="/thanks">
    <input type="hidden" name="form-name" value="plvContactUsForm" />

    <input class="w-full p-2" id="name" name="name" placeholder="Enter your name" />

    <input id="email" class="w-full p-2" name="email" placeholder="Enter your email" />

    <textarea id="message" name="message" rows="5" class="p-2" placeholder="Enter your message"></textarea>

    <button id="save_btn" type="submit" label="SEND" class="button w-12 sm:w-12 lg:w-3 py-2 mt-4"></button>
  </form>
</template>

<style scoped lang="scss"></style>
