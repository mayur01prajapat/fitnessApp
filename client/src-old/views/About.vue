<template>
  <div class="page">
    <Header />
    <div class="col-md-12 section">
      <div class="row">
        <div class="col-md-6 mx-auto">
          <div class="col-md-6 offset-3 mt-5">
            <h1 class="heading">Fitness starts with what you eat.</h1>
            <p>Take control of your goal.Track calories breakdown ingredients.and log activity with myfitnesspal</p>
            <button type="button" class="btn btn-primary btn-block">START FOR FREE</button>
            <p>
              Already have an account?
              <router-link class="btn btn-link" to="/Login">Login</router-link>
            </p>
          </div>
        </div>
        <div class="col-md-6">
          <img class="coverImage" src="../assets/images/yoga.png" alt="image" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";

// import axios from "axios";

export default {
  name: "About",
  components: {
    Header
  },
  props: {
    msg: {
      type: String,
      default: "test message"
    },
    todos: []
  },
  methods: {}
};
</script>

<style scoped>
.page {
  height: 100vh;
  margin: 0px;
  overflow: hidden;
  background: #f7f7f7;
}

.btn-link {
  padding: 0px !important;
  margin-bottom: 6px;
}
.heading {
  font-weight: bold;
}
/* .section {
  background: #f7f7f7;
} */
.coverImage {
  object-fit: cover;
  width: 100%;
  height: 100%;
  /*  background: green; */
  /*  height: 100vh;
  background-image: url("../assets/images/yoga.png");
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: contain;
  background-position: 50% 50%;
  width: 100%;
  background-size: 100% 100%; */
}
</style>