<template>
  <div class="footer">
    <font-awesome-icon class="footer__icon" icon="home"> </font-awesome-icon>
    <font-awesome-icon
      class="footer__icon"
      icon="comment-dots"
    ></font-awesome-icon>
    <font-awesome-icon class="footer__icon" icon="user"></font-awesome-icon>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.footer {
  padding: 15px 0;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid $border-color;
  &__icon {
    color: $main-color;
    font-size: 24px;
  }
}
</style>
