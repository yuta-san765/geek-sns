<template>
  <div>
    <TheHeader></TheHeader>
    <div class="post">
      <div class="post__profile">
        <img class="post__face" />
        <h2 class="post__username">一生見習い</h2>
      </div>
      <p class="post__comment">毎日ひたすらコード書いてる</p>
      <div class="post__pictures">
        <img class="post_picture" src="#" />
      </div>
      <time class="post__timestamp">10:00 2020/01/01</time>
    </div>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'
export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
.post {
  padding: 20px 20px 0;
  border-bottom: 0.5px solid $border-timeline;
  &__profile {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
  }
  &__face {
    width: 50px;
    height: 50px;
    background-color: aqua;
    border-radius: 50%;
  }
  &__username {
    font-size: 15px;
    font-weight: normal;
    padding-left: 11px;
  }
  &__comment {
    font-size: 12px;
    margin-bottom: 10px;
  }
  &__pictures {
    max-width: 334px;
    max-height: 166px;
    display: flex;
    margin: 5px;
  }
  &__timestamp {
    color: #707070;
    font-size: 11px;
    font-weight: normal;
  }
}
</style>
