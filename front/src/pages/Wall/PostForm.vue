<script>
import { getUrlAndHeaders } from "../../services/fetchOptions"
export default {
    name: "PostForm",
    data() {
        return {
            content: "",
            selectedImage : null
        }
    },
    methods: {
        onFileSelected(e) {
    //  Renvoi du ficher dans la data "image"
            this.selectedImage = e.target.files[0]
            console.log("this.selectedImage:", this.selectedImage)
        },
        handleClick() {
            const { url, headers } = getUrlAndHeaders()
            const formData = new FormData()
            formData.append("content", this.content)
            formData.append("image", this.selectedImage)
            const options = {
                headers,
                method: "POST",
                body: formData
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
    <div class="form-floating mt-3">
        <input class="form-control py-3" v-model="content" />
    </div>

    <div class="d-flex">
        <label for="file-input" class="btn btn-secondary mt-2">Ajouter un image</label>
        <span v-if="selectedImage" class="ms-2 m-auto">{{ selectedImage.name }}</span>
        <input id="file-input" class="d-none" type="file" @change="onFileSelected" />
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