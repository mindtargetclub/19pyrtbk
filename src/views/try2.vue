<template>
  <div class="row">
    <div class="col-4">
      <h3>北北東</h3>

      <draggable
        id="first"
        data-source="juju"
        :list="list"
        class="list-group"
        group="a"
        item-key="name"
      >
        <template #item="{ element }">
          <div class="list-group-item">
            {{ element.name }}
          </div>
        </template>

        <template #header>
          <div class="btn-group list-group-item" role="group">
            <button class="btn btn-secondary" @click="add">Add</button>
            <button class="btn btn-secondary" @click="replace">Replace</button>
          </div>
        </template>
      </draggable>
    </div>

    <div class="col-4">
      <h3>北場</h3>

      <draggable :list="list2" class="list-group" group="a" item-key="name">
        <template #item="{ element }">
          <div class="list-group-item item">
            {{ element.name }}
          </div>
        </template>

        <template #header>
          <div
            class="btn-group list-group-item"
            role="group"
            aria-label="Basic example"
          >
            <button class="btn btn-secondary" @click="add2">Add</button>
            <button class="btn btn-secondary" @click="replace2">Replace</button>
          </div>
        </template>
      </draggable>

    </div>
      <div class="col-4">
      <h3>南場</h3>

      <draggable :list="list3" class="list-group" group="a" item-key="name">
        <template #item="{ element }">
          <div class="list-group-item item">
            {{ element.name }}
          </div>
        </template>

        <template #header>
          <div
            class="btn-group list-group-item"
            role="group"
            aria-label="Basic example"
          >
            <button class="btn btn-secondary" @click="add3">Add</button>
            <button class="btn btn-secondary" @click="replace3">Replace</button>
          </div>
        </template>
      </draggable>

 <div>


      <div>
  <b-button size="sm" @click="toggle">
    {{ show ? 'Hide' : 'Show' }} Alert
  </b-button>
  <b-alert
    v-model="show"
    class="mt-3"
    dismissible
    @dismissed="dismissed"
  >
    Hello {{ name }}!
  </b-alert>
</div>
    </div>

    <!-- <rawDisplayer class="col-2" :value="list" title="List" />

    <rawDisplayer class="col-2" :value="list2" title="List2" /> -->
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
      name: 'BootstrapVue',
      show: true,
      list: [
        { name: "John 1", id: 0 },
        { name: "Joao 2", id: 1 },
        { name: "Jean 3", id: 2 }
      ],
      list2: [
        { name: "Jonny 4", id: 3 },
        { name: "Guisepe 5", id: 4 }
      ],
      list3: [
        { name: "Jonny 4", id: 3 },
        { name: "Guisepe 5", id: 4 }
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