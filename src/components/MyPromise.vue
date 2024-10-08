<template>
  <!-- 'portfolio' section design and elements -->
  <section class="my-promise" id="portfolio">
    <div class="my-promise-header">
      <h2 class="heading">Promise & <span>Guarantees</span></h2>
      <p>I don’t promise things that I can’t deliver. I don’t pretend to know things that I don’t. The one thing you can
        count on is my word. I will give you my opinion, regardless of what might alternatively ‘sound good’ or ‘sound
        convenient’. If there is one thing I’ve learned about life and business, it’s that success and convenience do
        not have a close relationship. And I am here to cultivate success. </p>
      <p><strong>We back all our engagements with these three guarantees:</strong></p>
    </div>
    <EqualHeightsWrapper class="services-container">
      <div class="services-box-container">
        <div class="services-box-promise" @click.prevent>
          <div class="content">
            <div class="title">
              <h3>Month-to-month Services</h3>
            </div>
            <div class="copy">
              <p>With certain packages, we do offer month-to-month contract terms so that you can walk away at any time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="services-box-container">
        <div class="services-box-promise" @click.prevent>
          <div class="content">
            <div class="title">
              <h3>Money-back Guarantee</h3>
            </div>
            <div class="copy">
              <p>With certain packages, we offer a full money back guarantees for the most recent month of service.</p>
            </div>
          </div>
        </div>
      </div>
      <div class="services-box-container">
        <div class="services-box-promise" @click.prevent>
          <div class="content">
            <div class="title">
              <h3>Service Guarantee</h3>
            </div>
            <div class="copy">
              <p>We will upgrade pre-existing D3 Finance solutions with the latest technology and best practice
                principles
                that emerge within one year of service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </EqualHeightsWrapper>
    <a href="#contact" class="universal-btn">Work Together</a>
  </section>
</template>

<script setup>
import EqualHeightsWrapper from '@/components/EqualHeightsWrapper.vue'
</script>

<style scoped>
.my-promise {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
}

.my-promise-header {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.services-box-promise h3 {
  font-size: 2.6rem;
  color: white;
}

.services-box-promise p {
  font-size: 1.6rem;
  padding: 1rem 0 3rem;
  color: white;
}

.services-container .services-box-promise {
  display: block;
  background: var(--dk-blue);
  padding: 3rem 2rem 3rem;
  border-radius: 2rem;
  text-align: center;
  border: .25rem solid var(--main-color);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  transition: .5s ease;
  /* Change cursor to pointer */
  margin-bottom: 2rem;
}

.my-promise-contents {
  display: flex;
  width: 100%;
  /* Ensure the flex container spans the entire width */
  /* min-height: calc(100vh - 200px); */
  /* Adjust the height as needed */
  margin-bottom: 6rem;
  gap: 2.5rem;
  justify-content: center;
}

.my-promise-header p {
  margin-bottom: 4rem;
  font-size: 1.6rem;
}

.my-promise-contents>div {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--dk-blue);
  border-radius: 2rem;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  /* Add a subtle box shadow */
  transition: transform 0.6s ease, box-shadow 0.3s ease, border-color 0.3s ease;
  /* Add transition for scaling and box shadow */
  max-width: 500px;
  height: 350px;
  min-width: 200px;
  border: 2px solid transparent;
}

.my-promise-contents h3 {
  position: relative;
  z-index: 2;
  font-size: 3rem;
  color: white;
}

.my-promise-contents-consulting,
.my-promise-contents-coaching {
  padding: 1rem;
  /* Optional: Add additional styling specific to each subsection */
}

.my-promise>.universal-btn {
  max-width: 250px;
}

@media (max-width: 768px) {
  .my-promise-contents {
    flex-direction: column;
    align-items: center;
    /* Stack items vertically on smaller screens */
  }

  .my-promise-contents>div {
    width: 100%;
    /* Set anchor tags to full width */
    margin-bottom: 1rem;
    /* Add spacing between stacked items */
  }
}
</style>