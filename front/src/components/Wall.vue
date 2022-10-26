<script>
export default {
    name: "Wall"
}
</script>
<template>
    <h1>WALL</h1>
    <div class="container-sm">
        <div class="form-floating">
            <textarea
                class="form-control" 
                placeholder="Leave a comment here" 
                id="floatingTextarea"
            ></textarea>
            <label for="floatingTextarea">Comments</label>
        </div>

        <div class="d-flex">
            <label for="file-input" class="btn btn-secondary mt-2">Ajouter un image</label>
            <input id="file-input" type="file">
            <button type="button" class="btn btn-primary mt-2 ms-auto">Publier</button>
        </div>

        <hr class="dropdown-divider" />

        <hr class="dropdown-divider">
        Pouet
    </div>
</template>
<style>
input {
    display: none;
}

hr {
  margin: 1rem 0;
  color: inherit;
  background-color: currentColor;
  border: 0;
  opacity: 0.25;
}
</style>