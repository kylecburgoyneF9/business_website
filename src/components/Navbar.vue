<template>
    <header class="header" :class="{ 'sticky': isSticky }">
        <a href="/" class="logo">KB | <span>CharacterMatters</span></a>
        <div class="menu-icon" @click="toggleMenu">
            <MenuIcon :class="{ open: isMenuOpen }" />
        </div>
        <nav class="navbar" :class="{ 'active': isMenuOpen }">
            <router-link to="/consulting">Consulting</router-link>
            <router-link to="/coaching">Coaching</router-link>
            <router-link :to="{ path: '/', hash: '#portfolio' }" scroll="{ behavior: 'smooth' }">Portfolio</router-link>
            <router-link :to="{ path: '/', hash: '#reviews' }" scroll="{ behavior: 'smooth' }">Reviews</router-link>
            <router-link to="#contact">Contact</router-link>
        </nav>
    </header>
</template>

<style scoped></style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { RouterLink } from 'vue-router';

import MenuIcon from './svgs/MenuIcon.vue'

const isMenuOpen = ref(false);

const toggleMenu = () => {
    isMenuOpen.value = !isMenuOpen.value;
};

const isSticky = ref(false);

const handleScroll = () => {
    isSticky.value = window.scrollY > 100; // Adjust the threshold as needed
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
