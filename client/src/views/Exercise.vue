<template>
  <div>
    <Header />
    <div class="col-md-8 offset-2 mt-5">
      <h3 class="ml-3">Calories Burned from Exercise</h3>

      <div class="row">
        <div class="col-md-6">
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
          <div class="form-group ml-3">
            <label for="result">Matching exercise :</label>
            <textarea class="form-control" id="result" rows="5"></textarea>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <select class="form-control" id="exampleFormControlSelect1">
              <option>..or choose an excercise below:</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="card mt-2 w-100">
            <div class="card-body">
              <h5 class="card-title text-center">How Many Calories Did I Burn</h5>
              <form>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Your Weight"
                  />
                </div>
                <div class="form-group">
                  <select class="form-control" id="exampleFormControlSelect1">
                    <option>In Pounds</option>
                    <option>In Kilogram</option>
                  </select>
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    placeholder="Duration in minutes"
                  />
                </div>
              </form>

              <h5 class="text-center">Calories Burned : 0</h5>
            </div>
          </div>
        </div>
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
#result {
  width: 80%;
}

.card .mt-2 .w-100 {
  margin-top: 2.5rem;
}
</style>