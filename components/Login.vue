<template>
  <form class="login-modal">
    <form class="login-modal__inner">
      <div class="close-button" @click="$emit('toggle-modal')">
        <font-awesome-icon icon="times"></font-awesome-icon>
      </div>
      <form>
        <BaseInput
          label="メールアドレス"
          placeholder="geek@sns"
          type="e-mail"
        ></BaseInput>
        <BaseInput
          label="パスワード"
          placeholder="パスワード"
          type="password"
        ></BaseInput>
        <BaseButton>ログイン</BaseButton>
      </form>
      <p class="retreive-password">
        パスワードを忘れた場合は&emsp;<a href="#">こちら</a>
      </p>
    </form>
    <div class="black-background"></div>
  </form>
</template>

<script>
import BaseInput from '@/components/BaseInput'
import BaseButton from '@/components/BaseButton'
export default {
  components: {
    BaseInput,
    BaseButton
  },
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  }
}
</script>

<style lang="scss">
.login-modal {
  z-index: 10;
  padding: 14px 10px 17px;
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  &__inner {
    position: absolute;
    padding: 14px 10px 17px;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid #707070;
    border-radius: 15px;
    background-color: #fff;
    z-index: 2;
  }
}

.black-background {
  z-index: 1;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.5);
}
.retreive-password {
  text-align: center;
  a {
    text-decoration: underline;
  }
}
.close-button {
  width: 35px;
  height: 35px;
  text-align: center;
  font-size: 18px;
  cursor: pointer;
}
</style>
