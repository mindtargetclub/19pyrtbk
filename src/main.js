import { createApp } from 'vue'
// import Vue from 'vue'
import App from './App.vue'
import router from './router'  
import 'bootstrap/dist/css/bootstrap.css'
 

import { rtdbPlugin } from 'vuefire';
// import store from './store';

// new Vue({
//     // store,
//     router, 
//     vuetify,  
//     render: h => h(App)
//   }).$mount('#app')
const vue = createApp(App).use(router);
vue.use(rtdbPlugin);

vue.mount('#app');

// createApp(App).use(
//     router,
//     // vuetify
    
//     ).mount('#app')
