<script>
import { mapStores, mapActions, mapState } from "pinia";
import indexStore from "../stores/indexStore.js";
export default{
    data() {
        return {
            isLogin : !!sessionStorage.getItem("isLogin")
        }
    },
    methods:{
        logout(){
            sessionStorage.setItem("isLogin","")
            this.isLogin = !this.isLogin;
            this.$router.push({
                name :'login'
            })
        },
        home(){
            this.$router.push("/home")
        }
    },
    mounted(){
        
    }
}
</script>


<template>
    <header class= " bg-white h-28 w-full flex items-center justify-between">
        <div class=" w-96  h-24">
            <img class=" w-full h-full rounded-xl cursor-pointer" src="../../pic/logo.png" alt="" v-on:click="home">
        </div>
        <RouterLink v-if="!isLogin" class="link text-3xl mx-5 hover:text-red-500" to="/">登入</RouterLink>
        <h2 v-else class="link text-3xl mx-5 hover:text-red-500 cursor-pointer" @click="logout">登出</h2>

    </header>
</template>

<style></style>