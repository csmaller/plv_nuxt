<template>
  <div class="grid">
    <div class="contact-container col-12 sm:col-12 lg:col-3 h-auto sm:h-auto lg:h-full flex sm:flex lg:sticky">
      <ContactInfo />
    </div>
    <div class="content-container col-12 sm:col-12 lg:col-9">
      <Divider link="contact_us" />
      <ContactUs />
      <Divider />
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

@media (max-width: 760px) {
  .contact-container {
    -ms-flex-order: 1;
    -webkit-order: 1;
    order: 1;
    height: auto;
    display: flex;
  }

  .content-container {
    -ms-flex-order: 2;
    -webkit-order: 2;
    order: 2;
  }
}
</style>
