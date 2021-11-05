<template class="w-100">
 
 <!-- 
<div class="rounded border ">
 Tabs 
  <ul id="tabs" class="inline-flex pt-2 px-1 w-full border-b">
    <li class="bg-white text-gray-800 font-semibold py-2 rounded-t border-t border-r border-l -mb-px">
      <router-link class="text-sm text-center bg-indigo-500 hover:bg-red-700 text-white font-bold py-2 px-2 mx-1 rounded " to="/about">操作說明</router-link> 
    
      </li>
    <li class=" text-gray-800 font-semibold py-2 rounded-t">
      <router-link class="text-sm text-center bg-yellow-600 hover:bg-red-700 text-white font-bold py-2 px-2 mx-1 rounded " to="/"> 靶位現況 </router-link> 
    
      </li>
    <li class=" text-gray-800 font-semibold py-2 rounded-t">
      <router-link class="text-sm text-center bg-indigo-500 hover:bg-red-700 text-white font-bold py-2 px-2 mx-1 rounded " to="/posGM"> 本日訂單 </router-link> 
   
      </li>
    <li class=" text-gray-800 font-semibold py-2 rounded-t">
       <router-link class="text-sm text-center bg-indigo-500 hover:bg-red-800 text-white font-bold py-1.5 px-1 mx-1 rounded " to="/posGM"> 帳號 </router-link> 
      </li>
  </ul>-->
  <div class="w-100  item-center bg-indigo-800 py-3 px-1  " id="nav">
      <router-link class="text-sm text-center bg-indigo-500 hover:bg-red-600 text-white font-bold py-1.5  px-2 mx-1 rounded " to="/about">操作說明</router-link>   
      <router-link class="text-sm text-center bg-yellow-600 hover:bg-red-600 text-white font-bold py-1.5  px-2 mx-1 rounded " to="/"> 靶位現況 </router-link> 
      <router-link class="text-sm text-center bg-indigo-500 hover:bg-red-600 text-white font-bold py-1.5  px-2 mx-1 rounded " to="/posGM"> 本日訂單 </router-link> 
      <router-link class="text-sm text-center bg-indigo-500 hover:bg-red-600 text-white font-bold py-1.5  px-2 mx-1 rounded " to="/posGM"> 更多.. </router-link> 
  </div>
  
 <router-view/>
 
  <!-- Tab Contents 
  <div id="tab-contents">
    <div id="first" class=" ">
       
    </div>
    <div id="second" class="hidden ">
      <router-view/>
    </div>
    <div id="third" class="hidden ">
       <router-view/>
    </div>
    <div id="fourth" class="hidden ">
       <router-view/>
    </div>
  </div>
</div>-->

<!--
  <div class="w-full item-center bg-indigo-900 pt-2 " id="nav">
    <router-link to="/">棚區平面圖</router-link> |   
    <router-link class="text-sm text-center bg-indigo-500 hover:bg-green-700 text-white font-bold py-2 px-2 mx-1 rounded " to="/about">操作說明</router-link> 
    <router-link class="text-sm text-center bg-yellow-600 hover:bg-green-700 text-white font-bold py-2 px-2 mx-1 rounded " to="/"> 靶位現況 </router-link> 
    <router-link class="text-sm text-center bg-indigo-500 hover:bg-green-700 text-white font-bold py-2 px-2 mx-1 rounded " to="/posGM"> 本日訂單 </router-link> 
    <router-link class="text-sm text-center bg-indigo-500 hover:bg-green-800 text-white font-bold py-1.5 px-1 mx-1 rounded " to="/posGM"> 帳號 </router-link> 
     <router-link to="/TutorialsList">Laaaaaa</router-link>  |  
     
  </div> -->
 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
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
