<template>
  <!-- 'home' section design and elements -->
  <section class="home has-video-background" id="home">
    <BackgroundVideo fileName="0226.mp4" />
    <div class="home-content">
      <h1>D3 Finance</h1>
      <div class="">
        <h3>Fractional CFO & Tech Advisory Services</h3>
      </div>
      <p>My team delivers fractional CFO and tech advisory services designed to directly impact the bottom line
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
      <p>I started D3 Finance to deliver powerful financial leadership to business operators, who need it, and to
        capture the emerging automation and AI opportunities found within most businesses today. </p>
      <p>My technical capability and diversity of experience, sets me apart from other CFOs. I've seen the inside of a
        diverse array of companies, spanning from burgeoning startups to industry giants. I’ve had the chance to see
        both great success and great failure. You simply will not find another CFO with the same technical or
        operational abilities to bring to your team. It could not be more rewarding to share these skills with my
        clients to grow their businesses alongside mine.
      </p>
      <div class="home-about-btn">
        <router-link :to="{ path: '/consulting', hash: '#my-career' }" scroll="{ behavior: 'smooth' }"
          class="universal-btn">My
          Career</router-link>
      </div>
    </div>
  </section>


   
  <!-- The D3 Difference -->
  <ServicesOverview />
 
  <!-- The D3 Difference -->
  <TheDifference />

  <!-- Digital Portfolio -->
  <DigitalPortfolio />

  <!-- Reviews Section -->
  <Reviews />

  <!-- Digital Portfolio -->
  <MyPromise />

  <OurValues />

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
  import OurValues from '../components/OurValues.vue'
  import ServicesOverview from '../components/ServicesOverview.vue'
</script>

<style scoped></style>