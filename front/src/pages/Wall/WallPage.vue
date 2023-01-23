<script>
import Card from '../../components/ui/card/Card.vue';
import PostForm from './PostForm.vue';

export default {
    name: "WallPage",
    components: { Card, PostForm },
    beforeCreate() {
        const token = localStorage.getItem("token")
        if (token == null) {
            this.$router.push("/login")
        }
    },
    mounted() {
        const { VITE_SERVER_ADRESS, VITE_SERVER_PORT } = import.meta.env
        const url = `http://${VITE_SERVER_ADRESS}:${VITE_SERVER_PORT}/posts`
        
        const options = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`
            }
        }

        fetch(url, options)
          .then((res) => {
            if (res.status === 200) {
                return res.json()
            } else {
                throw new Error("Failed to fetch posts")
            }
          })
          .then((res) => {
            const { email, posts } = res
            this.posts = posts
            this.currentUser = email
          })
          .catch((err) => console.log("err:", err))
    },
    data() {
        return {
            posts: [],
            currentUser: null
        }
    }
}
</script>
<template>
    <div v-if="currentUser" class="container-sm">
        <div class="col-sm-12">
            <h1 class="text-center fs-5 mt-2">Bienvenue, {{ currentUser }}</h1>
        </div>
        <PostForm></PostForm>
        <div v-if="posts.length === 0">Aucun posts sur le Wall. Soyez le premier a partager avec votre communauté !</div>
        <div v-for="post in posts">
            <Card 
                :currentUser="currentUser"
                :email="post.user.email" 
                :content="post.content" 
                :url="post.imageUrl" 
                :comments="post.comments"
                :id="post.id"
            >
            </Card>
        </div>
    </div>
</template>
<style module>
body {
    background-color: #5f5f5f1a !important;
}
</style>