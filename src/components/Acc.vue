<template>
    <div class="container">
   <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <ul class="navbar-nav">
    <li class="nav-item">
      <router-link class="nav-link" to="/weth">Погода</router-link>
    </li>

     <li class="nav-item">
      <router-link class="nav-link" to="/val">Курс криптовалют</router-link>
    </li>
    <li class="nav-item">
      <router-link class="nav-link" to="/">Выход</router-link>
    </li>
  </ul>

</nav>
   </div>
</template>

<script>
export default {
  name: 'Acc',

  data(){
      return{
          info:"Little App",   
          }},
           methods:{
            Exit(){
              this.$router.push("/")
            }
      }
  }

</script>

<style scoped>

</style>
