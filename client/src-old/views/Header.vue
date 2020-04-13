<template>
  <div class="headerContainer">
    <div class="row">
      <div class="ml-5">
        <h1>UziFit</h1>
      </div>
      <div class="ml-auto mr-5 row">
        <router-link class="mr-3 mt-3" to="/login">Log in</router-link>
        <router-link class="mr-3 mt-3" to="/signup">Sign up</router-link>
      </div>
    </div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link class="nav-link" to="/about">About</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/suggestion">Suggestion</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/home">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/exercise">Exercise</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {
    msg: String
  }
};
</script>

<style scoped>
.headerContainer {
  overflow-x: hidden;
}
</style>