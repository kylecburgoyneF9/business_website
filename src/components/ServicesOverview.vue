<template>
  <section class="services" id="services">
    <h2 class="heading">Consulting <span>Services</span></h2>
    <div class="services-intro">
      Our services are designed to deliver directly to your business's bottom line. Please see our ideal customer
      qualifications. Click the links to explore our suite
      of services.
    </div>
    <EqualHeightsWrapper class="services-container">
      <div class="services-box-container">
        <router-link :to="{ path: '/consulting', hash: '#consulting-fractional-cfo' }" scroll="{ behavior: 'smooth' }"
          class="services-box">
          <SvgLineChart class="svg-icon" />

          <div class="content">
            <div class="title">
              <h3>Fractional CFO Services</h3>
            </div>
            <div class="copy">
              <p>We help executive business operators make their best decisions by fulfilling their business’s key
                finance
                and accounting leadership needs.
              </p>
            </div>
          </div>
        </router-link>
        <ul class="styled-list">
          <li><strong>Ideal Client Size:</strong> Between $200,000 - $20,000,000 in topline revenue.</li>
          <li><strong>Ideal Client Attitude:</strong> 'It’s time to start really seeing into my business'.</li>
          <li><strong>Ideal Client Relationship:</strong> Sharing my talents and efforts with clients to grow your
            business
            alongside mine.</li>
        </ul>
      </div>
      <div class="services-box-container">
        <router-link :to="{ path: '/consulting', hash: '#consulting-integration-solutions' }"
          scroll="{ behavior: 'smooth' }" class="services-box">
          <SvgIntersect class="svg-icon" />
          <div class="content">
            <div class="title">
              <h3> FP&A Automation & Integration</h3>
            </div>
            <div class="copy">
              <p>We support Controllers, CFOs, and other accounting managers in outfitting their FP&A departments with
                the
                latest integration, automation, and AI tools to alleviate the challenges of manual and legacy systems.
              </p>
            </div>
          </div>
        </router-link>
        <ul class="styled-list">
          <li><strong>Ideal Client Size:</strong> Larger organizations will tend to benefit more from automation.</li>
          <li><strong>Ideal Client Attitude:</strong> ‘We really do need to make this change’.</li>
          <li><strong>Ideal Client Relationship:</strong> We only work with clients who we know we can deliver real
            value to. Don’t over automate!</li>
        </ul>
      </div>
    </EqualHeightsWrapper>
  </section>
</template>

<script setup>
import SvgLineChart from '../components/svgs/LineChart.vue'
import SvgIntersect from '../components/svgs/Intersect.vue'
import EqualHeightsWrapper from '@/components/EqualHeightsWrapper.vue'
</script>

<style scoped></style>