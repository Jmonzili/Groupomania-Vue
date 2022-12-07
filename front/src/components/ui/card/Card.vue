<script>
import Avatar from '../Avatar.vue';
import Comment from './Comment.vue';

export default {
    name: "Card",
    components: { Comment, Avatar },
    props: ["email", "title", "content", "url", "comments"]
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
                <input type="text" class="form-control" placeholder="Commentaire" aria-label="Commentaire">
                <button type="button" class="btn btn-primary rounded-pill ms-auto">Comment</button>
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