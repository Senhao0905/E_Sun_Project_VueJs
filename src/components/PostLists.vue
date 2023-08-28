<script>
export default {
    props: ["post"],
    data() {
        return {
            time: null,
            userId: sessionStorage.getItem("userId")
        }
    },
    methods: {
        del() {
            const yes = confirm('你確定嗎？');

            if (yes) {
                let body = {
                    postId: this.post != null ? this.post.postId : ""
                }

                console.log(body)

                fetch("http://localhost:8080/del_post", {
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
                    if(data.message ==="Successful !"){
                        alert("刪除成功 !");
                        location.reload();
                    }
                    else{
                        alert("請先登入");
                        this.$router.push("/")
                    }
                })
            } 
        },
        comment(){
            this.$router.push({
                name : 'comment',
                params : {
                    id : this.post.postId
                }
            })
        },
        update(){
            this.$router.push({
                name:'edit',
                params :{
                    postId : this.post.postId
                }
            })
        }
    },
    mounted() {
        this.time = this.post.createdTime.replace("T", " ")
        console.log(this.userId);
    }
}
</script>

<template>
    <div class="drop-shadow-xl  mx-auto mt-2 bg-white rounded-lg w-3/4 h-52">
        <div class=" flex items-center">
            <i class="fa-solid fa-user mx-2"></i>
            <div class=" w-full flex  justify-between">
                <h2 class=" text-xl text-blue-500">{{ post !== null ? post.userId : "" }}</h2>
                <h2 class=" mx-2 text-xl">{{ time !== null ? time : "" }}</h2>
            </div>

        </div>


        <div class="  w-full h-36 flex items-center">
            <h3 class=" text-xl mx-2">{{ post !== null ? post.content : "" }}</h3>
        </div>
        <div v-if="userId === (post != null ? post.userId : '')" class=" flex justify-between items-center">
            <div class=" flex mx-2 ">
                <!-- del -->
                <i class="fa-solid fa-trash-can text-3xl cursor-pointer mr-2 hover:scale-105" @click="del"></i>
                <!-- update -->
                <i class="fa-solid fa-pen-to-square text-3xl cursor-pointer hover:scale-105" @click="update"></i>
            </div>
            <!-- commment -->
            <i class="fa-regular mx-2 fa-comment text-3xl cursor-pointer hover:scale-105" @click="comment"></i>
        </div>
        <div v-else class=" flex justify-end items-center">
            <!-- commment -->
            <i class="fa-regular mx-2 fa-comment text-3xl cursor-pointer hover:scale-105" @click="comment"></i>
        </div>
    </div>
</template>

<style></style>