<template>
  <div>
    <Login v-if="showLogin" @toggle-modal="showLogin = false"></Login>
    <div class="title">
      <div class="title__img"></div>
      <div class="title__title-container">
        <h1 class="title__title">GEEK</h1>
        <p class="title__subtitle">エンジニアのためのSNS</p>
      </div>
    </div>
    <div class="start">
      <nuxt-link to="register">
        <BaseButton>メールではじめる</BaseButton>
      </nuxt-link>
      <div class="start__info">
        <p>
          すでにアカウントをお持ちですか？&emsp;<span
            class="action-span"
            @click="showLogin = !showLogin"
            >ログイン</span
          >
        </p>
        <p>
          <nuxt-link to="#">利用規約</nuxt-link>と<nuxt-link to="#"
            >プライバシーポリシー</nuxt-link
          >に同意したことになります。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton'
import Login from '@/components/Login'

export default {
  components: {
    BaseButton,
    Login
  },
  data() {
    return {
      showLogin: false
    }
  },
  methods: {
    toggleModal() {
      this.showLogin = !this.showLogin
    }
  }
}
</script>

<style lang="scss">
.title {
  text-align: center;
  color: white;
  &__img {
    background-image: url(~@/assets/main_image.png);
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
  &__info {
    margin-top: 20px;
    font-size: 12px;
    margin-bottom: 3px;
  }
}
.action-span {
  font-weight: bold;
  cursor: pointer;
}
</style>
