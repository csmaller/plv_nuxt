export default defineNuxtPlugin((nuxtApp) => {
  const { gtagId } = useRuntimeConfig().public;

  function gtag() {
    window.dataLayer.push(arguments);
  }

  window.dataLayer = window.dataLayer || [];

  gtag('js', new Date());
  gtag('config', gtagId);

  useHead({
    script: [
      {
        src: `https://www.googletagmanager.com/gtag/js?id=G-W6BF2035L0`,
        async: true,
      },
    ],
  });
});

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-W6BF2035L0"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-W6BF2035L0');
// </script>
