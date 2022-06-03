<template>
  <v-container id="app">
    <div class="textH">
      <h2>ToDoList</h2>
    </div>
    <div>
      <v-text-field @keyup.enter="addTodo" v-model="dataTodo"/>
    </div>
    <ItemList :msg="todoList" />
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import ItemList from "./components/ItemList.vue";

@Component({
  components: {
    ItemList,
  },
})
export default class App extends Vue {
  // data

  dataTodo: string = "";
  todoList: Array<{
    id: string;
    title: string;
    completed: boolean;
  }> = [];

  // methods
  addTodo() {
    if (this.dataTodo) {
      this.todoList.push({
        id:(Date.now().toString()),
        title: this.dataTodo,
        completed: false,
      });
      this.dataTodo = "";
    }else{
      alert("Please enter a todo");
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.textH{
  color: aquamarine;
  font-size: 50px;
}
</style>
