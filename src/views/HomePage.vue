<script>
import PostView from "../components/PostSquare.vue"
import PostListView from "../components/PostLists.vue"

export default {
    data() {
        return {
            isLogin: !!sessionStorage.getItem("isLogin"),
            user: null,
            postList : null
        }
    },
    components: {
        PostView,
        PostListView
    },
    mounted() {
        console.log(this.isLogin);
        if (!this.isLogin) {
            alert("請先登入 !");
            this.$router.push("/");
        }

        this.getUser();
        this.getPost();
    },
    methods: {
        getUser() {
            let body = {

            }

            fetch("http://localhost:8080/get_user_info", {
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
                    }
                    this.user = data.user

                })
        },
        getPost() {
            fetch("http://localhost:8080/get_all_post")
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    this.postList = data.posts;
                })
        }
    }
}
</script>

<template>
    <div class=" overflow-auto bg-slate-500 border border-white rounded-xl  w-full h-1000">
        <PostView :user="user" />
        <div v-for="item in (postList != null ? postList :[]) ">
            <PostListView :post="item" />
        </div>
    </div>
</template>

<style></style>