<template>
  <!-- 'home' section design and elements -->
  <section class="home" id="home">
    <div class="home-content">
      <h1>Kyle Burgoyne</h1>
      <div class="">
        <h3>Life Coach & Fractional CFO</h3>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus at cupiditate laborum quae facere
        debitis ipsam quasi, natus quibusdam officiis fugit repellat veniam totam asperiores doloremque nobis.
      </p>

      <div class="btn-box">
        <a href="#contact" class="btn">Let's Talk</a>
        <a href="https://minnect.com/become-an-expert/#download" target="_blank" class="btn">Minnect</a>
        <a href="../assets/Kyle_Burgoyne_CV_2024.pdf" class="btn" download="../assets/Kyle_Burgoyne_CV_2024.pdf">Download
          CV</a>
      </div>
    </div>

    <SocialLinks class="home-sci"/>
  </section>

  <!-- 'about' section design and elements -->
  <section class="about" id="journey">
    <h2 class="heading">About <span>Me</span></h2>

    <div class="about-img">
      <img src="../assets/Home/Self-BW.jpg" alt="">
      <span class="circle-spin"></span>
    </div>

    <div class="about-content">
      <h3>Life Coach & Fractional CFO</h3>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium dolorum recusandae saepe magni
        eveniet provident voluptate cupiditate sapiente vero numquam soluta non amet voluptatem ipsam eius quam
        molestias pariatur, eaque a! Minus repudiandae sapiente asperiores aliquid magnam iste vel quis officiis
        odio laudantium numquam minima, dolorem officia esse, quidem ipsa.
      </p>
      <div class="home-about-btn">
        <router-link :to="{ path: '/consulting', hash: '#my-career' }" scroll="{ behavior: 'smooth' }"
          class="universal-btn">My
          Career</router-link>
        <router-link :to="{ path: '/coaching', hash: '#my-journey' }" scroll="{ behavior: 'smooth' }"
          class="universal-btn">My
          Journey</router-link>
      </div>
    </div>
  </section>

  <!-- 'services' section design and elements -->
  <section class="services" id="services">
    <h2 class="heading">Consulting <span>Services</span></h2>

    <div class="services-container">
      <router-link :to="{ path: '/consulting', hash: '#consulting-fractional-cfo' }" scroll="{ behavior: 'smooth' }"
        class="services-box">
        <SvgLineChart />
        <h3>Fractional CFO Services</h3>
        <p>Leverage my financial modeling, accounting, and data analysis expertise to unlock strategic insights for your
          business.</p>
      </router-link>
      <router-link :to="{ path: '/consulting', hash: '#consulting-automation-solutions' }" scroll="{ behavior: 'smooth' }"
        class="services-box">
        <SvgCog />
        <h3>Automation Solutions</h3>
        <p>Upgrade your workflows with the latest AI and automation solutions available. (VBA Macros, MS Power Automate,
          APIs)</p>
      </router-link>
      <router-link :to="{ path: '/consulting', hash: '#consulting-integration-solutions' }"
        scroll="{ behavior: 'smooth' }" class="services-box">
        <SvgIntersect />
        <h3>Integration Solutions</h3>
        <p>Unlock your organization's potential by bridging the gap between disparate IT systems with integration
          solutions.</p>
      </router-link>
      <router-link :to="{ path: '/consulting', hash: '#consulting-web-development' }" scroll="{ behavior: 'smooth' }"
        class="services-box">
        <SvgLineChart />
        <h3>Web Development</h3>
        <p>Engage me to craft full-stack web and web3 applications to empower your business's success.</p>
      </router-link>
    </div>
  </section>

  <!-- 'coaching' section design and elements -->
  <section class="coaching" id="coaching">
    <h2 class="heading"> Life <span>Coaching</span></h2>
    <p>Fitness & Health | Masculinity & Confidence | Relationships & Heartbreak | Career Development | Accountability
      Coaching |
      Childhood Trauma</p>

    <div class="coaching-container" :class="{'is-touch': isTouch }">
      <router-link :to="{ path: '/coaching', hash: '#coaching-fitness' }" scroll="{ behavior: 'smooth' }"
        class="coaching-box">
        <img src="../assets/Home/Fitness.webp" alt="">
        <div class="coaching-layer">
          <h4>Fitness & Health</h4>
          <p>Accomplish your fitness goals through discipline and consistency</p>
        </div>
      </router-link>
      <router-link :to="{ path: '/coaching', hash: '#coaching-masculinity' }" scroll="{ behavior: 'smooth' }"
        class="coaching-box">
        <img src="../assets/Home/Masculinity.webp" alt="">
        <div class="coaching-layer">
          <h4>Masculinity & Confidence</h4>
          <p>Build the strongest and most confident version of yourself</p>
        </div>
      </router-link>
      <router-link :to="{ path: '/coaching', hash: '#coaching-relationships' }" scroll="{ behavior: 'smooth' }"
        class="coaching-box">
        <img src="../assets/Home/Relationships.webp" alt="">
        <div class="coaching-layer">
          <h4>Relationships & Heartbreak</h4>
          <p>Improve your current relationship or rebuild yourself stronger than ever</p>
        </div>
      </router-link>
      <router-link :to="{ path: '/coaching', hash: '#coaching-career' }" scroll="{ behavior: 'smooth' }"
        class="coaching-box">
        <img src="../assets/Home/Career.webp" alt="">
        <div class="coaching-layer">
          <h4>Career Development</h4>
          <p>Develop technical skills and improve your earnings potential</p>
        </div>
      </router-link>
      <router-link :to="{ path: '/coaching', hash: '#coaching-accountability' }" scroll="{ behavior: 'smooth' }"
        class="coaching-box">
        <img src="../assets/Home/Accountability.webp" alt="">
        <div class="coaching-layer">
          <h4>Accountability Coaching</h4>
          <p>Find more discipline and self-control than you've ever known</p>
        </div>
      </router-link>
      <router-link :to="{ path: '/coaching', hash: '#coaching-childhood' }" scroll="{ behavior: 'smooth' }"
        class="coaching-box">
        <img src="../assets/Home/Childhood.webp" alt="">
        <div class="coaching-layer">
          <h4>Childhood Trauma</h4>
          <p>Heal your wounded inner child and shatter your limiting beliefs</p>
        </div>
      </router-link>
    </div>
  </section>

  <!-- Digital Portfolio -->
  <DigitalPortfolio />

  <!-- Reviews Section -->
  <Reviews />

  <!-- Contact Section -->
  <ContactForm />

</template>

<script setup>
import { RouterLink } from 'vue-router';
import { onMounted, onUnmounted, ref } from 'vue';

// import svgs
import SocialLinks from '../components/SocialLinks.vue'
import SvgCog from '../components/svgs/Cog.vue'
import SvgLineChart from '../components/svgs/LineChart.vue'
import SvgIntersect from '../components/svgs/Intersect.vue'

import Reviews from '../components/Reviews.vue'
import DigitalPortfolio from '../components/DigitalPortfolio.vue'

const setHeights = () => {
  const servicesBoxes = document.querySelectorAll('.services-container .services-box');

  // Initialize variables to keep track of the tallest heights for h3 and p tags
  let tallestH3Height = 0;
  let tallestPHeight = 0;
  let maxHeight = 0;

  // Loop through each services box
  servicesBoxes.forEach(box => {
    // Get the height of the h3 and p elements within the current box
    const h3Height = box.querySelector('h3').offsetHeight;
    const pHeight = box.querySelector('p').offsetHeight;
    const boxHeight = box.getBoundingClientRect().height;

    // Update the tallest heights if the current heights are taller
    if (h3Height > tallestH3Height) {
      tallestH3Height = h3Height;
    }
    if (pHeight > tallestPHeight) {
      tallestPHeight = pHeight;
    }
    if (boxHeight > maxHeight) {
      maxHeight = boxHeight;
    }
  });

  // Set the min-height of all h3 and p elements within each box to the tallest heights found
  servicesBoxes.forEach(box => {
    box.querySelector('h3').style.minHeight = tallestH3Height + 'px';
    box.querySelector('p').style.minHeight = tallestPHeight + 'px';
    box.style.minHeight = `${maxHeight}px`;
  });
}

// detecting touch because some elements only expose copy on hover and touchscreens won't see it
import { useWindowStore } from '../stores/window.js'
const windowStore = useWindowStore()
const isTouch = windowStore.isTouch;

onMounted(() => {
  setHeights()
  window.addEventListener('resize', setHeights)
});

onUnmounted(() => {
  window.removeEventListener('resize', setHeights)
})

</script>

<style scoped></style>
