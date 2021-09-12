<template>
  <header class="main-header">
    <div
      id="main-header-toggle"
      class="title-bar"
      data-responsive-toggle="main-header-menu"
      data-hide-for="medium"
    >
      <button
        class="menu-icon"
        type="button"
        data-toggle="main-header-menu"
      ></button>
      <div class="title-bar-title"><MainHeaderLogo /></div>
    </div>

    <div class="top-bar" id="main-header-menu">
      <div
        class="top-bar-left main-header__nav-items main-header__nav-items_left"
      >
        <ul class="vertical medium-horizontal menu">
          <li class="site-text show-for-medium"><MainHeaderLogo /></li>
          <li v-for="item in routes" :key="item.name">
            <a :href="item.link" class="main-header__nav-item">
              {{ item.name }}
              <div
                v-if="item.children"
                class="main-header__nav-item-arrow"
              ></div>
            </a>
          </li>
        </ul>
      </div>

      <div
        class="
          top-bar-right
          main-header__nav-items main-header__nav-items_right
        "
      >
        <ul class="menu">
          <li>
            <div class="main-header__nav-item">
              <img
                class="main-header__avatar-img"
                :src="require('@/assets/img/profile.png')"
                alt=""
              />
              {{ username }}
              <div class="main-header__nav-item-arrow"></div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import {
  defineComponent,
  onBeforeMount,
  onBeforeUnmount,
  onMounted,
  ref,
} from "@vue/composition-api";
import $ from "jquery";
import Foundation from "@/plugins/foundation";

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

export default defineComponent({
  components: { MainHeaderLogo },
  setup() {
    const nav = ref();
    const toggle = ref();
    onMounted(() => {
      nav.value = new Foundation.ResponsiveMenu($("#main-header-menu"));
      toggle.value = new Foundation.ResponsiveToggle($("#main-header-toggle"));
    });

    onBeforeUnmount(() => {
      toggle.value._destroy();
      nav.value._destroy();
    });

    return {
      username: "unepickid",
      routes,
    };
  },
});
</script>

<style lang="scss" scoped>
.main-header {
  display: flex;
  background: #1f2326;
  .top-bar {
    width: 100%;
  }

  &__nav-items {
    display: flex;
    justify-content: space-between;

    &_left {
      flex: 1 0 auto;
    }

    &_right {
      flex: 1 0 auto;
      justify-content: flex-end;
    }
  }
  .menu {
    align-items: center;
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
.title-bar {
  width: 100%;
  background-color: #1f2326;
}
.no-js {
  @include breakpoint(small only) {
    .top-bar {
      display: none;
    }
  }

  @include breakpoint(medium) {
    .title-bar {
      display: none;
    }
  }
}

@include breakpoint(medium) {
  .main-header {
    padding: 44px 72px;
  }
}

@include breakpoint(small only) {
  .main-header {
    .menu {
      align-items: baseline;
    }
    &__nav-items_right {
      flex: initial !important;
    }
  }
}
</style>
