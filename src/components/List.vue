<template>
  <div class="list">
    <div class="listheader">
      <p class="list-title">{{ title }}</p>
      <!--リスト内のカードを総数のデータをバインド({{totalCardInList}})の部分-->
      <div class="deletelist" @click="removeList">×</div>
    </div>
    <draggable group="cards" :list="cards" @end="$emit('change')" :option='animation'>
      <card v-for="(item,index) in cards" :body="item.body" :key="item.id" :cards="item.cards" :cardIndex="index" :listIndex="listIndex"/>
      <card-add :listIndex='listIndex'/>
    </draggable>
  </div>
</template>

<script>
import CardAdd from './CardAdd'
import Card from './Card'
import draggable from 'vuedraggable';

export default {
  components:{
    CardAdd,
    Card,
    draggable
  },
  props: {
    title: {
      type: String,
      required: true
    },
    cards:{
      type:Array,
      required:true
    },
    listIndex: {
      type: Number,
      required: true
    }
  },
  data(){
    return {
      option:{
        group:"cards",
        animation:400,
      }
    }
  },
  //templateでバインドさせたtotalCardInListを定義
  computed:{
    totalCardInList(){
      return this.cards.length
    }
  },
  //ここまで
  methods: {
    removeList(){
      if (confirm('本当にこのリストを削除しますか?')) {
        this.$store.dispatch('removelist',{listIndex:this.listIndex})
      }
    },
  }
}
</script>