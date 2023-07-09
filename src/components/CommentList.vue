<script>
export default {
    data() {
        return {
            time: null
        }
    },
    props: ["comment"],
    mounted() {
        this.time = this.comment.createdTime.replace("T", " ");
    }
}
</script>

<template>
    <div class=" border border-black bg-white mx-auto  rounded-lg w-3/4 h-28">
        <div class=" flex  justify-between">
            <div class=" flex items-center">
                <i class="fa-solid fa-user mx-2"></i>
                <h2 class=" text-blue-500">{{ comment != null ? comment.userId : '' }}</h2>
            </div>

            <div>
                <h2>{{ time != null ? time : '' }}</h2>
            </div>

        </div>
        <div>
            <h2>{{ comment != null ? comment.content : '' }}</h2>
        </div>
    </div>
</template>

<style></style>