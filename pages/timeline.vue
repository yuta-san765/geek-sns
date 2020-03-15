<template>
  <div>
    <TheHeader></TheHeader>
    <Post></Post>
    <TheFooter></TheFooter>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import Post from '@/components/Post'
import TheFooter from '@/components/TheFooter'
export default {
  components: {
    TheHeader,
    Post,
    TheFooter
  }
}
</script>

<style lang="scss"></style>
