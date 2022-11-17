<script>
export default {
    name: "EditProfile"
}
</script>
<template>
    <div class="col-lg-8 mx-auto mt-3">
        <div class="card mx-auto">
            <div class="card-body">
                <div class="mb-3">
                    <img 
                      src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp" 
                      alt="Avatar" 
                      class="rounded-circle shadow-4 d-block mx-auto" 
                      width="150"
                    />
                    <label for="file-input">
                        <i class="bi bi-camera-fill"></i>
                    </label>
                    <input id="file-input" class="d-none" type="file" />
                </div>
                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                        <input type="text" class="form-control" value="John Doe">
					</div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
						<input type="text" class="form-control" value="john@example.com">
					</div>
                </div>
                <div class="row mb-3">
                    <div class="col-sm-3">
                        <h6 class="mb-0">Phone</h6>
					</div>
                    <div class="col-sm-9 text-secondary">
						<input type="text" class="form-control" value="(239) 816-9029">
					</div>
                </div>
                <div class="row mb-3">
					<div class="col-sm-3">
						<h6 class="mb-0">Mobile</h6>
					</div>
                    <div class="col-sm-9 text-secondary">
						<input type="text" class="form-control" value="(320) 380-4539">
					</div>
                </div>
                <div class="row mb-3">
					<div class="col-sm-3">
						<h6 class="mb-0">Addresse</h6>
					</div>
                    <div class="col-sm-9 text-secondary">
					    <input type="text" class="form-control" value="Bay Area, San Francisco, CA">
					</div>
                </div>
                <div class="row mb-3">
					<div class="col-sm-3">
						<h6 class="mb-0">Profession</h6>
					</div>
                    <div class="col-sm-9 text-secondary">
					    <input type="text" class="form-control" value="Développeur full-stack">
					</div>
                </div>
                <div class="row mb-3">
					<div class="col-sm-3">
						<h6 class="mb-0">Site web</h6>
					</div>
                    <div class="col-sm-9 text-secondary">
					    <input type="text" class="form-control" value="www.jeffreymonzili.com">
					</div>
                </div>
                <div class="row mb-3">
					<div class="col-sm-3">
						<h6 class="mb-0">Github</h6>
					</div>
                    <div class="col-sm-9 text-secondary">
					    <input type="text" class="form-control" value="www.github.com/Jmonzili">
					</div>
                </div>
                <div class="row mb-3">
					<div class="col-sm-3">
						<h6 class="mb-0">Twitter</h6>
					</div>
                    <div class="col-sm-9 text-secondary">
					    <input type="text" class="form-control" value="Jmonzili">
					</div>
                </div>
                <div class="row mb-3">
					<div class="col-sm-3">
						<h6 class="mb-0">Instagram</h6>
					</div>
                    <div class="col-sm-9 text-secondary">
					    <input type="text" class="form-control" value="Jmonzili">
					</div>
                </div>
                <div class="row mb-3">
					<div class="col-sm-3">
						<h6 class="mb-0">Facebook</h6>
					</div>
                    <div class="col-sm-9 text-secondary">
					    <input type="text" class="form-control" value="Jmonzili">
					</div>
                </div>
                <div class="row">
					<div class="text-center text-secondary">
						<input type="button" class="btn btn-primary px-4" value="Save Changes">
					</div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
body {
    background: #f7f7ff;
    margin-top: 20px;
}
.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid transparent;
    border-radius: 0.25rem;
    margin-bottom: 1.5rem;
    box-shadow: 0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%);
}
@media (min-width: 992px) {
        .card{
            width: 100%;
        }
}
.card .card-body {
    display: flex;
    flex-direction: column;
}
.card .card-body > div:first-child {
    position: relative;
    align-self: center;
}

.card .card-body .row:last-child {
    margin-top: 3rem;
}
.me-2 {
    margin-right: 0.5rem!important;
}

i.bi {
    position: absolute;
    bottom: 0;
    right: 0;
    border: 2px solid white;
    padding: .6rem;
    border-radius: 50%;
    display: grid;
    font-size: 2rem;
    background-color: var(--bs-gray-200);
    cursor: pointer;
}
i.bi:hover {
    background-color: var(--bs-gray-400);
}
</style>