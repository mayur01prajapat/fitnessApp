<template>
  <div>
    <Header />
    <div class="col-md-8 offset-2 mt-5">
      <div class="row">
        <div class="col-md-6">
          <h3 class="ml-3">Calories Taken From Diet</h3>
        </div>
        <div class="col-md-6">
          <h3 class="ml-3">Diet Taken</h3>
        </div>
      </div>

      <div class="row">
        <div class="col-md-6">
          <div class="list-group mb-3" v-for="item in dietLogs" :key="item.id">
            <div class="list-group-item list-group-item-action active">{{item.food}}</div>
            <div class="list-group-item list-group-item-action">
              <div class="row">
                <div class="marginAuto">Count : {{item.count}}</div>
                <div class="marginAuto">Calories : {{item.calories}}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="exampleFormControlInput1"
              v-model="food"
              placeholder="Food taken"
            />
          </div>
          <div class="card w-100">
            <div class="card-body">
              <h5 class="card-title text-center">How Many Calories Did I taken</h5>
              <form @submit.prevent="calculateCalories">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    id="exampleFormControlInput1"
                    v-model="count"
                    placeholder="Food quantity"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    v-model="descipriton"
                    id="exampleFormControlInput1"
                    placeholder="Description"
                  />
                </div>
                <button class="btn btn-primary mb-2">Calculate</button>
              </form>

              <h5 class="text-center">Calories Undertaken : {{calories}}</h5>
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
      dietLogs: [],
      calories: 0,
      weight: "",
      description: "This is descipriton"
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
      this.submit();
    },
    fetchLogs() {
      axios
        .get(`${this.apiUrl}dietLogs/all`)
        .then(res => {
          this.dietLogs = res.data;
          console.log(this.dietLogs);
        })
        .catch(err => {
          console.log(err);
        });
    },
    submit() {
      const diet = {
        id: this.dietLogs.length + 1,
        user: JSON.parse(localStorage.getItem("user")).id,
        count: this.count,
        food: this.food,
        calories: this.calories,
        description: this.description
      };
      axios
        .post(`${this.apiUrl}dietLogs/save`, { diet: diet })
        .then(res => {
          this.exercises = res.data;
          console.log(this.exercises);
          this.fetchLogs();
        })
        .catch(err => {
          console.log(err);
        });
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
    this.fetchLogs();
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