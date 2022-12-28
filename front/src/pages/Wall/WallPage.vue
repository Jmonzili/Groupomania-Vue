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
            this.email = email
          })
          .catch((err) => console.log("err:", err))
    },
    data() {
        return {
            posts: [],
            email: null
        }
    }
}
</script>
<template>
    <div v-if="email" class="container-sm">
        <PostForm></PostForm>
        <div v-for="post in posts">
            <Card 
                :email="post.user" 
                :title="post.title" 
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