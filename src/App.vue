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
  <div class=" h-1000 w-full mx-auto my-0  flex">
    <div class=" bg-slate-200  w-1/4 h-1000">

    </div>
    <RouterView class=" w-2/4" />
    <div class=" bg-slate-200  w-1/4 h-full">

    </div>
  </div>
</template>

<style scoped>

</style>
