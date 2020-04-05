<template>
  <div>
    <Header />
    <div class="col-md-8 offset-2 mt-5">
      <h3>Calories Burned from Exercise</h3>
      <div class="row">
        <form class="form-inline">
          <div class="form-group mx-sm-3 mb-2">
            <input
              type="password"
              class="form-control"
              id="inputPassword2"
              placeholder="Search exercise by name"
            />
          </div>
          <button type="submit" class="btn btn-primary mb-2">Search</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  name: "Exercise",
  components: {
    Header
  },
  props: {
    msg: String
  }
};
</script>

<style scoped>
</style>