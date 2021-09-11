<template>
  <div class="abilities-slider">
    <div class="ablities-slider__slider" id="abilities" data-auto-play="true">
      <div class="row">
        <div class="columns medium-10">
          <ul class="orbit-container">
            <li
              v-for="key in 3"
              :key="key"
              class="ablities-slider__slide is-active orbit-slide"
            >
              <div class="row">
                <div
                  class="columns medium-4"
                  v-for="(ability, key) in abilities"
                  :key="key"
                >
                  <AbilityCard :ability="ability" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="columns medium-2">
          <button class="abilities-slider__controls orbit-next">
            <span class="show-for-sr">Next Slide</span>&#9654;&#xFE0E;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import $ from "jquery";
import {
  defineComponent,
  onMounted,
  ref,
  onBeforeMount,
  reactive,
  toRefs,
} from "@vue/composition-api";
import Foundation from "@/plugins/foundation";
import AbilitiesApi from "@/tools/api/abilities.api";
import AbilityCard from "./AbilityCard.vue";

export default defineComponent({
  components: { AbilityCard },
  setup() {
    const orbit = ref();
    const model = reactive<{
      abilities: any[];
    }>({
      abilities: [],
    });

    onBeforeMount(async () => {
      model.abilities = await AbilitiesApi.fetchAbilities();
    });

    onMounted(() => {
      orbit.value = new Foundation.Orbit($("#abilities"), {
        // These options can be declarative using the data attributes
        timerDelay: 2000,
      });
    });

    return {
      ...toRefs(model),
    };
  },
});
</script>

<style lang="scss" scoped>
.orbit-container {
  min-height: 200px;
}
.abilities-slider {
  //

  &__slide {
    //
  }
  &__controls {
    position: relative;
    width: 159px;
    height: 179px;
    background: #f8f8f8;
    border: 2px solid #000000;
    box-sizing: border-box;
  }
}
</style>
