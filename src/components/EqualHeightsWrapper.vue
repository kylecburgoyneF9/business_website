<template>
    <div ref="wrapper">
        <slot></slot>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onUnmounted, nextTick } from 'vue'
    const wrapper = ref(null);
    const height = ref('auto');
  
    const setHeight = () => {
        let services = wrapper.value.children;

        let tallestH3Height = 0;
        let tallestPHeight = 0;

        if (!wrapper.value?.children?.length) return

        let servicesBoxes = Array.from(services)

        servicesBoxes.forEach(box => {
            let h3Height = box.querySelector('h3').offsetHeight;
            let pHeight = box.querySelector('p').offsetHeight;

            if (h3Height > tallestH3Height) {
                tallestH3Height = h3Height;
            }
            if (pHeight > tallestPHeight) {
                tallestPHeight = pHeight;
            }
        })

        servicesBoxes.forEach(box => {
            console.log(tallestH3Height,tallestPHeight);
            box.querySelector('.title').style.minHeight = tallestH3Height + 'px';
            box.querySelector('.copy').style.minHeight = tallestPHeight + 'px';
        })
    }
 
    onMounted(() => {
        nextTick(() => {
            setTimeout(() => {
                setHeight()
            }, 500)
        })
        window.addEventListener('resize', setHeight)
    });

    onUnmounted(() => {
        window.removeEventListener('resize', setHeight)
    })
  </script>
  
  <style lang="scss" scoped>
 
  </style>
  