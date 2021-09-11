<template>
  <div id="app">
    <div class="main-container">
      <MainHeader />
      <router-view />
    </div>
  </div>
</template>

<script>
import MainHeader from "@/modules/global/components/MainHeader.vue";

import { defineComponent } from "@vue/composition-api";

export default defineComponent({
  components: { MainHeader },
  setup() {
    //
  },
});
</script>

<style lang="scss">
@import "./styles/global";

// Chrome Reset
a:focus {
  outline: none;
}

.logo,
.logo a {
  color: $white;
  font-weight: normal;
  background-color: inherit;
}

.top-bar,
.top-bar ul {
  background-color: #41b883;
}

li a.menu-button {
  border-radius: 20px;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  font-weight: 600;
  text-transform: uppercase;
  display: inline-block;
  float: right;
}

.content-wrapper {
  padding: 0.75rem 0;
}

.sidebar-menu {
  @include menu-base();
  @include menu-direction(vertical);
  a {
    color: $secondary-color;
    font-weight: normal;
  }
  a.active {
    font-weight: 600;
    color: $primary-color;
  }
}

.main-container {
  //
}
@media screen and (min-width: 768px) {
  .main-container {
    min-width: 1440px;
  }
}
</style>
