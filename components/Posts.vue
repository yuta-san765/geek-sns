<template>
  <div class="timeline">
    <div class="posts">
      <div class="posts__heading">
        <div class="posts__face"></div>
        <h2 class="posts__username">一生見習い</h2>
        <time class="posts__timestamp">8分前</time>
      </div>
      <div class="posts__content">
        <p class="posts__comment">毎日ひたすらコード書いてる。</p>
        <div class="posts__pictures">
          <img src="#" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.timeline {
  padding: 20px;
  border-bottom: 0.5px solid rgba($color: $border-timeline, $alpha: 0.5);
}
.posts {
  padding: 15px 0 33px;
  &__heading {
    display: flex;
  }
  &__face {
    width: 40px;
    height: 40px;
    background-color: aqua;
    border-radius: 50%;
  }
  &__username {
    font-size: 11px;
    font-weight: normal;
    padding: 11px 10px;
  }
  &__timestamp {
    font-weight: normal;
    font-size: 8px;
    color: #707070;
    opacity: 0.6;
    margin-left: auto;
  }
  &__content {
    padding-left: 50px;
  }
  &__comment {
    margin-bottom: 10px;
  }
  &__pictures {
    max-width: 285px;
    display: flex;
  }
  &__picture {
    max-width: 136px;
    margin: 5px;
  }
}
</style>
