<template>
  <v-container>
    <div v-for="data in dataList" :key="data.id">
      <Item @delete="daleteById" :dataTodo="data" />
    </div>
    <div class="content" v-if="hideShows()">
      <div>
        <p>{{ countItem() }} items left</p>
      </div>
      <div>
        <v-btn-toggle v-model="toggleExclusive" mandatory>
          <v-btn>
            <p>All</p>
          </v-btn>
          <v-btn>
            <p>Active</p>
          </v-btn>
          <v-btn>
            <p>Completed</p>
          </v-btn>
        </v-btn-toggle>
      </div>
      <div>
        <button v-if="showText()" @click="claerText">Clear Complete</button>
      </div>
    </div>
    <h5>{{ msg }}</h5>
  </v-container>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";
import Item from "@/components/Item.vue";

@Component({
  components: {
    Item,
  },
})
export default class ItemList extends Vue {
  toggleExclusive : Number = 0;
  dataList: Array<{
    id: number;
    text: string;
    completed: boolean;
  }> = [];

  @Prop({ type: Array, default: () => [] })
  msg!: Array<{
    id: number;
    text: string;
    completed: boolean;
  }>;
  @Watch('toggleExclusive')
    onToggleExclusive(val: number){
        if(val ==0){
            this.dataList = this.msg;
        }else if(val == 1){
            this.dataList = this.msg;
            this.dataList = this.dataList.filter(item => !item.completed);
        }else if(val == 2){
            this.dataList = this.msg;
            this.dataList = this.dataList.filter(item => item.completed);
        }
    }
  mounted() {
    this.dataList = this.msg;
  }

  daleteById(id: number) {
    this.dataList = this.dataList.filter((item) => item.id !== id);
  }
  hideShows() {
    if (this.dataList.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  showText() {
    const countTrue = this.dataList.filter(
      (todo) => todo.completed === true
    ).length;
    if (countTrue > 0) {
      return true;
    } else {
      return false;
    }
  }
  countItem() {
    const countTrue = this.dataList.filter(
      (todo) => todo.completed === false
    ).length;
    return countTrue;
  }

  claerText() {
    this.dataList = this.dataList.filter((todo) => todo.completed === false);
  }
  allFil() {
    this.dataList = this.msg;
  }
  activeFil() {
    this.dataList = this.msg;
    this.dataList = this.dataList.filter((todo) => !todo.completed);
  }
  completedFil() {
    this.dataList = this.msg;
    this.dataList = this.dataList.filter((todo) => todo.completed);
  }
}
</script>

<style>
.content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.con {
  display: flex;
  align-items: center;
}
.con button {
  margin: 0 10px;
}
</style>
