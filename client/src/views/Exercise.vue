<template>
  <div>
    <Header />
    <div class="col-md-8 offset-2 mt-5">
      <h3 class="ml-3">Calories Burned from Exercise</h3>

      <div class="row">
        <div class="col-md-6">
          <div class="list-group mb-3" v-for="item in exerciseLogs" :key="item.id">
            <div class="list-group-item list-group-item-action active">{{item.exercise}}</div>
            <div
              class="list-group-item list-group-item-action"
              v-for="it in item.sets"
              :key="it.set"
            >
              <div class="row">
                <div class="marginAuto">{{it.weight}}</div>
                <div class="marginAuto">{{it.reps}} reps</div>
              </div>
            </div>
            <!-- <div class="list-group-item list-group-item-action">
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
            </div>-->
          </div>
        </div>
        <div class="col-md-6">
           <h3 class="ml-3">Calories Burned from Exercise</h3>
          <div class="form-group">
            <select
              class="form-control"
              id="exampleFormControlSelect1"
              v-model="excerciseId"
              @change="onChange()"
            >
              <option value="45"> choose an excercise below:</option>
              <option v-for="item in exercises" :key="item.id" :value="item.id">{{item.name}}</option>
            </select>
          </div>
          <div class="card w-100">
            <div class="card-body">
              <h5 class="card-title text-center">How Many Calories Did I Burn</h5>
              <form @submit.prevent="calculateCalories">
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
                <button class="btn btn-primary mb-2">Calculate</button>
              </form>

              <h5 class="text-center">Calories Burned : {{calories}}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "./Header.vue";
import axios from "axios";

export default {
  name: "Exercise",
  components: {
    Header
  },
  data() {
    return {
      exercises: [],
      exerciseLogs: [],
      excerciseId: 45,
      exerciseName: "",
      similarExercise: "",
      calories: 0
    };
  },
  props: {
    apiUrl: {
      type: String,
      default: "http://localhost:3000/"
    }
  },
  methods: {
    onChange() {
      console.log(this.excerciseId);
    },
    search() {
      let similar = [];
      this.exercises.find(el => {
        const match = el.name
          .toLowerCase()
          .includes(this.exerciseName.toLowerCase());
        if (match) {
          similar.push(el);
        }
      });
      if (similar.length > 0) {
        for (const it of similar) {
          this.similarExercise += `${it.name}, `;
        }
      }
    },
    calculateCalories() {
      this.calories = Math.floor(Math.random() * 100);
    }
  },
  created() {
    axios
      .get(`${this.apiUrl}exercises/all`)
      .then(res => {
        this.exercises = res.data;
        console.log(this.exercises);
      })
      .catch(err => {
        console.log(err);
      });
    axios
      .get(`${this.apiUrl}exerciseLogs/all`)
      .then(res => {
        this.exerciseLogs = res.data;
        console.log(this.exerciseLogs);
      })
      .catch(err => {
        console.log(err);
      });
  },
  submit() {
    axios
      .post(`${this.apiUrl}exercises/save`)
      .then(res => {
        this.exercises = res.data;
        console.log(this.exercises);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>

<style scoped>
#result {
  width: 80%;
}

.card.w-100 {
  margin-top: 2.5rem;
}
.list-group-item.list-group-item-action.active {
  text-align: initial;
}

.marginAuto {
  margin: 0 auto;
}
</style>