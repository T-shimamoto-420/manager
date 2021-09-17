<template>
  <!--ボタンをクリックすると関数内の処理(タスクの追加)を実行-->
  <form :class="classList" @submit.prevent="addList">
    <input type="text" class="text-input" placeholder="カテゴリー" v-model="title" @focusin="startEditing" @focusout="finishEditing">
    <button type="submit" class="add-button" v-if="isEditing || titleExists">
      追加
    </button>
  </form>
  <!--ここまで-->
</template>
<script>
export default {
  data(){
    return {
      title:'',
      isEditing:false,
    }
  },
  computed:{
    classList(){
      const classList = ['addlist']
      if (this.isEditing) {
        classList.push('active')
      }
      if (this.titleExists) {
        classList.push('addable');
      }
      return classList
    },
    titleExists(){
      return this.title.length > 0
    },
  },
  methods:{
    //ストアでデータの管理をする
    addList(){
      this.$store.dispatch('addlist',{title:this.title})
      this.title=''
    },
    //ここまで
    startEditing(){
      this.isEditing = true
    },
    finishEditing(){
      this.isEditing = false
    }
  },
}
</script>