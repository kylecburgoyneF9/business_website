<template>
  <header id="nav" class="header" :class="{ 'sticky': isSticky }">
    <router-link class="logo" to="/" scroll="{ behavior: 'smooth' }" @click="close">KB | <span>D3 Finance</span></router-link>
    <button class="menu-icon" @click="toggleMenu">
      <MenuIcon :class="{ open: isMenuOpen }" />
    </button>
    <nav class="navbar" :class="{ 'active': isMenuOpen }">
      <router-link to="/consulting" @click="toggleMenu">Services</router-link>
      <router-link :to="{ path: '/', hash: '#portfolio' }" scroll="{ behavior: 'smooth' }"
        @click="toggleMenu">Portfolio</router-link>
      <router-link :to="{ path: '/', hash: '#reviews' }" scroll="{ behavior: 'smooth' }"
        @click="toggleMenu">Reviews</router-link>
      <router-link to="#contact" @click="toggleMenu">Contact</router-link>
      <a href="https://calendly.com/kylecburgoyne/15min" class="calendly-link" target="_blank">Calendly</a>
    </nav>
  </header>
</template>

<style scoped></style>

<script setup>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue';
import { RouterLink } from 'vue-router';

import MenuIcon from './svgs/MenuIcon.vue'

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const close = () => {
  if (isMenuOpen.value)  isMenuOpen.value = false;
}

const isSticky = ref(false);

const handleScroll = () => {
  isSticky.value = window.scrollY > 100; // Adjust the threshold as needed
};

const windowWidth = ref(true)

watch(windowWidth, (newWindowWidth) => {
  let isMobile = newWindowWidth <= 768;
  if (isMobile && isMenuOpen.value) toggleMenu()
})

const trackWidth = () => {
  windowWidth.value = window.innerWidth;
}



onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  window.addEventListener('resize', trackWidth);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
  window.addEventListener('resize', trackWidth);

});
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  padding: 2rem 9%;
  background: transparent;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  transition: background-color 0.3s ease;
  color: var(--off-white);
}

.header.sticky {
  background: var(--dk-blue);
}

.logo {
  position: relative;
  font-size: 2.5rem;
  color: var(--off-white);
  font-weight: 600;
}

.navbar {
  position: relative;
}

.menu-icon {
  display: none;
}

.navbar a {
  font-size: 1.7rem;
  color: var(--text-color);
  font-weight: 500;
  margin-left: 3.5rem;
  transition: .3s;
  color: var(--off-white);
}

.navbar a:hover,
.navbar a.active {
  /*Implement the 'active' class at some point*/
  color: var(--main-color);
}

.calendly-link {
  cursor: pointer;
  /* Change cursor to pointer on hover */
}

/* Menu icon is not currently implemented
#menu-icon {
    position: relative;
    font-size: 3.6rem;
    color: var(--text-color);
    cursor: pointer;
    display: none;
}
*/

@media (max-width: 991px) {
  .header {
    padding: 2rem 4%;
  }
}

@media (max-width: 768px) {
  .header {
    background: var(--dk-blue);
  }

  .menu-icon {
    display: block;
    cursor: pointer;
    background: transparent;
  }

  .navbar {
    position: absolute;
    top: 100%;
    left: -100%;
    width: 100%;
    padding: 1rem 4%;
    background: var(--dk-blue);
    box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .2);
    z-index: 1;
    transition: .25s ease;
    transition-delay: .25s;
  }

  .navbar.active {
    left: 0;
    transition-delay: 0s;
  }

  .navbar .active-nav {
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: var(--bg-color);
    border-top: .1rem solid rgba(0, 0, 0, .2);
    z-index: -1;
    transition: .25s ease;
    transition-delay: 0s;
  }

  .navbar.active .active-nav {
    left: 0;
    transition-delay: .25s;
  }

  .navbar a {
    display: block;
    font-size: 2rem;
    margin: 3rem 0;
    transform: translateX(-20rem);
    transition: .25s ease;
    transition-delay: 0s;
  }

  .navbar.active a {
    transform: translateX(0);
    transition-delay: .25s;
  }
}
</style>
