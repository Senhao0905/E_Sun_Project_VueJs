<script>
export default {
    props: ["user"],
    data() {
        return {
            textValue: null
        }
    },
    methods:{
        post(){
            if(this.textValue == null || this.textValue === ""){
                alert("請輸入發文內容");
                return;
            }


            let body = {
                content : this.textValue
            }

            fetch("http://localhost:8080/add_post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
                credentials: "include"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if(data.message === "Successful !"){
                    alert("發文成功");
                    location.reload();
                }
            })
        }
    },
    mounted() {
        console.log(this.user);
    }
}
</script>

<template>
    <div class=" mx-auto mt-2 bg-white rounded-lg w-3/4 h-52">
        <div class=" flex items-center ">
            <i class="fa-solid fa-user mx-2"></i>
            <h2 class=" text-xl">{{ user != null ? user.userId : "" }}</h2>
        </div>
        <textarea name="" id="" class=" resize-none block w-full" cols="80" rows="5" placeholder="在想甚麼 ?"
            v-model="textValue"></textarea>
        <div class=" w-full flex justify-end">
            <button @click="post" type="button"
                class=" bg-slate-400 text-white text-xl mx-2 mt-2 px-2 rounded-lg hover:scale-105">發布</button>
        </div>
    </div>
</template>

<style></style>