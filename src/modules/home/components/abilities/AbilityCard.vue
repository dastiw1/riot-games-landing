<template>
  <div class="ability-card">
    <div class="row">
      <div class="columns small-7">
        <div class="ability-card__info">
          <div class="ability-card__type" v-text="ability.type"></div>
          <div class="ability-card__title" v-text="ability.name"></div>
          <div class="ability-card__descr" v-text="ability.description"></div>
        </div>
      </div>
      <div class="columns small-5">
        <div class="ability-card__square" v-html="ability.icon"></div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  props: {
    ability: {
      type: Object,
      required: true,
    },
  },
  setup() {
    //
  },
});
</script>

<style lang="scss" scoped>
.ability-card {
  position: relative;
  background-color: #f8f8f8;
  border: 2px solid #000000;
  box-sizing: border-box;
  font-family: Druk Wide;
  padding: 25px 30px;
  overflow: hidden;

  &__info {
    display: flex;
    flex-direction: column;
  }
  &__type {
    font-weight: 500;
    font-size: 1.33rem;
    line-height: 52px;

    color: #c4c4c4;
  }
  &__title {
    font-weight: 500;
    font-size: 24px;
    line-height: 31px;
    margin-bottom: 12px;
    color: #000000;
    height: 31px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  &__descr {
    height: 60px;
    overflow: hidden;
    font-family: Montserrat;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.1em;

    color: #1f2326;
  }

  &__square {
    background: #ff4656;
    height: 150px;
    width: 150px;
    position: absolute;
    bottom: 0;
  }
}
</style>

<style lang="scss">
.ability-card__square > svg {
  width: 95%;
  height: 95%;
  position: absolute;
  left: 2%;
  top: 2%;
}
@include breakpoint(medium) {
  .ability-card__square > svg {
    left: 30%;
    top: -19%;
  }
}
</style>
