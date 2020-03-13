/* eslint-disable vue/attribute-hyphenation */
<template>
  <div>
    <div class="header-space">
      <h1 class="header-space__title">ユーザー登録</h1>
    </div>
    <form class="form">
      <div>
        <span class="form-label">プロフィール写真</span>
        <label class="form__picture-design" for="profile-picture">
          <font-awesome-icon
            class="form__picture-icon"
            icon="camera"
          ></font-awesome-icon>
          <input id="profile-picture" class="form__picture-input" type="file" />
        </label>
      </div>
      <BaseInput
        v-model="user.name"
        label="名前"
        placeholder="ギーク太郎"
        type="text"
      ></BaseInput>
      <BaseInput
        v-model="user.email"
        label="メールアドレス"
        placeholder="geek@sns.com"
        type="email"
      ></BaseInput>
      <BaseInput
        v-model="user.password"
        label="パスワード"
        placeholder="example"
        type="password"
      ></BaseInput>
      <BaseInput
        v-model="user.password_confirmation"
        label="パスワード(確認)"
        placeholder="example"
        type="password"
      ></BaseInput>
      <BaseButton button-class="mt-register">登録</BaseButton>
    </form>
  </div>
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
        name: '',
        email: '',
        passowrd: '',
        passowrd_confirmation: ''
      }
    }
  }
}
</script>

<style lang="scss">
.header-space {
  height: 80px;
  background-color: $header-color;
  text-align: center;
  display: flex;
  flex-direction: column-reverse;
  &__title {
    font-size: 15px;
    font-weight: normal;
    color: white;
  }
}
.form {
  padding: 75px 20px;
  &__picture-input {
    display: none;
  }
  &__picture-design {
    width: 90px;
    height: 90px;
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 50%;
    display: block;
    position: relative;
    margin: 0 auto 18px;
  }
  &__picture-icon {
    font-size: 25px;
    color: rgba(255, 255, 255, 0.6);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
.mt-register {
  margin-top: 16px;
}
</style>
