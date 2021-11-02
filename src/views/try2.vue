<template>
<div class="row ">
    <div class="col-12 bg-gray-200  ">
   
      <span class="m-8">下時段預約人數：</span>
 
     </div>
    </div>

  <div class="flex items-stretch items-center  ">
    
  <div class="flex-auto self-start">
    
    <div class="text-center md:text-left 
              md:items-center md:justify-between md:p-2 pt-4 m-1 rounded-2xl
              bg-blue-100 rounded-md">
              
        <div class="text-xl font-semibold"> 
          <span class="w-1/2 text-blue-500 px-1 ">北北東</span> 
          <button class="inline-block rounded-full text-lg  
                  px-1 text-white bg-blue-500" @click="add">+</button>
          <br>
          <span class="inline-block text-lg font-bold 
            my-1 py-1 px-4 text-white bg-blue-600 rounded-full px-6 "> - /  30 </span>   
        </div> 

        <span class="text-gray-00 text-base ">操作建議提示</span>  
      </div> 

      <draggable
        id="first"
        data-source="juju"
        :list="list"
        class="list-group border bg-gray-300 focus:outline-none focus:ring focus:border-blue-300"
        group="a"
        item-key="name"
      >
        <template #item="{ element }">
          <div class=" bg-gray-300 px-1 my-2 border rounded shadow "> 
             
            <input type="time" id="appt" name="appt" v-model="element.ckintime"
                   class="w-full text-sm text-gray-400 
                   rounded-xl mt-3 mb-1 py-1 text-center
                   focus:outline-none focus:ring focus:border-blue-300"
                   min="06:00" max="22:00" required  >  

            <input type="text" name="price" id="price" v-model="element.name"
                              class="w-full  text-gray-400 rounded-full my-1 py-1 text-center 
                              focus:outline-none focus:ring focus:border-blue-300" 
                              placeholder="誰報名？"  > 

            <div class="flex ">
              <div class="flex-auto ">
                <button class="flex inline-block rounded-full 
                text-ms px-1 m-1  text-white bg-blue-400" @click="add">...</button>
              </div>
              <div class="flex-auto ">
                <select v-model="element.stus" 
                      class=" flex inline-block rounded-full text-base   
                               w-7/8 pl-1 my-1 text-white bg-blue-400"> 
                  <option value="1" selected disabled hidden >首次</option>
                  <option value="2">加時</option>
                  <option value="3">離場</option>
                  <option value="4">待確認</option>
                  <option value="5">其他</option>
                </select> 
              </div>
            </div>
             
 
            
            
          </div>
        </template>

        <template #header> 
        </template>
      </draggable>
  </div>
   <div class="flex-auto self-start">
    
    <div class="text-center md:text-left 
              md:items-center md:justify-between md:p-2 pt-4 m-1 rounded-2xl
              bg-blue-200 rounded-md">
              
        <div class="text-xl font-semibold"> 
          <span class="w-1/2 text-blue-500 px-1 ">北場</span> 
          <button class="inline-block rounded-full text-lg  
                  px-1 text-white bg-blue-500" @click="add">+</button>
          <br>
          <span class="inline-block text-lg font-bold 
            my-1 py-1 px-4 text-white bg-blue-600 rounded-full px-6 "> - /  30 </span>   
        </div> 

        <span class="text-gray-00 text-base ">操作建議提示</span>  
      </div> 

      <draggable
        id="2"
        data-source="juju"
        :list="list2"
        class="list-group border bg-gray-500 focus:outline-none focus:ring focus:border-blue-300"
        group="a"
        item-key="name"
      >
        <template #item="{ element }">
          <div class=" bg-gray-300 px-1 my-2 border rounded shadow "> 
             
            <input type="time" id="appt" name="appt" v-model="element.ckintime"
                   class="w-full text-sm text-gray-400 
                   rounded-xl mt-3 mb-1 py-1 text-center
                   focus:outline-none focus:ring focus:border-blue-300"
                   min="06:00" max="22:00" required  >  

            <input type="text" name="price" id="price" v-model="element.name"
                              class="w-full  text-gray-400 rounded-full my-1 py-1 text-center 
                              focus:outline-none focus:ring focus:border-blue-300" 
                              placeholder="誰報名？"  > 

            <div class="flex ">
              <div class="flex-auto ">
                <button class="flex inline-block rounded-full 
                text-ms px-1 m-1  text-white bg-blue-400" @click="add">...</button>
              </div>
              <div class="flex-auto ">
                <select v-model="element.stus" 
                      class=" flex inline-block rounded-full text-base   
                               w-7/8 pl-1 my-1 text-white bg-blue-400"> 
                  <option value="1" selected disabled hidden >首次</option>
                  <option value="2">加時</option>
                  <option value="3">離場</option>
                  <option value="4">待確認</option>
                  <option value="5">其他</option>
                </select> 
              </div>
            </div>
             
 
            
            
          </div>
        </template>

        <template #header> 
        </template>
      </draggable>
  </div>
    <div class="flex-auto self-start">
    
    <div class="text-center md:text-left 
              md:items-center md:justify-between md:p-2 pt-4 m-1 rounded-2xl
              bg-blue-100 rounded-md">
              
        <div class="text-xl font-semibold"> 
          <span class="w-1/2 text-blue-500 px-1 ">南場</span> 
          <button class="inline-block rounded-full text-lg  
                  px-1 text-white bg-blue-500" @click="add">+</button>
          <br>
          <span class="inline-block text-lg font-bold 
            my-1 py-1 px-4 text-white bg-blue-600 rounded-full px-6 "> - /  30 </span>   
        </div> 

        <span class="text-gray-00 text-base ">操作建議提示</span>  
      </div> 

      <draggable
        id="333"
        data-source="juju"
        :list="list3"
        class="list-group border bg-gray-300 focus:outline-none focus:ring focus:border-blue-300"
        group="a"
        item-key="name"
      >
        <template #item="{ element }">
          <div class=" bg-gray-300 px-1 my-2 border rounded shadow "> 
             
            <input type="time" id="appt" name="appt" v-model="element.ckintime"
                   class="w-full text-sm text-gray-400 
                   rounded-xl mt-3 mb-1 py-1 text-center
                   focus:outline-none focus:ring focus:border-blue-300"
                   min="06:00" max="22:00" required  >  

            <input type="text" name="price" id="price" v-model="element.name"
                              class="w-full  text-gray-400 rounded-full my-1 py-1 text-center 
                              focus:outline-none focus:ring focus:border-blue-300" 
                              placeholder="誰報名？"  > 

            <div class="flex ">
              <div class="flex-auto ">
                <button class="flex inline-block rounded-full 
                text-ms px-1 m-1  text-white bg-blue-400" @click="add">...</button>
              </div>
              <div class="flex-auto ">
                <select v-model="element.stus" 
                      class=" flex inline-block rounded-full text-base   
                               w-7/8 pl-1 my-1 text-white bg-blue-400"> 
                  <option value="1" selected disabled hidden >首次</option>
                  <option value="2">加時</option>
                  <option value="3">離場</option>
                  <option value="4">待確認</option>
                  <option value="5">其他</option>
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
      // items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      name: 'BootstrapVue',
      show: true,
      list: [
        { name: "John 1", id: 0 ,ckintime :"" ,stus :"1" },
        { name: "Joao 2", id: 1 ,ckintime :"" ,stus :"2"},
        { name: "Jean 3", id: 2 ,ckintime :"" ,stus :"1"}
      ],
      list2: [
        { name: "Jonny 4", id: 3,ckintime :"" ,stus :"1" },
        { name: "Guisepe 5", id: 4 ,ckintime :"" ,stus :"2"}
      ],
      list3: [
        { name: "Jonny 4", id: 3,ckintime :"" ,stus :"1" },
        { name: "Guisepe 5", id: 4,ckintime :"" ,stus :"2" }
      ]
    };
  },
  watch: {
    show(newVal) {
      console.log('Alert is now ' + (newVal ? 'visible' : 'hidden'))
    }
  },
  methods: {
    toggle() {
      console.log('Toggle button clicked')
      this.show = !this.show
    },
    dismissed() {
      console.log('Alert dismissed')
    },
   
    add: function() {
      this.list.push({ name: "Juan " + id, id: id++ });
    },
    replace: function() {
      this.list = [{ name: "Edgard", id: id++ }];
    },
    add2: function() {
      this.list2.push({ name: "Juan " + id, id: id++ });
    },
    replace2: function() {
      this.list2 = [{ name: "Edgard", id: id++ }];
    }
  }
};
</script>
<style scoped></style>