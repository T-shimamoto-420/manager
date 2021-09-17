<template>
  <!--イベント時にaddCardToListメソッドをハンドル-->
  <form :class="classList" @submit.prevent="addCardToList">
    <!--v-modelにbodyを定義し、dataプロパティとバインド(紐付け)-->
    <input type="text" v-model="body" class="text-input" placeholder="リスト" @focusin="startEditing" @focusout="finishEditing">
    <!--ここまで-->
    <button type="submit" class="add-button" v-if="isEditing || bodyExists">追加</button>
  </form>
  <!--ここまで-->
</template>
<script>
export default {
  props:{
    listIndex:{
      type:Number,
      required:true,
    }
  },
  data(){
    return{
      body:'',
      isEditing:false
    }
  },
  computed:{
    classList(){
      const classList = ['addcard']
      if (this.isEditing) {
        classList.push('active')
      }
      if (this.bodyExists) {
        classList.push('addable')
      }
      return classList;
    },
    bodyExists(){
      return this.body.length>0
    }
  },
  methods:{
    startEditing(){
      this.isEditing = true
    },
    finishEditing(){
      this.isEditing = false
    },
    //actionに定義したaddCardToListを実行(dispatchメソッドを使用)
    addCardToList(){
      this.$store.dispatch('addCardToList',{body:this.body,listIndex:this.listIndex})
      this.body = ''
    }
    //ここまで
  }
}
</script>