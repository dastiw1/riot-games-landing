<template>
  <div class="agent-card">
    <div class="agent-card__info">
      <div class="agent-card__country">{{ agent.country }}</div>
      <div class="anget-card_svg-container">
        <!-- <canvas width="94" height="500"></canvas> -->
        <div class="agent-card__name" v-html="agent.name"></div>
      </div>
    </div>
    <div class="agent-card__photo">
      <img :src="agent.photo" alt="" class="agent-card__img" />
    </div>
    <div
      class="agent-card__abilities"
      :class="`agent-card__abilities_` + agent.scheme"
    >
      <img :src="agent.abilities" alt="" class="agent-card__img" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "AgentCard",
  props: {
    agent: {
      type: Object,
      required: true,
    },
  },
});
</script>

<style>
.agent-card__name > svg {
  width: 50%;
  height: auto;
}
</style>
<style lang="scss" scoped>
.agent-card {
  position: relative;

  &__info {
    position: relative;
    width: 100%;
    height: 100%;
  }
  &__name {
    position: absolute;
    left: -10px;
    top: 31px;
    display: block;
  }
  &__country {
    position: absolute;
    top: 30px;
    font-family: Druk Wide;
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 28px;
    letter-spacing: 0.1em;
    left: 55px;
    width: 300px;
    color: #ff4656;
    transform-origin: 0 0;
    transform: rotate(90deg);
  }
  &__abilities {
    position: relative;
    bottom: 40px;
    left: 25px;
    display: flex;
    align-items: center;
    min-height: 63px;

    box-sizing: border-box;
    padding: 10px 30px;
    &_black {
      background-color: #1f2326;
      border: 2px solid #f8f8f8;
    }
    &_white {
      background-color: #fff;
      border: 2px solid #1f2326;
    }
  }
}
</style>
