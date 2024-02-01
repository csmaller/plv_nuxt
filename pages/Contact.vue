<template>
  <div class="grid">
    <div class="contact-container col-3 h-full sticky">
      <ContactInfo />
    </div>
    <div class="col-9">
      <Divider link="contact_us" />
      <ContactUs />
      <Divider link="faqs" />
      <Faqs />
      <Divider />
    </div>
  </div>
</template>
<style lang="scss">
.contact-container {
  background-color: var(--color-light-green);
  font-family: var(--font-candara);

  a {
    font-family: var(--font-candara);
  }
}
</style>
