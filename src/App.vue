<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from '../src/components/Navbar.vue'
import Footer from '../src/components/Footer.vue'

</script>

<template>
  <body>
    <Navbar></Navbar>
    <RouterView></RouterView>
    <Footer></Footer>
  </body>
</template>

<style scoped></style>
