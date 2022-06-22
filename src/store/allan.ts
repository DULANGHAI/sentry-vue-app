import {defineStore} from 'pinia'

export const allenStore = defineStore('allen', {
  state: () => {
    return {
      movieList: ['泰坦尼克号', '绿皮书', '肖申克的救赎', '阿甘正传', '星际穿越']
    }
  },
  getters: {},
  actions: {}
})
