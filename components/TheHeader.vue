<template>
  <div>
    <header class="header">
      <div class="header__icon">
        <slot name="header-left"></slot>
      </div>
      <h1 class="header__title"><slot>ユーザー登録</slot></h1>
      <div class="header__icon --right">
        <slot name="header-right"></slot>
      </div>
    </header>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.header {
  padding: 53px 20px 15px;
  background-color: $header-color;
  display: flex;
  justify-content: space-between;
  text-align: center;
  &__title {
    font-size: 15px;
    font-weight: normal;
    color: white;
  }
  &__icon {
    color: $main-color;
    font-size: 18px;
    cursor: pointer;
  }
}
</style>
