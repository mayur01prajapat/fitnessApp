<template>
  <div>
    <Header />
    <div class="container">
      <div class="col-md-12">
        <div class="row mt-3 mb-3">
          <div class="card customCard" style>
            <img src="../assets/images/food-h.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">10 Make-Ahead Breakfasts under 300 calories</h5>
              <p class="time">10 minutes ago</p>
              <div class="row">
                <div class="col-md-6">
                  <a href="#" class="btn btn-primary">Read more..</a>
                </div>
                <div class="col-md-6">
                  <social-sharing url="https://vuejs.org/" inline-template>
                    <a class="btn btn-primary text-white w-100">
                      <network network="facebook">
                        <i class="fa fa-fw fa-facebook"></i> Share
                      </network>
                    </a>
                  </social-sharing>
                </div>
              </div>
            </div>
          </div>

          <div class="card customCard">
            <img src="../assets/images/food-j.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">What 1,200 Calories Looks Like</h5>
              <p class="time">30 minutes ago</p>
              <div class="row">
                <div class="col-md-6">
                  <a href="#" class="btn btn-primary">Read more..</a>
                </div>
                <div class="col-md-6">
                  <social-sharing url="https://vuejs.org/" inline-template>
                    <a class="btn btn-primary text-white w-100">
                      <network network="facebook">
                        <i class="fa fa-fw fa-facebook"></i> Share
                      </network>
                    </a>
                  </social-sharing>
                </div>
              </div>
            </div>
          </div>

          <div class="card customCard">
            <img src="../assets/images/running-2.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Essential Guide to Getting Moving</h5>
              <p class="time">15 minutes ago</p>
              <div class="row">
                <div class="col-md-6">
                  <a href="#" class="btn btn-primary">Read more..</a>
                </div>
                <div class="col-md-6">
                  <social-sharing url="https://vuejs.org/" inline-template>
                    <a class="btn btn-primary text-white w-100">
                      <network network="facebook">
                        <i class="fa fa-fw fa-facebook"></i> Share
                      </network>
                    </a>
                  </social-sharing>
                </div>
              </div>
            </div>
          </div>

          <div class="card customCard" style>
            <img src="../assets/images/food-h.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">10 Make-Ahead Breakfasts under 300 calories</h5>
              <p class="time">18 minutes ago</p>
              <div class="row">
                <div class="col-md-6">
                  <a href="#" class="btn btn-primary">Read more..</a>
                </div>
                <div class="col-md-6">
                  <social-sharing url="https://vuejs.org/" inline-template>
                    <a class="btn btn-primary text-white w-100">
                      <network network="facebook">
                        <i class="fa fa-fw fa-facebook"></i> Share
                      </network>
                    </a>
                  </social-sharing>
                </div>
              </div>
            </div>
          </div>

          <div class="card customCard">
            <img src="../assets/images/running.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">What 1,200 Calories Looks Like</h5>
              <p class="time">14 minutes ago</p>
              <div class="row">
                <div class="col-md-6">
                  <a href="#" class="btn btn-primary">Read more..</a>
                </div>
                <div class="col-md-6">
                  <social-sharing url="https://vuejs.org/" inline-template>
                    <a class="btn btn-primary text-white w-100">
                      <network network="facebook">
                        <i class="fa fa-fw fa-facebook"></i> Share
                      </network>
                    </a>
                  </social-sharing>
                </div>
              </div>
            </div>
          </div>

          <div class="card customCard">
            <img src="../assets/images/running-1.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Essential Guide to Getting Moving</h5>
              <p class="time">10 minutes ago</p>
              <div class="row">
                <div class="col-md-6">
                  <a href="#" class="btn btn-primary">Read more..</a>
                </div>
                <div class="col-md-6">
                  <social-sharing url="https://vuejs.org/" inline-template>
                    <a class="btn btn-primary text-white w-100">
                      <network network="facebook">
                        <i class="fa fa-fw fa-facebook"></i> Share
                      </network>
                    </a>
                  </social-sharing>
                </div>
              </div>
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
  name: "Home",
  components: {
    Header
  },
  props: {
    msg: String
  }
};
</script>

<style scoped>
.customCard {
  width: 18rem;
  margin: 0 auto;
  margin-bottom: 16px;
}

.customCard img {
  height: 200px;
  width: auto;
}

.time {
  font-size: 12px;
}

.card-title {
  display: block;
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>