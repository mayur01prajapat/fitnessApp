<template>
  <div
    class="col-sm-12 col-md-12 col-lg-12"
    style="background-color:red;height:100vh;overflow:hidden"
  >
    hello
    <div align="center">
      <!-- style="position: relative;
    overflow: hidden;
      padding-top: 56.25%;"-->

      <social-sharing url="https://vuejs.org/" inline-template>
        <div>
          <network network="facebook">
            <i class="fa fa-fw fa-facebook"></i> Facebook
          </network>
        </div>
      </social-sharing>

      <!--   <div>
    hellow
        <iframe
          id="box1913"
          style="position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 0;"
          scrolling="no"
          marginheight="0"
          marginwidth="0"
          frameborder="0"
          width="530"
          height="230"
        ></iframe>
      </div>-->
    </div>
  </div>
  <!-- <div class="col-sm-12 col-lg-12 p-1 text-dark h-100">
    
  </div>-->
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
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
