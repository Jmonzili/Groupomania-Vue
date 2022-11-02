<script>
import Avatar from './Avatar.vue';

export default {
    name: "Comment",
    components: { Avatar }
}
</script>

<template>
    <div class="d-flex gap-2">
        <Avatar></Avatar>
        <div class="d-flex flex-column comment_text p-1">
            <p>Sylvie Market</p>
            <p>Wouah c'est super beau !</p>
        </div>
        
    </div>
</template>

<style scoped>
.comment_text {
    background-color: var(--bs-gray-200);
    border-radius: 5px;
    width: 100%;
}
.card-body > .d-flex {
    margin-bottom: 1rem;
}
.d-flex p {
    margin-bottom: 0.2rem;
}
.d-flex p:nth-child(1) {
    font-weight: 500;
}
</style>