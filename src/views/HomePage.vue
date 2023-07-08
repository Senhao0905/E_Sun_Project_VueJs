<script>
import PostView from "../components/PostSquare.vue"
export default{
    data() {
        return {
            isLogin : !!sessionStorage.getItem("isLogin")
        }
    },
    components :{
        PostView
    },
    mounted(){
        console.log(this.isLogin);
        if(!this.isLogin){
            alert("請先登入 !");
            this.$router.push("/");
        }
    },
    updated(){
        console.log("0")
    }
}
</script>

<template>
    <div class=" bg-slate-500 border border-white rounded-xl  w-full h-1000">
        <PostView />
    </div>
</template>

<style>
</style>