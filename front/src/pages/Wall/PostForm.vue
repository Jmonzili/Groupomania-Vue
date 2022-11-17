<script>
export default {
    name: "PostForm"
}
</script>

<template>
    <div class="form-floating mt-4">
        <div contenteditable class="form-control py-3"></div>
    </div>

    <div class="d-flex">
        <label for="file-input" class="btn btn-secondary mt-2">Ajouter un image</label>
        <input id="file-input" class="d-none" type="file" />
        <button type="button" class="btn btn-primary mt-2 ms-auto">Publier</button>
    </div>

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