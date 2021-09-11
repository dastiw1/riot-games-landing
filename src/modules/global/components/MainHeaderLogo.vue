<template functional>
  <div class="main-header-logo">
    <div class="main-header-logo__img-wrapper">
      <img
        class="main-header-logoo__img-wrapper"
        :src="require('@/assets/img/riot-games-logo.png')"
        alt=""
      />
    </div>
    <div class="main-header-logo__divider"></div>
    <div class="main-header-logo">
      <img
        class="main-header-logo-img"
        :src="require('@/assets/img/logo.png')"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-header-logo {
  display: flex;
  &__divider {
    height: 42px;
    width: 2px;
    background-color: #fff;
    margin: 0 60px;
  }
}
</style>
