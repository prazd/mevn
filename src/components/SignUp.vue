<template>
  <div class="hello">

    <h1>{{ msg }}</h1>
    <br><br>
    <p class="info">{{ info.masInfo }}</p>
    <br><br>
    <div class="container">
  <form>
    <p class="info">{{ info.email }}</p>
     <div class="group">      
      <input type="text" v-model="input.email" required>
      <span class="bar"></span>
      <label>Email</label>
    </div>
    
    <p class="info">{{ info.user }}</p>
    <div class="group">      
      <input v-model="input.user" type="text" required>
      <span class="bar"></span>
      <label>Username</label>
    </div>

    <p class="info">{{ info.password }}</p>  
    <div class="group">      
      <input v-model="input.pass" type="password" required>
      <span class="bar"></span>
      <label>Password</label>
    </div>    
  </form>
   <button type="button" v-on:click="reg()">Login</button>

</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'SignUp',
  
  data () {
    return {
      msg: 'Регистрация',
      info:{
        email:"",
        user:"",
        password:"",
        masInfo:"",
        userInDb:""
      },
      input:{
    user:"",
    email:"",
    pass:""
  },
    }
  },
  methods:{
    reg(){
      
      this.info.email = ""
      this.info.user = ""
      this.info.password = ""
      this.info.masInfo = ""

       axios.post('http://localhost/signup',{user:this.input.user,pass:this.input.pass,email:this.input.email})
          .then((res)=>{
            if(res.data.mes===1)
              this.info.userInDb = false
            else if(res.data.mes===2)
              this.info.userInDb = true
            })

      let check = null

      if(this.input.pass.length===0 || this.input.email.length===0){
        this.info.masInfo = "Заполните все указанные поля"
        check++;
        return;
      }
      if(this.input.email.indexOf('@')===-1 ){
        this.info.email = "Введите правильно адрес почты"
        check++;
      }
      if(this.input.pass.length<8){
        this.info.password = "Пароль должен иметь длинну минимум в 8 символов"
        check++
      }
      if(this.info.userInDb===true){
        this.info.user = "Пользователь с таким ником уже есть"
        check++;
      }
      if(check!=null){
        return
      }
      this.$router.push('/login')
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
.info{
  color: red;
}
</style>
