import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
//
const savedLists = localStorage.getItem('task-lists')

const store =  new Vuex.Store({
  state: {
    lists:savedLists?JSON.parse(savedLists):[
      {
        title:'',
        cards:[
          {body:''},
          {body:''}
        ]
      },
    ],
  },
  mutations: {
    addlist(state,payload){
      state.lists.push({title:payload.title,cards:[]})
    },
    removelist(state,payload){
      state.lists.splice(payload.listIndex,1)
    },
    addCardToList(state,payload){
      state.lists[payload.listIndex].cards.push({body:payload.body})
    },
    removeCardFromList(state,payload){
      state.lists[payload.listIndex].cards.splice(payload.cardIndex,1)
    },
    updateList(state,payload){
      state.lists = payload.lists
    }
  },
  actions: {
    addlist(content,payload){
      content.commit('addlist',payload)
    },
    removelist(content,payload){
      content.commit('removelist',payload)
    },
    addCardToList(content,payload){
      content.commit('addCardToList',payload)
    },
    removeCardFromList(content,payload){
      content.commit('removeCardFromList',payload)
    },
    updateList(content,payload){
      content.commit('updateList',payload)
    }
  },
  getters:{
    //stateだけ受け取り、全体のカードの総数を返す
    totalCardCount(state){
      let count = 0
      state.lists.map(content => count+=content.cards.length)
      return count
    },
    //ここまで
  },

})
store.subscribe((mutation,state)=>{
  localStorage.setItem('task-lists',JSON.stringify(state.lists))
})
export default store
