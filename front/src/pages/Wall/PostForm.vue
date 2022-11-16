<script>
export default {
    name: "PostForm"
}
</script>

<template>
    <div class="form-floating mt-4">
        <div
            contenteditable
            class="form-control" 
            placeholder="Leave a comment here" 
            id="floatingTextarea"
        ></div>
        <label for="floatingTextarea">Publication</label>
    </div>

    <div class="d-flex">
        <label for="file-input" class="btn btn-secondary mt-2">Ajouter un image</label>
        <input id="file-input" type="file" />
        <button type="button" class="btn btn-primary mt-2 ms-auto">Publier</button>
    </div>

    <hr class="mt-4" />
</template>

<style module>
input {
    display: none;
}

</style>