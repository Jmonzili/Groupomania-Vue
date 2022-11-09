<script>
import Card from '../../components/ui/card/Card.vue';
import PostForm from './PostForm.vue';

export default {
    name: "WallPage",
    components: { Card, PostForm }
}
</script>
<template>
    <div class="container-sm">
        <PostForm></PostForm>

        
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>
</template>
<style module>


body {
    background-color: #5f5f5f1a !important;
}
</style>