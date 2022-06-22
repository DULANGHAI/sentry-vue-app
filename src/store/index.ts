import {defineStore} from 'pinia'
import {allenStore} from './allan'

export const mainStore = defineStore('main', {
  state: () => {
    return {
      msg: 'Hello World',
      count: 0
    }
  },
  getters: {
    getCountBuff(state) {
      console.log('getter被调用')
      return `${state.msg}****${state.msg}`
    },
    getAllanStoreList(): string[] {
      return allenStore().movieList
    }
  },
  actions: {
    changeState() {
      this.count++
      this.msg = 'Hello World---' + this.count
    }
  }
})
