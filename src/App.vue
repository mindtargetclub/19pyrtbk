<template>


  <div class="bg-green-900 my-3 " id="nav">
    <!-- <router-link to="/">棚區平面圖</router-link> |   -->
    <router-link class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 mx-1 rounded " to="/about">使用指引</router-link> 
    <router-link class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 mx-1 rounded " to="/"> 靶位現況 </router-link> 
    <router-link class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-2 mx-1 rounded " to="/posGM"> 本日訂單 </router-link> 
    <router-link class="bg-green-500 hover:bg-green-800 text-white font-bold py-1.5 px-1 mx-1 rounded " to="/posGM"> 使用紀錄 </router-link> 
    <!-- <router-link to="/TutorialsList">Laaaaaa</router-link>  |   -->
     
  </div>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
/* 
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
} */
</style>
