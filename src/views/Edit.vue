<script>
export default {
    props: ["postId"],
    data() {
        return {
            post: null,
            textValue: null
        }
    },
    methods: {

        getPost() {
            let body = {
                postId: this.postId
            }

            console.log(body)

            fetch("http://localhost:8080/get_post_by_user", {
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
                    if (data.message !== "Successful !") {
                        alert("請先登入");
                        this.$router.push("/");
                        return;
                    }
                    this.post = data.post;
                    this.textValue = this.post.content;
                })
        },
        update() {
            if (this.textValue == null || this.textValue === "") {
                alert("請輸入發文內容");
                return;
            }

            let body = {
                postId: this.postId,
                content: this.textValue
            }

            fetch("http://localhost:8080/update_post", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(body),
                credentials: "include"
            })
                .then(res => res.json())
                .then(data => {
                    if(data.message === "Successful !"){
                        alert("更新成功");
                        location.href = "/home"
                    }
                    else{
                        alert("請先登入");
                        this.$router.push("/");
                    }
                })
        }
    },
    mounted() {
        this.getPost();
    }
}
</script>

<template>
    <div class="flex justify-center items-center bg-slate-500 w-full h-1000">
        <div class="border border-black rounded-lg bg-white w-5/6 h-96 flex flex-col ">
            <h2 class=" text-center text-3xl">編輯貼文</h2>
            <div class=" w-full ">
                <div class=" flex items-center">
                    <i class="fa-solid fa-user mx-2"></i>
                    <h2 class=" text-blue-500 text-xl">{{ post != null ? post.userId : "" }}</h2>

                </div>
                <textarea class=" resize-none h-2000 w-full" name="" id="" cols="30" rows="5"
                    v-model="textValue"></textarea>
            </div>

            <div class=" w-full flex justify-center items-center">
                <button @click="update" type="button"
                    class=" bg-slate-500 text-white text-xl px-2 rounded-lg hover:scale-105">送出</button>
            </div>
        </div>

    </div>
</template>

<style></style>