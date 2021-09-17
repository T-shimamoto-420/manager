<template>
  <div class="card">
    <button class="close-button" @click="removeCardFromList">✖️</button>
    <div class="body">
      {{body}}
    </div>
  </div>
</template>
<script>
export default {
  //使いたいデータの受け取り
  props:{
    body:{
      type:String,
      required:true,
    },
    listIndex:{
      type:Number,
      required:true
    },
    cardIndex:{
      type:Number,
      required:true
    }
  },
  data(){
    return {
      chackstate:false,
    }
  },
  //ここまで
  methods:{
    //アクションの呼び出し(削除機能の実装)
    removeCardFromList(){
        this.$store.dispatch('removeCardFromList',{cardIndex:this.cardIndex,listIndex:this.listIndex})
    },
    //ここまで
    chack(){
      this.chackstate = !this.chackstate
    }
  }
}
</script>