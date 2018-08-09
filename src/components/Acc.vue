<template>
  <div class="hello">
    <h1>{{ info }}</h1>

<!-- <nav class="navbar navbar-expand-lg navbar-dark bg-dark"></nav> -->
<a href="#" class="navbar-brand">
  <img src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto/gigs/104778812/original/297c4b578930cfd9f9bc21952eb7e74534d60369/develop-nodejs-express-mongodb-vue-application-using-mevn.jpg" alt="logo">
</a>

  </div>
</template>

<script>
export default {
  name: 'Info',
  data(){
      return{
          info:"Your acc"
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
