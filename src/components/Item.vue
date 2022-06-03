<template>
  <v-container>
    <div class="hello">
      <div>
        <v-checkbox
          v-model="dataTodo.completed"
          :label="dataTodo.title"
        ></v-checkbox>
      </div>
      <div>
        <v-icon @click="deleteTodo()" aria-hidden="false">mdi-close</v-icon>
      </div>
    </div>
    <v-divider></v-divider>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Item extends Vue {
  @Prop({
    type: Object,
    default() {
      return {};
    },
  })
  dataTodo!: {
    id: string;
    title: string;
    completed: boolean;
  };

  deleteTodo() {
    this.$emit("delete", this.dataTodo.id);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
