<script>
import PostListView from "../components/PostLists.vue"
import CommentList from "../components/CommentList.vue"
export default {
    components: {
        PostListView,
        CommentList
    },
    props: ["id"],
    data() {
        return {
            post: null,
            userId: sessionStorage.getItem("userId"),
            commentList: null,
            notFound: false,
            textValue: null
        }
    },
    methods: {
        getPost() {
            let body = {
                postId: this.id
            }

            console.log(body)

            fetch("http://localhost:8080/get_post_by_postID", {
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
                    this.post = data.post;
                    console.log(this.post);
                })
        },
        getComment() {
            let body = {
                postId: this.id
            }

            console.log(body)

            fetch("http://localhost:8080/get_comment_by_postId", {
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
                    if (data.message === "Successful !") {
                        this.commentList = data.comments;
                    }
                    else if (data.message === "Not found") {

                    }
                    else {
                        alert("請先登入");
                        this.$router.push("/")
                    }
                })
        },
        addComment() {

            if(this.textValue == null || this.textValue === ""){
                alert("請輸入留言內容");
                return;
            }
            let body = {
                postId: this.id,
                content: this.textValue
            }

            fetch("http://localhost:8080/add_comment", {
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
                    alert("留言成功");
                    location.reload();
                }
                else{
                    alert("請先登入");
                    this.$router.push("/")
                }
            })
            
        }
    },
    mounted() {
        this.getPost();
        this.getComment();
    }
}
</script>

<template>
    <div v-if="notFound" class=" overflow-auto bg-slate-500 border border-white rounded-xl  w-full h-1000">

    </div>
    <div v-else class=" overflow-auto bg-slate-500 border border-white rounded-xl  w-full h-1000">
        <PostListView v-if="post != null" :post="post" />
        <div class=" border border-black bg-white mx-auto  rounded-lg w-3/4 h-40">
            <h2 class=" text-blue-500">{{ userId }}</h2>
            <div>
                <textarea class=" resize-none w-5/6" name="" id="" cols="30" rows="5" v-model="textValue"></textarea>
                <button type="button" class=" bg-slate-500 text-white px-2 rounded-lg text-xl ml-10"
                    @click="addComment">留言</button>
            </div>
        </div>

        <div v-if="commentList != null" v-for="item in commentList">
            <CommentList :comment="item" />
        </div>
    </div>
</template>

<style></style>