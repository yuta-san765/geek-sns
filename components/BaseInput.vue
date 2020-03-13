<template>
  <div>
    <label v-if="label" class="form-label">{{ label }}</label>
    <input
      class="form-input"
      :value="value"
      v-bind="$attrs"
      @input="updateValue"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ''
    },
    value: {
      type: [String, Number],
      default: null
    }
  },
  methods: {
    updateVaue(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss">
.form-input {
  width: 100%;
  height: 54px;
  border: 1px solid #707070;
  border-radius: 15px;
  display: block;
  margin-bottom: 18px;
}
.form-label {
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  display: block;
  margin-bottom: 6px;
  font-weight: 600;
}
</style>
