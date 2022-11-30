<script>
// const methods = {
//   checkCredentials: function (event) {
//     console.log("event:", event)
//     console.log(this.username, this.password)
//   }

import { watch } from 'vue'

// }
function checkCredentials(email, password) {
  console.log({ email, password })
//  
  if (email !== "adresse@gmail.com") throw new Error("Invalid email")
  if (password !== "aaa111") throw new Error("Invalid password")

  const token = "my JWT token"
  localStorage.setItem("token", token)

//  Renvoi vers la page /home apres authentification
  this.$router.push("/home")
}

export default {
  name: "LoginPage",
  data,
  methods: {
    checkCredentials,
    isFormValid
  },
  watch: {
    username(value) {
      const isvalueEmpty = value === ""
      this.isFormValid(!isvalueEmpty)
    },
    password(value) {
      const isvalueEmpty = value === ""
      this.isFormValid(!isvalueEmpty)
    }
  }
}

function isFormValid(bool) {
  console.log("form is valid:", bool)
  this.hasInvalidCredentials = !bool
}

function data() {
  return {
    username: "adresse@gmail.com",
    password: "aaa111",
    hasInvalidCredentials: false
  }
}
</script>
<template>
  <main class="form-signin w-100 m-auto ">
    <form :class="this.hasInvalidCredentials ? 'hasErrors' : ''">
      <img 
        class="mb-4 d-block mx-auto" 
        src="../../public/favicon.ico" 
        alt="" 
        width="72" height="57"
      />
      <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

      <div class="form-floating">
        <input 
          type="email" 
          class="form-control" 
          id="floatingInput" 
          placeholder="name@example.com"
          v-model="username"
          required
          @invalid="isFormValid"
        />
        <label for="floatingInput">Email address</label>
      </div>
      <div class="form-floating">
        <input 
          type="password"
          class="form-control"
          id="floatingPassword"
          placeholder="Password"
          v-model="password"
          required
          @invalid="isFormValid"
        />
        <label for="floatingPassword">Password</label>
      </div>
      <span v-if="hasInvalidCredentials" class="error-msg">Veuillez remplir tous les champs</span>

      <button 
        class="w-100 btn btn-lg btn-primary" 
        type="submit" 
        @click.prevent="() => checkCredentials(this.username, this.password)"
        :disabled="hasInvalidCredentials"
      >
        Sign in
      </button>
      <p class="mt-5 mb-3 text-muted">User: {{ username }}</p>
      <p class="mt-5 mb-3 text-muted">Password: {{ password }}</p>
    </form>
  </main>
</template>

<style scoped>
.hasErrors input {
  border: 1px solid red;
}

.error-msg {
  color: red;
}

html, body {
  align-items: center;
  padding-bottom: 40px;
  background-color: #f5f5f5;
}

.form-signin {
  max-width: 330px;
  padding: 15px;
}

.form-signin .form-floating:focus-within {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}


.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

.b-example-divider {
  height: 3rem;
  background-color: rgba(0, 0, 0, .1);
  border: solid rgba(0, 0, 0, .15);
  border-width: 1px 0;
  box-shadow: inset 0 .5em 1.5em rgba(0, 0, 0, .1), inset 0 .125em .5em rgba(0, 0, 0, .15);
}

.b-example-vr {
  flex-shrink: 0;
  width: 1.5rem;
  height: 100vh;
}

.bi {
  vertical-align: -.125em;
  fill: currentColor;
}

.nav-scroller {
  position: relative;
  z-index: 2;
  height: 2.75rem;
  overflow-y: hidden;
}

.nav-scroller .nav {
  display: flex;
  flex-wrap: nowrap;
  padding-bottom: 1rem;
  margin-top: -1px;
  overflow-x: auto;
  text-align: center;
  white-space: nowrap;
  -webkit-overflow-scrolling: touch;
}
</style>