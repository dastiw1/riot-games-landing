<template>
  <div class="abilities-slider">
    <div class="ablities-slider__slider" id="abilities">
      <div class="row">
        <div class="columns medium-10 large-10 small-12">
          <ul
            v-if="slidesToShowType !== 'small'"
            class="orbit-container show-for-medium"
          >
            <li
              v-for="key in 3"
              :key="key"
              class="ablities-slider__slide orbit-slide"
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

          <ul
            v-if="slidesToShowType === 'small'"
            class="orbit-container show-for-small-only"
          >
            <li
              v-for="(ability, key) in abilities"
              :key="'mobile_' + key"
              class="ablities-slider__slide orbit-slide"
            >
              <div class="row">
                <div class="columns medium-4">
                  <AbilityCard :ability="ability" />
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div class="columns medium-2 large-2 hide-for-small-only">
          <button class="abilities-slider__controls orbit-next" @click="next">
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
  onBeforeUnmount,
} from "@vue/composition-api";
import Foundation from "@/plugins/foundation";
import AbilitiesApi from "@/tools/api/abilities.api";
import AbilityCard from "./AbilityCard.vue";

export default defineComponent({
  components: { AbilityCard },
  setup() {
    const orbit = ref();
    const slidesToShowType = ref<"small" | "medium">("small");

    const model = reactive<{
      abilities: any[];
    }>({
      abilities: [],
    });

    function onResizeHandler() {
      setSlidesToShowType();
    }

    function setSlidesToShowType(initial = false) {
      slidesToShowType.value = Foundation.MediaQuery.current;
      if (!initial) {
        orbit.value._reset();
      }
    }

    function next() {
      orbit.value.changeSlide(true);
    }

    onBeforeMount(async () => {
      window.addEventListener("resize", onResizeHandler);
      model.abilities = await AbilitiesApi.fetchAbilities();
    });

    onMounted(() => {
      setSlidesToShowType(true);
      orbit.value = new Foundation.Orbit($("#abilities"), {
        // These options can be declarative using the data attributes
        timerDelay: 5000,
      });
      setTimeout(async () => {
        orbit.value._init();
        onResizeHandler();
      }, 200);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", onResizeHandler);
      orbit.value._destroy();
    });

    return {
      orbit,
      slidesToShowType,
      ...toRefs(model),
      // functions
      next,
    };
  },
});
</script>

<style lang="scss" scoped>
.orbit-container {
  min-height: 200px;
}
.abilities-slider {
  overflow: hidden;

  &__slide {
    //

    .column,
    .columns {
      padding-left: 1.66rem;
      padding-right: 1.66rem;
    }
  }
  &__controls {
    position: relative;
    width: 159px;
    height: 210px;
    background: #f8f8f8;
    border: 2px solid #000000;
    box-sizing: border-box;
    top: 0;
    transform: none;
    color: #1f2326;
    cursor: pointer;
  }
}

@include breakpoint(medium) {
  .abilities-slider {
    //

    &__slide {
      //

      .column,
      .columns {
        padding-left: 1.66rem;
        padding-right: 1.66rem;
      }
    }
  }
}
</style>
