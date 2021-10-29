<template>
<div style="margin: 0 auto;width: 300px;">
  <div v-for="(data, index) in documents" :key="index" style="text-align:left;">
    {{ data.qno.toString().padStart(4, '0') }} |
    {{ data.correct }} |
    {{ data.date }}
  </div>
</div>

<div> {{ this.getRandom }} </div>

<div style="margin-top:20px">
  <button @click="add" style="margin-right:20px">Add</button>
  <button @click="remove">Remove</button>
</div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import Chance from 'chance';
import { db } from '../db';

const getRandomBool = () => {
  const c = new Chance();
  return c.bool();
};

const getRandomInt = () => {
  const c = new Chance();
  return c.integer({ min: 1, max: 9999 });
};

export default {
  name: 'Home',
  data() {
    return {
      documents: [],
    };
  },
  firebase: {
    documents: db.ref('tests/commits'),
  },
  components: {
    HelloWorld,
  },
  methods: {
    add() {
      db.ref(`tests/commits/${this.documents.length.toString()}`)
        .set({
          date: `${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`,
          qno: getRandomInt(),
          correct: getRandomBool(),
        })
        .then(() => {
          console.log('data added');
        });
    },
    remove() {
      db.ref(`tests/commits/${(this.documents.length - 1).toString()}`)
        .remove()
        .then(() => {
          console.log('data removed');
        });
    },
  },
};
</script>
