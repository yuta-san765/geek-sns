<template>
  <div>
    <TheHeader></TheHeader>
    <Posts></Posts>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import Posts from '@/components/Posts'
import TheFooter from '@/components/TheFooter'
export default {
  components: {
    TheHeader,
    Posts,
    TheFooter
  }
}
</script>

<style lang="scss"></style>
