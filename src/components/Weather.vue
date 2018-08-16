<template>
    <div class="weath">
    <h1 class="w">Введите город, в котором вы хотите узнать погоду</h1>
   <div class="inp">
    <input  class="iw"  type="text" name="weather" v-model="input.weather">
    <button class="btn btn-success" v-on:click="WeatherGet()">Найти</button>
    </div>
    <br>
    <div class="winfo">
    <p class="info">{{info.wd}}</p>
    <p class="info">{{info.temp}}</p>
    <p class="info">{{info.wind}}</p>
    <p class="info">{{info.rain}}</p>
    <p class="info">{{info.snow}}</p>
    </div>
    </div>
</template>
<script>
import axios from "axios"


export default {
    name: 'Weather',

  data(){
      return{
          info:{
              wd:"",
              temp:"",
              wind:"",
              rain:"",
              snow:""
          },
          input:{
              weather:""
          }   
      }
  },
  methods:{
      WeatherGet(){
          /// post to openweather
          let get = "http://api.openweathermap.org/data/2.5/find?q="+this.input.weather+"&type=like&APPID=99e787ee0d65dd2aafc27050db21177b"
          axios.get(get).then(res=>{
          console.log(res)
          this.info.wd = "Погода: " + res.data.list[0].weather[0].description
          this.info.rain = "Дождь: " + +res.data.list[0].rain
          this.info.snow = "Снег:" + +res.data.list[0].snow
          this.info.wind = "Ветер:" + +res.data.list[0].wind.speed
      })}
  }
}
</script>
<style>
.w {
    color:white;

}
.inp{
   margin-top: 150px;
}
.info{
   margin-top:50px;
}
.winfo{
    color:white;
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif
}

iw{
    width: 30px
}
</style>


