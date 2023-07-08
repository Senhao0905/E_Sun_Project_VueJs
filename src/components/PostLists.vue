<script>
export default {
    props: ["post"],
    data() {
        return {
            time: null,
            userId: sessionStorage.getItem("userId")
        }
    },
    mounted() {
        this.time = this.post.createdTime.replace("T", " ")
        console.log(this.userId);
    }
}
</script>

<template>
    <div class="  mx-auto mt-2 bg-white rounded-lg w-3/4 h-52">
        <div class=" flex items-center">
            <i class="fa-solid fa-user mx-2"></i>
            <div class=" w-full flex  justify-between">
                <h2 class=" text-xl">{{ post !== null ? post.userId : "" }}</h2>
                <h2 class=" mx-2 text-xl">{{ time !== null ? time : "" }}</h2>
            </div>

        </div>


        <div class="  w-full h-36 flex items-center">
            <h3 class=" text-xl mx-2">{{ post !== null ? post.content : "" }}</h3>
        </div>
        <div v-if="userId === (post != null ? post.userId : '')" class=" flex justify-between items-center">
            <div class=" flex mx-2 ">
                <i class="fa-solid fa-trash-can text-3xl cursor-pointer mr-2"></i>
                <i class="fa-solid fa-pen-to-square text-3xl cursor-pointer "></i>
            </div>
            <i class="fa-regular mx-2 fa-comment text-3xl cursor-pointer"></i>
        </div>
        <div v-else class=" flex justify-end items-center">
            <i class="fa-regular mx-2 fa-comment text-3xl cursor-pointer"></i>
        </div>
    </div>
</template>

<style></style>