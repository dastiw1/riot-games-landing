<template>
  <div class="home">
    <div class="container">
      <div class="home__overlay"></div>
      <div class="row">
        <div class="column">
          <AgentsSlider />
        </div>
      </div>
      <div class="row">
        <div class="column">
          <AbilitiesSlider />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "@vue/composition-api";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import AgentsSlider from "../components/agents-slider/AgentsSlider.vue";
import AbilitiesSlider from "../components/abilities/AbilitiesSlider.vue";

export default defineComponent({
  components: { HelloWorld, AgentsSlider, AbilitiesSlider },
  setup() {
    //
  },
});
</script>

<style lang="scss" scoped>
.home {
  background-color: #ff4656;

  &__overlay {
    position: absolute;
    background-image: url("~@/assets/img/background.jpg");
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: 100% auto;
    width: 100%;
    min-height: 100vh;
    pointer-events: none;
  }
}
</style>
