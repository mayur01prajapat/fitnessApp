<template>
<div>
    <Header />
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

</style>