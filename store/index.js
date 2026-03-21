import { defineStore } from 'pinia'

export const GlobalStore = defineStore('GlobalStore',{
  state: () => ({
    submitStatus: false,
    popDetailPage:false,
  }),
  getters: {
    getSubmitStatus: state => state.submitStatus,
    getPopDetailPage:state => state.popDetailPage,
  },
  actions: {
    setSubmitStatus(status) {
      this.submitStatus = status
    },
    setPopDetailPage(status) {
      this.popDetailPage = status
    },
  },
})
