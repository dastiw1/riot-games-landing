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
        <div class="ability-card__square">
          <svg
            width="167"
            height="161"
            viewBox="0 0 167 161"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M153.746 80.5C153.746 117.902 122.296 148.222 83.5 148.222C44.704 148.222 13.254 117.902 13.254 80.5C13.254 43.0979 44.704 12.7778 83.5 12.7778C122.296 12.7778 153.746 43.0979 153.746 80.5ZM167 80.5C167 124.959 129.616 161 83.5 161C37.3843 161 0 124.959 0 80.5C0 36.0412 37.3843 0 83.5 0C129.616 0 167 36.0412 167 80.5ZM72.8964 40.8886L58.2417 27.938C47.7564 32.4934 38.9189 39.9495 32.8299 49.2459L39.7613 62.6111L28.1066 58.1165C25.3668 64.6335 23.8578 71.7581 23.8578 79.2227C23.8578 82.737 24.1923 86.1761 24.832 89.512L45.0631 85.6109L63.6186 54.9444L59.6422 85.6109L34.2039 111.202C36.9706 115.052 40.2233 118.553 43.876 121.622L43.7378 121.389L58.3169 109.889L50.7397 126.586C59.8111 132.194 70.5992 135.445 82.1751 135.445C96.5432 135.445 109.698 130.436 119.862 122.13L111.333 111.166L79.5235 107.333L108.682 98.3889L110.008 81.7777L95.428 49.8331L119.285 80.5V97.1107L133.61 105.743C138.002 97.8424 140.492 88.813 140.492 79.2227C140.492 66.4018 136.041 54.5835 128.547 45.1252L116.635 60.0552L122.748 38.8377C112.251 29.0341 97.9441 23.0006 82.1751 23.0006C81.7317 23.0006 81.2896 23.0056 80.8489 23.015V34.4996L84.8249 40.8886L78.1978 66.4443L72.8964 40.8886Z"
              fill="#1F2326"
            />
          </svg>
        </div>
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
  padding: 10px 30px;

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
    height: 110px;
    width: 110px;
    position: absolute;
    bottom: 0;

    > svg {
      width: 95%;
      height: 95%;
      position: absolute;
      left: 30%;
      top: -19%;
    }
  }
}
</style>
