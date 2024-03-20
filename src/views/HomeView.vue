<template>
  <!-- 'home' section design and elements -->
  <section class="home" id="home">
    <div class="home-content">
      <h1>Kyle Burgoyne</h1>
      <div class="">
        <h3>Fractional CFO & CTO</h3>
      </div>
      <p>My team, and I, help businesses build out and maximize their existing finance/accounting function(s) and overall technology infrastructure. We pride ourselves in providing <strong>direct-to-bottom-line value</strong> through better operational decision making and relief of costly manual data entry/preparation. 
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
      <h3>Fractional CFO & CTO</h3>
      <p>Today’s suite of high and low code technology presents both small and large businesses with meaningful opportunity for direct cost savings and improved operational decision making. Unfortunately, taking advantage of these opportunities requires a professional with enough cross-functional knowledge to both see the opportunity and implement against it. My team’s finance and technical capabilities allow us to play this highly specialized role.
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
      Please click on the links below to read more about our suite of services. I believe that our services can deliver <strong>direct-to-bottom-line value</strong> to nearly any business. A couple examples would be (i) accommodating CFO/CTO needs for businesses that might not have the resources or workload to call for full-time, (ii) relieving a founder from CFO/CTO obligations so that they can focus on operations, (iii) help businesses alleviate the pains of the legacy systems without having to modify any existing infrastructure. It is the nature of automation, today, to play the <strong>intermediary</strong> between legacy systems and users. 
    </div>
    <div class="services-container">
      <router-link :to="{ path: '/consulting', hash: '#consulting-fractional-cfo' }" scroll="{ behavior: 'smooth' }"
        class="services-box">
        <SvgLineChart class="svg-icon"/>
        <h3>Fractional CFO Services</h3>
        <p>Fractional CFO Services: Leverage our modeling, accounting, and data analysis expertise to unluck strategic insights for your business. 
        </p>
      </router-link>
      <router-link :to="{ path: '/consulting', hash: '#consulting-automation-solutions' }" scroll="{ behavior: 'smooth' }"
        class="services-box">
        <SvgCog class="svg-icon"/>
        <h3>Automation Solutions</h3>
        <p>Upgrade your workflows with the latest AI and automation solutions available. (VBA Macros, MS Power Automate, APIs)</p>
      </router-link>
      <router-link :to="{ path: '/consulting', hash: '#consulting-integration-solutions' }"
        scroll="{ behavior: 'smooth' }" class="services-box">
        <SvgIntersect class="svg-icon"/>
        <h3>Integration Solutions</h3>
        <p>Unlock your organization’s potential by bridging the gap between disparate IT systems with integration solutions. </p>
      </router-link>
      <router-link :to="{ path: '/consulting', hash: '#consulting-web-development' }" scroll="{ behavior: 'smooth' }"
        class="services-box">
        <Tagtag class="svg-icon"/>
        <h3>Web Development</h3>
        <p>Engage us to craft full-stack web and web3 applications to empower your business’s success. </p>
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
import { onMounted, onUnmounted, ref, nextTick } from 'vue';

// import svgs
import SocialLinks from '../components/SocialLinks.vue'
import SvgCog from '../components/svgs/Cog.vue'
import SvgLineChart from '../components/svgs/LineChart.vue'
import SvgIntersect from '../components/svgs/Intersect.vue'
import Tagtag from '@/components/svgs/Tagtag.vue';

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

<style scoped>
</style>
