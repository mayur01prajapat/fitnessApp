<template>
  <div class="container">
    <div class="row">
      <div class="col-md-5 mx-auto divContainer">
        <div id="first">
          <div class="col-md-12 text-center">
            <h1>UziFit</h1>
          </div>
          <div class="myform form">
            <div class="logo mb-3">
              <div class="col-md-12 text-center">
                <h2>Login</h2>
              </div>
            </div>
            <form name="login" @submit.prevent="login">
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  v-model="user.email"
                  :class="{ 'is-invalid': submitted && $v.user.email.$error }"
                />
                <div v-if="submitted && $v.user.email.$error" class="invalid-feedback">
                  <span v-if="!$v.user.email.required">Email is required</span>
                  <span v-if="!$v.user.email.email">Email is invalid</span>
                </div>
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  class="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Enter Password"
                  v-model="user.password"
                  :class="{ 'is-invalid': submitted && $v.user.password.$error }"
                />
                <div v-if="submitted && $v.user.password.$error" class="invalid-feedback">
                  <span v-if="!$v.user.password.required">Password is required</span>
                  <span v-if="!$v.user.password.minLength">Password must be at least 6 characters</span>
                </div>
              </div>
              <div class="form-group">
                <p class="text-center">
                  By signing up you accept our
                  <a href="#">Terms Of Use</a>
                </p>
              </div>
              <div class="col-md-12 text-center">
                <button type="submit" class="btn btn-block mybtn btn-primary tx-tfm">Login</button>
              </div>
              <div class="col-md-12">
                <div class="login-or">
                  <hr class="hr-or" />
                  <span class="span-or">or</span>
                </div>
              </div>
              <div class="col-md-12 mb-3">
                <p class="text-center">
                  <a href="javascript:void();" class="google btn mybtn">
                    <i class="fa fa-google-plus"></i> Signup using Facebook
                  </a>
                </p>
              </div>
              <div class="form-group">
                <p class="text-center">
                  Don't have account?
                  <a href="#" id="signup">Sign up here</a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  name: "Login",
  props: {
    apiUrl: {
      type: String,
      default: "http://localhost:3000/"
    }
  },
  data() {
    return {
      user: {
        email: "",
        password: ""
      },
      submitted: false,
      isLogin: localStorage.getItem("isLogin")
    };
  },
  validations: {
    user: {
      email: { required, email },
      password: { required, minLength: minLength(3) }
    }
  },
  created() {
    if (this.isLogin === "true") {
      this.$router.push("/home");
    }
  },
  methods: {
    login() {
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) return;
      // sending data to login api
      axios
        .post(`${this.apiUrl}users/login`, this.user)
        .then(res => {
          if (res.statusText === "OK") {
            localStorage.setItem("user", JSON.stringify(res.data));
            localStorage.setItem("isLogin", "true");
            this.$router.push("/home");
          } else {
            alert("login failed !");
          }
        })
        .catch(err => console.log(err));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
body {
  padding-top: 4.2rem;
  padding-bottom: 4.2rem;
  background: rgba(0, 0, 0, 0.76);
}

a {
  text-decoration: none !important;
}

h1,
h2,
h3 {
  font-family: "Kaushan Script", cursive;
}

.myform {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  padding: 1rem;
  -ms-flex-direction: column;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 1.1rem;
  outline: 0;
  max-width: 500px;
}

.tx-tfm {
  text-transform: uppercase;
}

.divContainer {
  margin-top: 24px;
}

.mybtn {
  border-radius: 50px;
}

.login-or {
  position: relative;
  color: #aaa;
  margin-top: 10px;
  margin-bottom: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
}

.span-or {
  display: block;
  position: absolute;
  left: 50%;
  top: -2px;
  margin-left: -25px;
  background-color: #fff;
  width: 50px;
  text-align: center;
}

.hr-or {
  height: 1px;
  margin-top: 0px !important;
  margin-bottom: 0px !important;
}

.google {
  color: #666;
  width: 100%;
  height: 40px;
  text-align: center;
  outline: none;
  border: 1px solid lightgrey;
}

form .error {
  color: #ff0000;
}

#second {
  display: none;
}
</style>
