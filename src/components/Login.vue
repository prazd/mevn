<template>
<div>
  <div class="hello">
    <h1>{{ msg }}</h1>
  <div class="container">
  <form>
      <transition
    name="custom-classes-transition"
    enter-active-class="animated tada"
    leave-active-class="animated bounceOutRight"
  >
    <p class="info" v-if="show">{{ info }}</p>
  </transition>
            
       <br><br>
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
  </div>

<button class="log" type="button"  v-on:click="back()">Back</button> 
 <button class="log" type="button"  v-on:click="login()">Login</button>
      
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
      show:false,
      input:{
        login:"",
        password:""
      }
    }
  },

  methods:{
    back(){
      this.$router.push('/')
    },
    login(){
      this.show = false

      let check = null
      if(this.input.login.length===0 && this.input.password.length===0){
        this.info = "Введите логин и пароль"
        this.show = true
        return
      }

      if(this.input.login.length===0){
        this.info = "Введите логин"
        this.show = true
        return
      }

      if(this.input.password.length===0){
        this.info = "Введите пароль"
        this.show = true
        return
      }
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
          this.show = true
          return
        }
        else if(result.data.mes===3){
          this.info = "Такого пользователя нет. Вам нужно зарегистрироваться"
          this.show = true
        }
      })
    }
  }
}

</script>
<style scoped>

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
  

  input:focus ~ label, input:valid ~ label {
    top: -15px;
    font-size: 14px;
    color: #5264AE;
  }
  

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
  

  input:focus ~ .bar:before,
  input:focus ~ .bar:after {
    width: 50%;
  }
.info{
  color: red;
}
.reg{
  font-weight: 700;
  color: white;
  text-decoration: none;
  padding: .8em 1em calc(.8em + 3px);
  border-radius: 3px;
  background: rgb(64,199,129);
  box-shadow: 0 -3px rgb(53,167,110) inset;
  transition: 0.2s;
} 
reg:hover { background: rgb(53, 167, 110); }
reg:active {
  background: rgb(33,147,90);
  box-shadow: 0 3px rgb(33,147,90) inset;

}

.log {
  text-decoration: none;
  outline: none;
  display: inline-block;
  width: 140px;
  height: 45px;
  line-height: 45px;
  border-radius: 45px;
  margin: 10px 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  color: #524f4e;
  background: white;
  box-shadow: 0 8px 15px rgba(0,0,0,.1);
  transition: .3s;
}
.log:hover {
  background: #2EE59D;
  box-shadow: 0 15px 20px rgba(46,229,157,.4);
  color: white;
  transform: translateY(-7px);
}

.info{
  color:red;
}

</style>