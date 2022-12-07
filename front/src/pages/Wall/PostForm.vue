<script>
export default {
    name: "PostForm",
    data: function () {
        return {
            content: ""
        }
    },
    methods: {
        handleClick() {
            const { VITE_SERVER_ADRESS, VITE_SERVER_PORT } = import.meta.env
        const url = `http://${VITE_SERVER_ADRESS}:${VITE_SERVER_PORT}/posts`
        
        const options = {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            method: "POST",
            body: JSON.stringify({
                content: this.content
            })
        }

        fetch(url, options)
          .then((res) => {
            if (res.status === 200) {
                return res.json()
            } else {
                throw new Error("Failed to fetch posts")
            }
          })
          .then(() => {
            this.$router.go()
          })
          .catch((err) => console.log("err:", err))
        }
    }
}
</script>

<template>
    <div class="form-floating mt-4">
        <input class="form-control py-3" v-model="content" />
    </div>

    <div class="d-flex">
        <label for="file-input" class="btn btn-secondary mt-2">Ajouter un image</label>
        <input id="file-input" class="d-none" type="file" />
        <button @click="handleClick" type="button" class="btn btn-primary mt-2 ms-auto">Publier</button>
    </div>

    {{ content }}

    <hr class="mt-4" />
</template>

<style scoped>

.form-floating > div.form-control {
    height: auto;
    min-height: 5rem;
}
.form-floating > div.form-control:empty:not(:focus)::before {
    content: "Leave a comment here";
    color: #a0a0a0;
    display: block;
    position: absolute;
    top: 50%;
    left: 1rem;
    transform: translateY(-50%);
}
</style>