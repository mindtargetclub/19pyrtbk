<template>
  <div id="nav">
    <router-link to="/">棚區平面圖</router-link> |  
    <router-link to="/about">使用指引</router-link>  |  
    <router-link to="/try2">一次性頁面</router-link>  |  
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

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
