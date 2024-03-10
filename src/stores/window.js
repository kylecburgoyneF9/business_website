import { defineStore } from 'pinia'

export const useWindowStore = defineStore('window', {
  state: () => ({ 
    isTouch: false, 
  }),
  actions: {
    detectTouch() {
      this.isTouch = ( 'ontouchstart' in window ) || 
      ( navigator.maxTouchPoints > 0 ) || 
      ( navigator.msMaxTouchPoints > 0 );
    },
  },
})