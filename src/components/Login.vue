<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <div class="container">
  <form>
       <p>{{ info }}</p>
       <div class="group">      
      <input v-model="input.login" type="text" required>
      <span class="bar"></span>
      <label>Username</label>
    </div>
      
<div class="group">      
      <input v-model="input.password" type="password" required>
      <span class="bar"></span>
      <label>Password</label>
    </div>    
  </form>

      <button type="button"  v-on:click="login()">Login</button>
  </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      msg: 'Авторизация',
      info:"",
      input:{
        login:"",
        password:""
      }
    }
  },

  methods:{
    login(){
    
      axios.post('http://localhost/login',{
        login:this.input.login,
        password:this.input.password
        })
      .then((result)=>{
        if(result.data.mes===1){
          this.$router.push('/acc')
        }
        else if(result.data.mes===2){
          this.info = "Неправильный логин или пароль"
        }
        else if(result.data.mes===3){
          this.info = "Такого пользователя нет. Вам нужно зарегистрироваться"
        }
      })
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
/* basic stylings ------------------------------------------ */
.container {
    font-family: Open Sans Condensed;
    width: 400px;
    margin: 0 auto;
    display: block;
    background: #FFF;
    padding: 10px 50px;
  }
  
  h2 {
    margin-bottom: 30px;
    line-height: 35px;
    text-transform: uppercase;
  }
  h2 small {
    font-weight: normal;
    color: #ccc;
    display: block;
  }
  
  /* form starting stylings ------------------------------- */
  .group {
    position: relative;
    margin-bottom: 30px;
  }
  
  input {
    font-size: 16px;
    padding: 10px;
    display: block;
    width: 300px;
    border: none;
    border-bottom: 1px solid #ccc;
  }
  input:focus {
    outline: none;
  }
  
  /* LABEL ======================================= */
  label {
    color: #999;
    font-size: 18px;
    position: absolute;
    pointer-events: none;
    left: 10px;
    top: 15px;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  
  /* active state */
  input:focus ~ label, input:valid ~ label {
    top: -15px;
    font-size: 14px;
    color: #5264AE;
  }
  
  /* BOTTOM BARS ================================= */
  .bar {
    position: relative;
    display: block;
    width: 320px;
  }
  .bar:before, .bar:after {
    content: "";
    height: 2px;
    width: 0;
    bottom: 0;
    position: absolute;
    background: #5264AE;
    transition: 0.2s ease all;
    -moz-transition: 0.2s ease all;
    -webkit-transition: 0.2s ease all;
  }
  .bar:before {
    left: 50%;
  }
  .bar:after {
    right: 50%;
  }
  
  /* active state */
  input:focus ~ .bar:before,
  input:focus ~ .bar:after {
    width: 50%;
  }
</style>