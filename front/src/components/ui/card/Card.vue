<script>
import Avatar from '../Avatar.vue';
import Comment from './Comment.vue';
import { getUrlAndHeaders } from "../../../services/fetchOptions"

export default {
    name: "Card",
    components: { Comment, Avatar },
    props: ["email", "title", "content", "url", "comments", "id"],
    data() {
        return {
            currentComment: null
        }
    },
    mounted() {},
    methods: {
        addComment(e) {
            console.log("this.currentComment:", this.currentComment)
            console.log("id:", this.$props.id)
            const { url, headers } = getUrlAndHeaders()
            const options = {
                headers: { ...headers, "Content-Type": "application/json" },
                method: "POST",
                body: JSON.stringify({
                    comment: this.currentComment
                })
            }
            console.log("options:", options)
            fetch(url + "/" + this.$props.id, options)
              .then((res) => {
                if (res.status === 200) {
                    return res.json()
                } else {
                    throw new Error("Failed to fetch post")
                }
              })
              .then((res) => {
                console.log("res:", res)
                this.$router.go()
              })
              .catch((err) => console.log({ err }))
        }
    }
}
</script>
<template>
    <div class="card mb-3 m-auto">
        <div class="card-header bg-white">
            <img 
                src="../../../assets/img/pngfind.com-placeholder-png-6104451.png" 
                class="rounded-circle me-2"
                alt="Avatar"
            />
            <span>{{ email }}</span>
        </div>
        <img v-if="url" :src="url" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ title }}</h5>
            <p class="card-text">{{ content }}</p>
            <div v-for="comment in comments">
                <Comment :email="comment.user" :content="comment.content"></Comment>
            </div>
            <div class="d-flex gap-2">
                <Avatar></Avatar>
                <input 
                    type="text" 
                    class="form-control" 
                    placeholder="Commentaire" 
                    aria-label="Commentaire"
                    v-model="currentComment"
                />
                <button type="button" class="btn btn-primary rounded-pill ms-auto" @click="addComment">
                    Comment
                </button>
            </div>
        </div>
    </div>
</template>
<style scoped>

@media (min-width: 768px){
    .card {
        width: 80%;
    }
}
.card-header img {
    width: 50px;
}
</style>