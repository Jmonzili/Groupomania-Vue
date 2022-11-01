<script>
export default {
    name: "Card"
}
</script>
<template>
    <div class="card mb-3 m-auto">
        <div class="card-header">
            <img src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" class="rounded-circle "
            alt="Avatar" />
            Vazy Joky
        </div>
        <img src="https://picsum.photos/200/300" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">Card title</h5>
            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
        </div>
    </div>
</template>
<style>
.card {
    width: 30rem;
}
.card-header img {
    width: 50px;
}
</style>