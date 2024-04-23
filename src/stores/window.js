import { defineStore } from 'pinia'

export const useWindowStore = defineStore('window', {
  state: () => ({ 
    isTouch: false, 
  }),
  actions: {
    detectTouch() {
      const UA = window.navigator.userAgent
      const isMobile =
        UA.includes("Mobi") ||
        UA.includes("mobi") ||
        UA.includes("ighthouse") ||
        UA.includes("Android") ||
        UA.includes("iPad") ||
        UA.includes("iPhone") ||
        UA.includes("webOS") ||
        UA.includes("BlackBerry") ||
        UA.includes("Windows Phone") ||
        UA.includes("IEMobile") ||
        UA.includes("Opera Mini") ||
        UA.includes("iPod");
      this.isTouch = ( 'ontouchstart' in window ) || 
      ( navigator.maxTouchPoints > 0 ) || 
      ( navigator.msMaxTouchPoints > 0 );
    },
  },
})