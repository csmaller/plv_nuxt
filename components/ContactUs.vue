<script setup lang="ts">
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';
import useVuelidate from '@vuelidate/core';
import { required, minLength, email } from '@vuelidate/validators';

const toast = useToast();

const { data: contactQuery } = await useAsyncData('contact', () => {
  return queryContent('contact')
    .where({ title: { $eq: 'contact_us' } })
    .findOne();
});

interface FormInterface {
  name: string;
  email: string;
  message: string;
}

const defaultForm: FormInterface = {
  name: '',
  email: '',
  message: '',
};

const form = ref<FormInterface>({ ...defaultForm });

/**
 * The required validation rules.
 */
const rules = {
  name: { required, minLength: minLength(3) },
  email: { required, email },
  message: { required, minLength: minLength(10) },
};

/**
 * vuelidate
 */
const v$ = useVuelidate(rules, form);

/**
 * error for form submit
 */
const error = ref<boolean>(false);

const resetForm = () => {
  form.value = { ...defaultForm };
};

const handleSubmit = (event) => {
  event.preventDefault();
  error.value = false;
  const myForm = event.target;
  const formData = new FormData(myForm);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      doToast();
      resetForm();
    })
    .catch((error) => {
      error.value = true;
      doToast();
    });
};

/**
 *
 * @param data
 * encode the query params
 */
const encode = (data: FormInterface) => {
  const formData = new FormData();

  for (const key of Object.keys(data)) {
    formData.append(key, data[key as keyof FormInterface]);
  }

  return formData;
};

/**
 * Display the toast message.
 */
const doToast = () => {
  toast.add({
    severity: error.value ? 'error' : 'success',
    summary: error.value ? 'Error' : 'Sent',
    detail: error.value ? 'There was an error. Please try again' : 'Thank you! Your info has been sent over ',
    life: 3000,
  });
};
</script>

<template>
  <form
    name="plvContact"
    method="POST"
    netlify
    netlify-honeypot
    class="contact-us-form flex flex-wrap sm:w-full lg:w-10 p-3 gap-3"
    v-bind:style="{ backgroundImage: 'url(' + contactQuery.image + ')' }"
    @submit.prevent="handleSubmit"
  >
    <div class="flex w-full justify-content-center">
      <h3>{{ contactQuery.header }}</h3>
    </div>
    <div class="w-full pt-5">
      <input type="hidden" name="form-name" value="plvContact" />
      <div class="flex flex-row">
        <div class="field flex w-6 pr-2 py-4">
          <InputText class="w-full p-2" id="name" v-model="v$.name.$model" name="name" placeholder="Enter your name" />
          <div v-for="error of v$.name.$errors" :key="error.$uid" class="input-errors">
            <div class="p-error">{{ error.$message }}</div>
          </div>
        </div>
        <div class="field flex w-6 py-4 pl-2">
          <InputText
            id="email"
            class="w-full p-2"
            v-model="v$.email.$model"
            name="email"
            placeholder="Enter your email"
          />
          <div v-for="error of v$.email.$errors" :key="error.$uid" class="input-errors">
            <div class="p-error">{{ error.$message }}</div>
          </div>
        </div>
      </div>
      <div class="field flex flex-column">
        <textarea
          id="message"
          v-model="v$.message.$model"
          name="message"
          rows="5"
          class="p-2"
          placeholder="Enter your message"
        ></textarea>
        <div v-for="error of v$.message.$errors" :key="error.$uid" class="input-errors">
          <div class="p-error">{{ error.$message }}</div>
        </div>
      </div>
      <div class="w-full flex justify-content-end px-2">
        <Button id="save_btn" type="submit" label="SEND" :disabled="v$.$invalid" class="button w-3 py-2 mt-4" />
      </div>
    </div>
  </form>
</template>
<style lang="scss">
input,
textarea {
  background-color: var(--color-light-green);
}

h4 {
  font-family: var(--font-baskerville);
}
</style>
