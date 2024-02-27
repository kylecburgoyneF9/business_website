<template>
    <header class="header" :class="{ 'sticky': isSticky }">
        <a href="/" class="logo">KB | <span>CharacterMatters</span></a>
        <div class="menu-icon" @click="toggleMenu">
            <box-icon name='menu'></box-icon>
        </div>
        <nav class="navbar" :class="{ 'active': isMenuOpen }">
            <router-link to="/consulting">Consulting</router-link>
            <router-link to="/coaching">Coaching</router-link>
            <router-link to="/partners">Partners</router-link>
            <router-link to="#about">Reviews</router-link>
            <router-link to="/contact">Contact</router-link>
        </nav>
    </header>
</template>

<style scoped></style>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import { RouterLink } from 'vue-router';

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
