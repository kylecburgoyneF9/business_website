<template>
  <!-- 'home' section design and elements -->
  <section class="home" id="home">
    <div class="home-content">
      <h1>D3 Finance</h1>
      <div class="">
        <h3>Fractional CFO & Technical Advisory Services</h3>
      </div>
      <p>My team delivers fractional CFO and technical advisory services designed to directly impact the bottom line
        with <strong> high ROI opportunities</strong>. We do this by combining specialized finance and accounting
        expertise
        with today’s
        array of automation, integration and AI technologies. Scroll for more and connect with me today. </p>

      <div class="btn-box">
        <a href="#contact" class="btn">Let's Talk</a>
        <a href="https://minnect.com/become-an-expert/#download" target="_blank" class="btn">Minnect</a>
        <a href="../assets/Kyle_Burgoyne_CV_2024.pdf" class="btn"
          download="../assets/Kyle_Burgoyne_CV_2024.pdf">Download
          CV</a>
      </div>
    </div>

    <SocialLinks class="home-sci" />
  </section>

  <!-- 'about' section design and elements -->
  <section class="about" id="journey">
    <h2 class="heading">About <span>Me</span></h2>

    <div class="about-img">
      <img src="../assets/Home/Self-BW.jpg" alt="">
      <span class="circle-spin"></span>
    </div>

    <div class="about-content">
      <h3>Kyle Burgoyne</h3>
      <p>I started D3 Finance to deliver clear financial leadership to business operators, who need it, and capture the
        emerging automation opportunities found within most businesses and FP&A departments today.
      </p>
      <p>Today's high and low code technology offers businesses significant opportunities for cost savings, enhanced
        decision-making, and eased operational management. Seizing these opportunities necessitates a team possessing
        specialized cross-functional expertise. Leveraging my decade-long career in accounting, finance, and
        entrepreneurship along with a passion for technology, I spearhead our team's efforts to capture these
        opportunities.
      </p>
      <div class="home-about-btn">
        <router-link :to="{ path: '/consulting', hash: '#my-career' }" scroll="{ behavior: 'smooth' }"
          class="universal-btn">My
          Career</router-link>
      </div>
    </div>
  </section>

  <!-- 'services' section design and elements -->
  <section class="services" id="services">
    <h2 class="heading">Consulting <span>Services</span></h2>
    <div class="services-intro">
      Our services are designed to deliver directly to your business's bottom line. Click the links to explore our suite
      of services.
    </div>
    <div class="services-container">
      <router-link :to="{ path: '/consulting', hash: '#consulting-fractional-cfo' }" scroll="{ behavior: 'smooth' }"
        class="services-box">
        <SvgLineChart class="svg-icon" />
        <h3>Fractional CFO Services</h3>
        <p>We help executive business operators make their best decisions by fulfilling their business’s key finance and
          accounting leadership needs.
        </p>
      </router-link>
      <router-link :to="{ path: '/consulting', hash: '#consulting-automation-solutions' }"
        scroll="{ behavior: 'smooth' }" class="services-box">
        <SvgCog class="svg-icon" />
        <h3>Specialized Business Tooling</h3>
        <p>We collaborate with business operators to build specialized operating tools to grow their business, ease
          their operations, and make their decisions more data-driven. </p>
      </router-link>
      <router-link :to="{ path: '/consulting', hash: '#consulting-integration-solutions' }"
        scroll="{ behavior: 'smooth' }" class="services-box">
        <SvgIntersect class="svg-icon" />
        <h3> FP&A Automation & Integration</h3>
        <p>We support Controllers, CFOs, and other accounting managers in outfitting their FP&A departments with the
          latest integrations, automations, and Ai tools to alleviate the challenges of manual and legacy systems.</p>
      </router-link>
    </div>
  </section>

  <!-- The D3 Difference -->
  <TheDifference />

  <!-- Digital Portfolio -->
  <DigitalPortfolio />

  <!-- Digital Portfolio -->
  <MyPromise />

  <!-- Reviews Section -->
  <Reviews />

  <!-- Contact Section -->
  <ContactForm />

</template>

<script setup>
import { RouterLink } from 'vue-router';
import { onMounted, onUnmounted, ref, nextTick } from 'vue';

// import svgs
import SocialLinks from '../components/SocialLinks.vue'
import SvgCog from '../components/svgs/Cog.vue'
import SvgLineChart from '../components/svgs/LineChart.vue'
import SvgIntersect from '../components/svgs/Intersect.vue'
import Tagtag from '@/components/svgs/Tagtag.vue';

import TheDifference from '../components/D3Difference.vue'
import MyPromise from '../components/MyPromise.vue'
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
  nextTick(() => {
    setHeights()
    window.addEventListener('resize', setHeights)
  })
});

onUnmounted(() => {
  window.removeEventListener('resize', setHeights)
})

</script>

<style scoped></style>
