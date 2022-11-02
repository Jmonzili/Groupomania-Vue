<script>
import Avatar from './Avatar.vue';
import Comment from './Comment.vue';

export default {
    name: "Card",
    components: { Comment, Avatar }
}
</script>
<template>
    <div class="card mb-3 m-auto">
        <div class="card-header bg-white">
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" class="rounded-circle "
            alt="Avatar" />
            Vazy Joky
        </div>
        <img src="https://picsum.photos/400/300" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            <Comment></Comment>
            <Comment></Comment>
            <div class="d-flex gap-2">
                <Avatar></Avatar>
                <input type="text" class="form-control" placeholder="Commentaire" aria-label="Commentaire">
                <button type="button" class="btn btn-primary rounded-pill ms-auto">Comment</button>
            </div>
        </div>
    </div>
</template>
<style>

@media (min-width: 768px){
    .card {
        width: 80%;
    }
}
.card-header img {
    width: 50px;
}
</style>