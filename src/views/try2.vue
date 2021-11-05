<template>
    <div class="w-100"> 

      <div class="bg-indigo-900   py-2 lg:px-4">

         <div class="flex items-stretch pl-3">
            <div class="flex-1 ">
              <div class="  inline-block rounded-full h-4 w-4 
                                  mt-1
                                  bg-green-500 animate-pulse 
                                  border-b-4 border-r-4
                                  border-green-700 "> </div>
                                  <v-text class="pr-2 text-gray-100 text-ms "> 使用中 </v-text>
            </div>
            <div class="flex-1 ">
              <div class="  inline-block rounded-full h-4 w-4 
                                  mt-1
                                  bg-yellow-500 animate-pulse 
                                  border-b-4 border-r-4
                                  border-yellow-700 "> </div>
                                  <v-text class="pr-2 text-gray-100 text-ms "> 請提醒 </v-text>
            </div>
            <div class="flex-1 ">
              <div class="  inline-block rounded-full h-4 w-4 
                                  mt-1 animate-pulse
                                  border-b-4 border-r-4
                                  bg-red-500  
                                  border-red-700 "> </div> 
                                  <v-text class="pr-2 text-gray-100 text-ms "> 逾時 </v-text>
            </div>
            <div class="flex-2 ">
              <p class="time mt-1 pr-5 text-gray-100 text-right ">  
                 時間：{{hour}}:{{mins}}:{{secs}}  </p> 
            </div>
          </div> 
          
        <div role="alert" class="flex px-2 pb-2 bg-indigo-800 items-center text-indigo-100 leading-none  rounded-full flex lg:inline-flex">
          <div class="flex-auto ">
              <span class=" rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                本時段</span>
              <span class="font-bold mr-2 text-xl text-left ">
                    {{ v[0] + v[1] + v[2] }}</span> 
          </div>
          <div class="flex-auto  ">
              <span class=" rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                 下時段</span>
              <span class="font-bold mr-2 text-xl text-left">
                    {{ v[0] + v[1] + v[2] }}</span> 
          </div>
          <div class="flex-auto ">
              <span class="  rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                包場 ｜ 會員</span>
              <span class="font-bold mr-2 text-xl text-left ">
                    {{ v[0] + v[1] + v[2] }}</span> 
          </div>
        </div>
        
           

        <!-- <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
          <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                本時段</span>
          <span class="font-semibold mr-2 text-left flex-auto">
                {{ v[0] + v[1] + v[2] }}</span> 
        </div>

                <div class="p-2 bg-indigo-800 items-center text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex" role="alert">
          <span class="flex rounded-full bg-indigo-500 uppercase px-2 py-1 text-xs font-bold mr-3">
                下時段</span>
          <span class="font-semibold mr-2 text-left flex-auto">
                {{ v[0] + v[1] + v[2] }}</span> 
        </div> -->

      </div>
    </div>



  <div class="flex items-stretch items-center  "> 

    <div class="flex-1 self-start"> 
    <div class="text-center md:text-left bg-blue-100
                md:items-center md:justify-between pt-4 pb-2 mt-0 ">
              
        <div class="text-xl font-semibold"> 
          <span class="w-1/2 text-blue-500 px-1 ">北北東</span> 
          <button class="inline-block rounded-full text-lg  
                  px-2 text-white bg-blue-500" @click="add">+</button>
          <br>
          <span class="inline-block text-base font-bold 
            my-1 py-1 px-2 text-white bg-blue-600 rounded-full px-6 "> {{ v[0] }}  /  {{ roomsize[0] }}  </span>   
        </div> 

        <span class="text-gray-900 text-sm ">操作建議提示</span>  
        </div>  
        <draggable
          id="first"
          data-source="juju"
          :list="list"
          class="list-group bg-gray-400 focus:outline-none focus:ring focus:border-blue-300"
          group="a"
          item-key="name"
        >
          <template #item="{ element }">
            <div class=" bg-gray-300 px-1 my-1.5 mx-1.5 border-b-8 border-gray-600 rounded-xl shadow "> 
              <v-text class=" pl-3 text-gray-600 text-sm "> Start Time</v-text>
              <input type="time" id="appt" name="appt" 


                    @change="setAlarm(element.ckintime)" 
                    v-model="element.ckintime" 
                    placeholder='12:00am'
                    class="w-full text-sm text-gray-500 bg-gray-100
                    rounded-xl mb-1 py-1 text-center
                    focus:outline-none focus:ring focus:border-blue-300"
                    min="06:00" max="22:00" required  >    

              <input type="text" name="price" id="price" v-model="element.name"
                                class="w-full  text-gray-400 rounded-full my-1 py-1 text-center 
                                focus:outline-none focus:ring focus:border-blue-300" 
                                placeholder="誰報名？"  >  

              <div class="flex flex-row items-center my-1"> 
                <div class="flex-auto ">   

                    <div v-if="element.ckintime.split(':', 2)[0]+1< hour  " 
                        class="  inline-block rounded-full h-4 w-4 
                                  mt-1
                                  bg-green-500 animate-pulse 
                                  border-b-4 border-r-4
                                  border-green-700 "> </div> 

                    <!-- <div v-else-if="element.ckintime.split(':', 2)[1]-10>= mins && element.ckintime.split(':', 2)[0]+1 < hour"   
                        class="  inline-block rounded-full h-4 w-4 
                                  mt-1 animate-pulse
                                  border-b-4 border-r-4
                                  bg-yellow-500  
                                  border-yellow-700 "> </div>  2)[0]+1>= hour  [1]>= mins-->

                    <div v-else-if="element.ckintime.split(':', 2)[0]+1>= hour "   
                        class="  inline-block rounded-full h-4 w-4 
                                  mt-1 animate-pulse
                                  border-b-4 border-r-4
                                  bg-yellow-500  
                                  border-yellow-700 "> </div>

                </div>
                
                <div class="flex-auto ">
                  <select v-model="element.stus"   
                          class=" inline-block appearance-none 
                                  rounded-l-xl border-blue-700 border-b-4
                                  text-base text-white text-center 
                                  my-1  bg-blue-400"> 
                    <option value="1" selected disabled hidden >首次</option>
                    <option value="2">加時</option>
                    <option value="3">離場</option>
                    <option value="4">待確認</option>
                    <option value="5">其他</option>
                  </select>  
                
                  <select v-model="element.playerAmt" 
                        class=" appearance-none rounded-r-xl pl-1  
                                text-base text-white text-center
                                inline-block bg-blue-500 font-bold border-b-4  
                                hover:bg-blue-400
                                border-blue-700
                                hover:border-blue-500 "> 
                    <option value="0">0人</option>
                    <option value="1" selected >1人</option>
                    <option value="2">2人</option>
                    <option value="3">3人</option>
                    <option value="4">4人</option>
                    <option value="5">5人</option>
                    <option value="6">6人</option>
                    <option value="7">7人</option>
                    <option value="8">8人</option>
                    <option value="9">9人</option>
                    <option value="10">10人</option>
                    <option value="11">11人</option>
                    <option value="12">12人</option>
                    <option value="13">13人</option>
                    <option value="14">14人</option>
                    <option value="15">15人</option>
                    <option value="16">16人</option>
                    <option value="17">17人</option>
                    <option value="18">18人</option>
                    <option value="19">19人</option>
                    <option value="20">20人</option>
                  </select> 
                </div> 
              </div> 
            </div>
          </template> 
          <template #header> 
          </template>
        </draggable>
    </div>

    <div class="flex-1 self-start"> 
      <div class="text-center md:text-left bg-blue-200 
                md:items-center md:justify-between pt-4 pb-2 mt-0 ">
                
          <div class="text-xl font-semibold"> 
            <span class="w-1/2 text-blue-500 px-1 ">北場</span> 
            <button class="inline-block rounded-full text-lg  
                    px-2 text-white bg-blue-500" @click="add">+</button>
            <br> 
            <span class="inline-block text-base font-bold 
              my-1 py-1 px-2 text-white bg-blue-600 rounded-full px-6 "> {{ v[1] }} /  {{ roomsize[1] }} </span>   
          </div> 

          <span class="text-gray-00 text-sm ">操作建議提示</span>  
        </div>  
        <draggable
          id="2"
          data-source="juju"
          :list="list2"
          class="list-group bg-gray-900 focus:outline-none focus:ring focus:border-blue-300"
          group="a"
          item-key="name"
          @change="RealPlayer"
        >
          <template #item="{ element }"> 
            
            <div class=" bg-gray-300 px-1 my-1.5 mx-1.5 border-b-8 border-gray-500 rounded-xl shadow "> 
              <v-text class=" pl-3 text-gray-600 text-sm "> Start Time</v-text>
              <input type="time" id="appt" name="appt" v-model="element.ckintime" @change="setAlarm(element.ckintime)"
                    placeholder='12:00am'
                    class="w-full text-sm text-gray-500 bg-gray-100 
                    rounded-xl mb-1 py-1 text-center
                    focus:outline-none focus:ring focus:border-blue-300"
                    min="06:00" max="22:00" required  >


              <input type="text" name="price" id="price" v-model="element.name"
                                class="w-full  text-gray-400 rounded-full my-1 py-1 text-center 
                                focus:outline-none focus:ring focus:border-blue-300" 
                                placeholder="誰報名？"  > 

              <div class="flex flex-row items-center"> 
                <div class="flex-auto ">
                  <div class="  inline-block rounded-full h-4 w-4 
                                mt-1
                                bg-green-500 animate-pulse 
                                border-b-4 border-r-4
                                border-gray-600 ">
                  </div> 
                </div> 
                <div class="flex-auto ">
                  <select v-model="element.stus"   
                          class=" inline-block appearance-none 
                                  rounded-l-xl border-blue-700 border-b-4
                                  text-base text-white text-center 
                                  my-1  bg-blue-400"> 
                    <option value="1" selected disabled hidden >首次</option>
                    <option value="2">加時</option>
                    <option value="3">離場</option>
                    <option value="4">待確認</option>
                    <option value="5">其他</option>
                  </select>  
                
                  <select v-model="element.playerAmt" 
                        class=" appearance-none rounded-r-xl pl-1  
                                text-base text-white text-center
                                inline-block bg-blue-500 font-bold border-b-4  
                                hover:bg-blue-400
                                border-blue-700
                                hover:border-blue-500 "> 
                    <option value="0">0人</option>
                    <option value="1" selected >1人</option>
                    <option value="2">2人</option>
                    <option value="3">3人</option>
                    <option value="4">4人</option>
                    <option value="5">5人</option>
                    <option value="6">6人</option>
                    <option value="7">7人</option>
                    <option value="8">8人</option>
                    <option value="9">9人</option>
                    <option value="10">10人</option>
                    <option value="11">11人</option>
                    <option value="12">12人</option>
                    <option value="13">13人</option>
                    <option value="14">14人</option>
                    <option value="15">15人</option>
                    <option value="16">16人</option>
                    <option value="17">17人</option>
                    <option value="18">18人</option>
                    <option value="19">19人</option>
                    <option value="20">20人</option>
                  </select> 
                </div>
              </div>  
            </div>
          </template> 
          <template #header> 
          </template>
        </draggable>
    </div> 

    <div class="flex-1 self-start"> 
      <div class="text-center md:text-left bg-blue-100 
                md:items-center md:justify-between pt-4 pb-2 mt-0 ">
                
          <div class="text-xl font-semibold"> 
            <span class="w-1/2 text-blue-500 px-1 ">南場</span> 
            <button class="inline-block rounded-full text-lg  
                    px-2 text-white bg-blue-500" @click="add3">+</button>
            <br>
            <span class="inline-block text-base font-bold 
              my-1 py-1 px-2 text-white bg-blue-600 rounded-full px-6 "> {{ v[2] }}  /  {{ roomsize[2] }} </span>   
          </div> 

          <span class="text-gray-00 text-sm ">操作建議提示</span>  
        </div>  
        <draggable
          id="333"
          data-source="juju"
          :list="list3"
          class="list-group bg-gray-400 focus:outline-none focus:ring focus:border-blue-300"
          group="a"
          item-key="name"
        >
          <template #item="{ element }">
            <div class=" bg-gray-300 px-1 my-1.5 mx-1.5 border-b-8 border-gray-600 rounded-xl shadow "> 
              <v-text class=" pl-3 text-gray-600 text-sm "> Start Time</v-text> 
              <input type="time" id="appt" name="appt" v-model="element.ckintime" @change="setAlarm(element.ckintime)"
                    placeholder='12:00am'
                    class="w-full text-sm text-gray-500 bg-gray-100
                    rounded-xl mb-1 py-1 text-center
                    focus:outline-none focus:ring focus:border-blue-300"
                    min="06:00" max="22:00" required  >
              <!-- <input  type="time" id="appt" name="appt" v-model="element.ckintime" va
                      class="w-full text-sm text-gray-400 
                      rounded-xl mt-1 mb-1 py-1 text-center
                      focus:outline-none focus:ring focus:border-blue-300"
                      min="06:00" max="22:00" required  >   -->

              <input  type="text" name="price" id="price" v-model="element.name"
                      class="w-full  text-gray-400 rounded-full my-1 py-1 text-center 
                      focus:outline-none focus:ring focus:border-blue-300" 
                      placeholder="誰報名？"  > 

              <div class="flex flex-row items-center"> 
                <div class="flex-auto ">
                  <div class="  inline-block rounded-full h-4 w-4 
                                mt-1
                                bg-green-500 animate-pulse 
                                border-b-4 border-r-4
                                border-gray-600 ">
                  </div> 
                </div>
                
                <div class="flex-auto ">
                  <select v-model="element.stus"   
                          class=" inline-block appearance-none 
                                  rounded-l-xl border-blue-700 border-b-4
                                  text-base text-white text-center 
                                  my-1  bg-blue-400"> 
                    <option value="1" selected disabled hidden >首次</option>
                    <option value="2">加時</option>
                    <option value="3">離場</option>
                    <option value="4">待確認</option>
                    <option value="5">其他</option>
                  </select>  
                
                  <select v-model="element.playerAmt" 
                        class=" appearance-none rounded-r-xl pl-1  
                                text-base text-white text-center
                                inline-block bg-blue-500 font-bold border-b-4  
                                hover:bg-blue-400
                                border-blue-700
                                hover:border-blue-500 "> 
                    <option value="0">0人</option>
                    <option value="1" selected >1人</option>
                    <option value="2">2人</option>
                    <option value="3">3人</option>
                    <option value="4">4人</option>
                    <option value="5">5人</option>
                    <option value="6">6人</option>
                    <option value="7">7人</option>
                    <option value="8">8人</option>
                    <option value="9">9人</option>
                    <option value="10">10人</option>
                    <option value="11">11人</option>
                    <option value="12">12人</option>
                    <option value="13">13人</option>
                    <option value="14">14人</option>
                    <option value="15">15人</option>
                    <option value="16">16人</option>
                    <option value="17">17人</option>
                    <option value="18">18人</option>
                    <option value="19">19人</option>
                    <option value="20">20人</option>
                  </select> 
                </div>
              </div> 
            </div>
          </template> 
          <template #header> 
          </template>
        </draggable>
    </div>  
</div>
 
</template>

<script>

import draggable from "vuedraggable";

let id = 1;
export default { 
  name: "two-list-headerslots",
  display: "Two list header slot",
  order: 14,

  components: {
    draggable
  },

  data() {
    return {
      score:"",
      v:[],
      roomsize:[18,30,18],
      orders : [
          {title: 'Google Pixel', price: 3000},      
          {title: 'Samsung Galaxy S8', price: 2500},
          {title: 'iPhone 7', price: 5000}
        ],
      now_R1_playerAmt:"",
      now_R2_playerAmt:"",
      now_R3_playerAmt:"",
      // items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      hour: '--', 
      mins: '--', 
      secs: '--', 
      state: true,
      currentTime: Date.now(),
      interval: null,
      time: '',
      name: 'BootstrapVue',
      show: true,
      list: [
        { name: "左  1", id: 0 ,ckintime :"13:10" ,ckoutime :"",stus :"1",color:"" ,playerAmt:2},
        { name: "左  2", id: 1 ,ckintime :"" ,ckoutime :"",stus :"2",color:"",playerAmt:2},
        { name: "左  3", id: 2 ,ckintime :"" ,ckoutime :"",stus :"1",color:"",playerAmt:3}
      ],
      list2: [
        { name: "中中 4", id: 3,ckintime :""    ,stus :"1",color:"",playerAmt:5 },
        { name: "中中 3", id: 4 ,ckintime :"" ,stus :"2",color:"",playerAmt:1}
      ],
      list3: [
        { name: "下下 6", id: 3,ckintime :"" ,stus :"1",color:"" ,playerAmt:2},
        { name: "下下 2", id: 4,ckintime :"" ,stus :"2",color:"" ,playerAmt:4}
      ]
    };
  },

  watch: { 
    show(newVal) {
      console.log('Alert is now ' + (newVal ? 'visible' : 'hidden'))
    }, 
      
  },
  changeObjColor() {
      this.objColor = this.objColor === 'red' ? 'blue' : 'red';
    },
  created(){
    this.updateClock(); 
    this.sumList_One();
    this.totalPlay(this.list,this.list2,this.list3);
  },
  methods: { 

RealPlayer(){
  this.totalPlay(this.list,this.list2,this.list3);
},
totalPlay: function(ary1,ary2,ary3){ 
  let total_R1 = []; 
  let total_R2 = []; 
  let total_R3 = []; 
  Object.entries(ary1).forEach(([key, val]) => {
      total_R1.push(val.playerAmt) // the value of the current key.
  });
  Object.entries(ary2).forEach(([key, val]) => {
      total_R2.push(val.playerAmt) // the value of the current key.
  });
  Object.entries(ary3).forEach(([key, val]) => {
      total_R3.push(val.playerAmt) // the value of the current key.
  });
  this.v[0] = total_R1.reduce(function(total, num){ return total + num }, 0);
  this.v[1] = total_R2.reduce(function(total, num){ return total + num }, 0);
  this.v[2] = total_R3.reduce(function(total, num){ return total + num }, 0);


  return this.v 
}, 
 sumList_One() {
          
        var sum=0;
          for (var i = 0; i < this.list.length; i++) {
              sum += parseInt(this.list[i].playerAmt);
              console.log(sum );
// console.log('this.list['+i +'].playerAmt = ' + this.list[i].playerAmt );
          };
          sum = this.now_R1_playerAmt;
          return sum ;

      },
    setAlarm(ckintm) { 


      var temp_T = ckintm.split(':', 2);
          temp_T[0] = parseInt(temp_T[0]) + 1; 
      var return_T = temp_T[0] + " : "+ temp_T[1]


      alert("test = " + return_T );  

      // var date = new Date(); // Todays date - the Date() constructor will default to the current date/time if no value is passed to it
      // var addDays = 4;
      // var addHours = 3;
      // var addMinutes = 2;
      // var addSeconds = 1;
      // // Add hours
      // // The getTime() method returns the number of milliseconds since January 1, 1970, so we can use it to alter the value of the date by any number of milliseconds
      // date.setTime(date.getTime() + (addHours * 60 * 60 * 1000)); // Convert hours to milliseconds - 60 minutes to an hour, 60 seconds to a minute, 1000 milliseconds to a second
      // // Add days
      // date.setTime(date.getTime() + (addDays * 24 * 60 * 60 * 1000)); // Similar to above, but additionally multiplying by 24 as there are 24 hours in a day
      // // Add minutes
      // date.setTime(date.getTime() + (addMinutes * 60 * 1000)); // Convert minutes to milliseconds
      // // Add seconds
      // date.setTime(date.getTime() + (addSeconds *  1000)); // Convert seconds to milliseconds
      // // console.log(date); 
      // alert("dt = " + date ); 
    },
 
    updateClock(){
      var ctx = this;
      setInterval(function(){
        var date = new Date(), 
            hour = date.getHours(),
            min = date.getMinutes(),
            sec = date.getSeconds();
        
        // Set Display
        ctx.hour = (hour < 10) ? '0' + hour : hour;
        ctx.mins = (min < 10) ? '0' + min : min;
        ctx.secs = (sec < 10) ? '0' + sec : sec;


      })},  
    toggle() {
      console.log('Toggle button clicked')
      this.show = !this.show
    },
    dismissed() {
      console.log('Alert dismissed')
    },  
     
    add: function() {
      // this.list.push({ name: "東北貴賓" + id, id: id++ });
      this.list.push({ name: "東北貴賓" + id, id: id++ ,ckintime :"13:10" ,ckoutime :"",stus :"1",color:"" ,playerAmt:2});

       
    },
    replace: function() {
      this.list = [{ name: "Edgard", id: id++ }];
    },
    add2: function() {
      this.list2.push({ name: "北場貴賓" + id, id: id++ });
    },
    replace2: function() {
      this.list2 = [{ name: "Edgard", id: id++ }];
    },
    add3: function() {
      this.list3.push({ name: "南場貴賓" + id,ckintime :"",stus :"1", id: id++ });
    },
    replace3: function() {
      this.list3 = [{   name: "Edgard"      ,ckintime :"" ,stus :"1", id: id++ }];
    }
    ,
    chkstaus: function() {
      var letters = "0123456789ABCDEF";
      var color = "#";
      for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
        this.colors = color;
      }
      console.log(this.colors);
    },
  }, 
};
</script>
<style>
/* CHECKBOX TOGGLE SWITCH */
/* @apply rules for documentation, these do not work as inline style */
.toggle-checkbox:checked {
  @apply: right-0 border-green-400;
  right: 0;
  border-color: #68D391;
}
.toggle-checkbox:checked + .toggle-label {
  @apply: bg-green-400;
  background-color: #68D391;
}

.red {
  color: red;
}

.blue {
  color: blue;
}

.bold {
  font-weight: bold;
}
</style>