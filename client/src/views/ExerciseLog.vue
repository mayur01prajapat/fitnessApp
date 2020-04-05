<template>
  <div>
    <Header />
    <div class="container mt-3">
      <div class="list-group mb-3">
        <div class="list-group-item list-group-item-action active">Flat Barbell Bench Press</div>
        <div class="list-group-item list-group-item-action">
          <div class="row">
            <div class="marginAuto">80.0 Kgs</div>
            <div class="marginAuto">5 reps</div>
          </div>
        </div>
        <div class="list-group-item list-group-item-action">
          <div class="row">
            <div class="marginAuto">100.0 Kgs</div>
            <div class="marginAuto">5 reps</div>
          </div>
        </div>
        <div class="list-group-item list-group-item-action">
          <div class="row">
            <div class="marginAuto">120.0 Kgs</div>
            <div class="marginAuto">5 reps</div>
          </div>
        </div>
        <div class="list-group-item list-group-item-action" disabled>
          <div class="row">
            <div class="marginAuto">80.0 Kgs</div>
            <div class="marginAuto">5 reps</div>
          </div>
        </div>
      </div>

      <div class="list-group">
        <div class="list-group-item list-group-item-action active">Close Grip Barbell Bench Press</div>
        <div class="list-group-item list-group-item-action">
          <div class="row">
            <div class="marginAuto">80.0 Kgs</div>
            <div class="marginAuto">8 reps</div>
          </div>
        </div>
        <div class="list-group-item list-group-item-action">
          <div class="row">
            <div class="marginAuto">70.0 Kgs</div>
            <div class="marginAuto">10 reps</div>
          </div>
        </div>
        <div class="list-group-item list-group-item-action">
          <div class="row">
            <div class="marginAuto">60.0 Kgs</div>
            <div class="marginAuto">12 reps</div>
          </div>
        </div>
        <div class="list-group-item list-group-item-action" disabled>
          <div class="row">
            <div class="marginAuto">80.0 Kgs</div>
            <div class="marginAuto">5 reps</div>
          </div>
        </div>
      </div>  

    </div>
  </div>
</template>

<script>
import Header from "../components/Header.vue";


export default {
  name: "ExerciseLog",
  components: {
    Header
  },
  props: {
    msg: String
  }
};
</script>

<style scoped>
.list-group-item.list-group-item-action.active {
  text-align: initial;
}

.marginAuto {
  margin: 0 auto;
}
</style>