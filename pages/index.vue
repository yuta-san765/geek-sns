<template>
  <div>
    <div class="title">
      <div class="title__img"></div>
      <div class="title__title-container">
        <h1 class="title__title">GEEK</h1>
        <p class="title__subtitle">エンジニアのためのSNS</p>
      </div>
    </div>
    <div class="start">
      <nuxt-link to="#">
        <button class="start__btn">メールではじめる</button>
      </nuxt-link>
      <p class="start__info">
        すでにアカウントをお持ちですか？&emsp;<nuxt-link to="#"
          >ログイン</nuxt-link
        >
      </p>
      <p class="start__info">
        <nuxt-link to="#">利用規約</nuxt-link>と<nuxt-link to="#"
          >プライバシーポリシー</nuxt-link
        >に同意したことになります。
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>

<style lang="scss">
$main-color: #34aa22;

.title {
  text-align: center;
  color: white;
  &__img {
    background-image: url(../assets/main_image.png);
    background-size: cover;
    height: 648px;
    position: relative;
  }
  &__title-container {
    position: absolute;
    top: 31%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  &__title {
    font-family: 'Noto Sans';
    font-size: 82px;
  }
  &__subtitle {
    font-size: 16px;
    margin-top: -15px;
  }
}

.start {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  text-align: center;
  padding: 20px;
  &__btn {
    width: 334px;
    $height: 47px;
    height: $height;
    background-color: $main-color;
    border: none;
    border-radius: $height / 2;
    margin-bottom: 20px;
    color: white;
    font-size: 16px;
  }
  &__info {
    font-size: 12px;
    margin-bottom: 3px;
  }
}
</style>
