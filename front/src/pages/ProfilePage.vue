<script>
export default {
    name: "ProfilePage"
}
</script>
<template>
    <div class="container">
        <div class="main-body">
    
          <!-- Breadcrumb -->
          <nav aria-label="breadcrumb" class="main-breadcrumb">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="index.html">Home</a></li>
              <li class="breadcrumb-item"><a href="javascript:void(0)">User</a></li>
              <li class="breadcrumb-item active" aria-current="page">User Profile</li>
            </ol>
          </nav>
          <!-- /Breadcrumb -->
    
          <div class="row gutters-sm">
            <div class="card col-md-12 mb-3">
                <div class="card-body">
                  <div class="d-flex flex-column align-items-center text-center">
                    <img 
                      src="https://bootdey.com/img/Content/avatar/avatar7.png" 
                      alt="Admin" 
                      class="rounded-circle" 
                      width="150"
                    />
                    <div class="mt-3">
                      <h4>John Doe</h4>
                      <p class="text-secondary mb-1">Full Stack Developer</p>
                      <p class="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                      <button class="btn btn-primary">Follow</button>
                      <button class="btn btn-outline-primary">Message</button>
                    </div>
                  </div>
                </div>
            </div>
            <div class="d-flex flex-column flex-md-row gap-3">
              <div class="card col-md-4">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">
                        <img src="../assets/svg/world.svg" alt="">
                        Website
                    </h6>
                    <span class="text-secondary">https://bootdey.com</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">
                        <img src="../assets/svg/github.svg" alt="">
                        Github
                    </h6>
                    <span class="text-secondary">bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">
                        <img src="../assets/svg/twitter.svg" alt="">
                        Twitter
                    </h6>
                    <span class="text-secondary">@bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">
                        <img src="../assets/svg/instagram.svg" alt="">
                        Instagram
                    </h6>
                    <span class="text-secondary">bootdey</span>
                  </li>
                  <li class="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                    <h6 class="mb-0">
                        <img src="../assets/svg/facebook.svg" class="text-info" alt="">
                        Facebook
                    </h6>
                    <span class="text-secondary">bootdey</span>
                  </li>
                </ul>
              </div>
              <div class="card col-md-8">
                <div class="mb-3">
                <div class="card-body">
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Full Name</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Kenneth Valdez
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Email</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      fip@jukmuh.al
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Phone</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (239) 816-9029
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Mobile</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      (320) 380-4539
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-3">
                      <h6 class="mb-0">Address</h6>
                    </div>
                    <div class="col-sm-9 text-secondary">
                      Bay Area, San Francisco, CA
                    </div>
                  </div>
                  <hr>
                  <div class="row">
                    <div class="col-sm-12">
                      <a class="btn btn-info " target="__blank" href="https://www.bootdey.com/snippets/view/profile-edit-data-and-skills">Edit</a>
                    </div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>
<style scoped>
body{
    margin-top:20px;
    color: #1a202c;
    text-align: left;
    background-color: #e2e8f0;    
}
.main-body {
    padding: 15px;
}
.card {
    box-shadow: 0 1px 3px 0 rgba(0,0,0,.1), 0 1px 2px 0 rgba(0,0,0,.06);
}

.card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 0 solid rgba(0,0,0,.125);
    border-radius: .25rem;
}

.card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
}

.gutters-sm {
    margin-right: -8px;
    margin-left: -8px;
}

.gutters-sm>.col, .gutters-sm>[class*=col-] {
    padding-right: 8px;
    padding-left: 8px;
}

.mb-3, .my-3 {
    margin-bottom: 1rem!important;
}

.bg-gray-300 {
    background-color: #e2e8f0;
}

.h-100 {
    height: 100%!important;
}

.shadow-none {
    box-shadow: none!important;
}

.row.gutters-sm > * {
  padding: 0;
}

:root {
  --gap: 5rem;
}

.row.gutters-sm > .d-flex {
  --gap: 5rem;
  gap: var(--gap) !important;
}

.row.gutters-sm > .d-flex.gap-1 {
  --gap: 0.25rem;
}

.row.gutters-sm > .d-flex.gap-2 {
  --gap: 0.5rem;
}

.row.gutters-sm > .d-flex.gap-3 {
  --gap: 1rem;
}

.row.gutters-sm > .d-flex.gap-4 {
  --gap: 2rem;
}

.row.gutters-sm > .d-flex.gap-5 {
  --gap: 4rem;
}

@media (min-width: 768px) {
  .card.col-md-4 {
    width: calc(33.33333333% - var(--gap) / 2);
  }
  .card.col-md-8 {
    width: calc(66.66666667% - var(--gap) / 2);
  }
}
</style>