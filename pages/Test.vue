<template>
  <div>
    <section class="App__example">
      <ParallaxContainer class="App__example-double-element my-6" :background-img="`/img/engagement-1.jpg`">
        <!-- <ParallaxImage :width="400" :height="225" :factor="0.8" class="">
          <img src="/img/barn-night-cropped.png" :style="{ width: '400px', height: '225px' }" />
        </ParallaxImage> -->
        <ParallaxElement
          :factor="0.5"
          class="App__example-element w-full p-1 justify-content-center align-content-center"
        >
          <About />
        </ParallaxElement>
      </ParallaxContainer>
    </section>
    <section class="App__example">
      <ParallaxContainer class="App__example-double-element my-6" :background-img="`/img/firepit-vines-1.jpg`">
        <ParallaxElement
          :factor="0.5"
          class="App__example-element w-full p-1 justify-content-center align-content-center"
        >
          <History />
        </ParallaxElement>
      </ParallaxContainer>
    </section>
    <section class="App__example">
      <ParallaxContainer class="App__example-double-element my-6" :background-img="`/img/pears.jpg`">
        <ParallaxElement
          :factor="0.5"
          class="App__example-element w-full p-1 justify-content-center align-content-center"
        >
          <Orchard />
        </ParallaxElement>
      </ParallaxContainer>
    </section>
    <section class="App__example">
      <ParallaxContainer class="App__example-double-element my-6" :background-img="`/img/vineyard.jpg`">
        <ParallaxElement
          :factor="0.5"
          class="App__example-element w-full p-1 justify-content-center align-content-center"
        >
          <Store />
        </ParallaxElement>
      </ParallaxContainer>
    </section>
  </div>
</template>

<script></script>

<style lang="scss">
// ...

.App__example {
  padding-bottom: 5px;
}

.App__example-single-element {
  height: 20em;
  background-color: lightblue;
}

.App__example-double-element {
  display: flex;
  width: 100vw;
  position: relative;
}

.App__example-element {
  max-width: 100vw;
  z-index: 1000;
  background: rgb(226, 239, 218, 0.2);

  //border: 2px solid red;
  //color: white;
}
</style>
