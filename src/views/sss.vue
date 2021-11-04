<template> 
<div class="container">

<input type="text" v-model="score" class="form-control">
            <div v-if="score>=60" class="text-success">很棒，你及格了！</div>
            <div v-else="score<=60" class="text-danger">不及格！</div>

<div v-if="loginType === 'username'">
            <label>Username</label>
            <input class="form-control" placeholder="Enter your username"  key="1">
    </div>

    <div  v-else>
            <label>Email</label>
            <input class="form-control" placeholder="Enter your email address"    key="2">
    </div>
</div>
 <button class="btn btn-outline-primary mt-3" @click="toggleLoginType">切換狀態</button>
</template>
<script>

import draggable from "vuedraggable";

let id = 1;
export default { 
  

  components: {
    draggable
  },

  data() {
    return {
      score:0,
      loginType: "username",
      tomClass: {
         imcoming: false,
         carpet: false,
         hide: true
       },
       isTrue: false,

      list3: [
        { name: "Jonny 6", id: 3, timesUP:false ,playerAmt:2},
        { name: "Guisepe 2", id: 4,timesUP:false ,playerAmt:4}
      ]
      ,
      objItems: [
      {name: 'one', number: 1, points: [
        {name: 'oneone', number: 11},
        {name: 'onetwo', number: 12},
        {name: 'onethree', number: 13}
      ]},
      {name: 'two', number: 2, points: [
        {name: 'twoone', number: 21},
        {name: 'twotwo', number: 22},
        {name: 'twothree', number: 23}
      ]},
      {name: 'three', number: 3, points: [
        {name: 'threeone', number: 31},
        {name: 'threetwo', number: 32},
        {name: 'threethree', number: 33}
      ]}
    ],
    };
  },

  watch: { 
     
  }, 
  
  methods: { 
toggleLoginType: function() {
      return this.loginType = this.loginType === "username" ? "email" : "username";
    }
,
    chkcds(  ){



    },
    toggle() {
         this.tomClass.carpet = !this.tomClass.carpet;
         this.tomClass.imcoming = !this.tomClass.imcoming;
         this.tomClass.hide = !this.tomClass.hide;
         this.isTrue = !this.isTrue;
       }
 
    
  }, 
};
</script>
<style>
  
</style>