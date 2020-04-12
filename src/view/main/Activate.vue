<template>
  <div>
    <h1 class="Text">{{msg}}</h1>
    <router-link v-if="code === 1" to="/login">Login Here</router-link>
  </div>
</template>

<script>
import Axios from 'axios';

export default {
  name: 'Activate',
  data() {
    return {
      msg: '',
      code: null,
    };
  },
  beforeCreate() {
    Axios.get(`http://localhost:8000/user/auth?activated=${this.$route.query.activated}`)
      .then((res) => {
        this.msg = res.data.err;
        this.code = 1;
      })
      .catch(() => {
        this.msg = 'Token Vailed';
      });
  },
};
</script>

<style scoped>
div{
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
a{
  text-decoration: none;
  margin-left: 20px ;
  font-size: 40px;
  font-weight: 900;
}
</style>
