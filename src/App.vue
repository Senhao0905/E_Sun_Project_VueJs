<script >
import { RouterLink, RouterView } from 'vue-router'
import HeaderView from "./components/Header.vue"
export default {
  components: {
    HeaderView
  }
}
</script>

<template>
  <HeaderView />
  <div class=" h-1000 w-1/2 mx-auto my-0 ">
    <RouterView />
  </div>
</template>

<style scoped></style>
