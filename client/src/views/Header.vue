<template>
  <div class="headerContainer">
    <div class="row">
      <div class="ml-5">
        <h1>UziFit</h1>
      </div>
      <div class="ml-auto mr-5 row">
        <router-link class="mr-3 mt-3" v-if="isLogin!='true'" to="/login">Log in</router-link>
        <router-link class="mr-3 mt-3" v-if="isLogin!='true'" to="/signup">Sign up</router-link>
        <a class="mr-3 mt-3 text-primary" @click="logout" v-if="isLogin=='true'">Log out</a>
        <!-- <router-link class="mr-3 mt-3" to="/signup">Sign up</router-link> -->
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
            <router-link class="nav-link" to="/exercise-logs">Exercise</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/diet-logs">Diet</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      isLogin: localStorage.getItem("isLogin")
    };
  },
  props: {
    msg: String
  },
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push("/login");
    }
  },
  created() {
    console.log(this.isLogin);
  }
};
</script>

<style scoped>
.headerContainer {
  overflow-x: hidden;
}
</style>