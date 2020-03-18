/* eslint-disable vue/attribute-hyphenation */
<template>
  <div>
    <TheHeader></TheHeader>
    <form class="form" @submit.prevent="register">
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
        v-model="name"
        label="名前"
        placeholder="ギーク太郎"
        type="text"
      ></BaseInput>
      <BaseInput
        v-model="email"
        label="メールアドレス"
        placeholder="geek@sns.com"
        type="email"
      ></BaseInput>
      <BaseInput
        v-model="password"
        label="パスワード"
        placeholder="example"
        type="password"
      ></BaseInput>
      <BaseInput
        v-model="password_confirmation"
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
import TheHeader from '@/components/TheHeader'
export default {
  components: {
    BaseInput,
    BaseButton,
    TheHeader
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
      password_confirmation: ''
    }
  },
  methods: {
    log() {
      console.log(this.$axios.post)
    },
    registerTest() {
      const params = {
        sign_up_user_params: {
          name: this.name,
          bio: 'dammy',
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        }
      }
      this.$axios
        .$post('sign_up', params)
        .then((res) => {
          console.log(res)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    register() {
      const params = {
        sign_up_user_params: {
          name: this.name,
          bio: 'dammy',
          email: this.email,
          password: this.password,
          password_confirmation: this.password_confirmation
        }
      }
      this.$store.dispatch('register', params).then((res) => {
        console.log(res)
        this.$router.push('timeline')
      })
    }
  }
}
</script>

<style lang="scss">
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
