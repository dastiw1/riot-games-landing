<template>
  <header class="main-header">
    <MainHeaderLogo />
    <div class="main-header__nav-items main-header__nav-items_left">
      <a
        v-for="item in routes"
        :key="item.name"
        :href="item.link"
        class="main-header__nav-item"
      >
        {{ item.name }}
        <div v-if="item.children" class="main-header__nav-item-arrow"></div>
      </a>
    </div>
    <div class="main-header__nav-items main-header__nav-items_right">
      <div class="main-header__nav-item">
        <img
          class="main-header__avatar-img"
          :src="require('@/assets/img/profile.png')"
          alt=""
        />
        {{ username }}
        <div class="main-header__nav-item-arrow"></div>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import MainHeaderLogo from "./MainHeaderLogo.vue";

const routes = [
  {
    name: "game",
    link: "#",
  },
  {
    name: "champions",
    children: [
      {
        name: "foo",
        link: "#bar",
      },
    ],
  },
  {
    name: "path notes",
    link: "#",
  },
  {
    name: "discover",
    children: [
      {
        name: "foo",
        link: "#bar",
      },
    ],
  },
  {
    name: "esports",
    link: "#",
  },
  {
    name: "universe",
    link: "#",
  },
  {
    name: "shop",
    link: "#",
  },
  {
    name: "support",
    link: "#",
  },
];

export default {
  components: { MainHeaderLogo },
  data() {
    return {
      username: "unepickid",
      routes,
    };
  },
};
</script>
<style lang="scss" scoped>
.main-header {
  display: flex;
  background: #1f2326;
  padding: 44px 72px;

  &__nav-items {
    display: flex;
    justify-content: space-between;
    margin-left: 86px;

    &_left {
      flex: 1 0 auto;
    }

    &_right {
      flex: 1 0 auto;
      justify-content: flex-end;
    }
  }

  &__nav-item {
    display: inline-flex;
    align-items: center;
    color: #fff;
    text-transform: uppercase;
    font-family: Montserrat;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;
    padding: 0 8px;
  }
  &__nav-item-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 6px 3.5px 0 3.5px;
    border-color: currentColor transparent transparent transparent;
    margin-left: 17px;
  }

  &__avatar-img {
    margin-right: 10px;
  }
}
</style>
