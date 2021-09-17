<template>
  <div>
    <header>
      my Tasks
    </header>
    <main>
      <draggable :list="lists"
            @end="movingList"
            class="list-index">
        <list v-for="(item, index) in lists" :key="item.id" :title="item.title" :cards="item.cards" :listIndex="index" @change="movingCard"/>
        <br>
        <list-add/>
      </draggable>
    </main>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import List from './List'
import ListAdd from './ListAdd'
import { mapState } from 'vuex'

export default {
  components: {
    ListAdd,
    List,
    draggable
  },
  computed: {
    ...mapState([
      'lists'
    ]),
    totalCardCount() {
      return this.$store.getters.totalCardCount
    }
  },
  methods: {
    movingCard(){
      this.$store.dispatch('updateList', { lists: this.lists })
    },
    movingList(){
      this.$store.dispatch('updateList', { lists: this.lists })
    }
  }
}
</script>
