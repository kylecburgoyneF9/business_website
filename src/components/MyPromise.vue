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
    <div class="services-container">
      <div class="services-box-container">
        <a href="javascript:void(0)" class="services-box" @click.prevent>
          <SvgLineChart class="svg-icon" />
          <h3>Month-to-month Services</h3>
          <p>If at any point you feel that we’re not delivering to your bottom-line, you can walk away.</p>
        </a>
      </div>
      <div class="services-box-container">
        <a href="javascript:void(0)" class="services-box" @click.prevent>
          <SvgIntersect class="svg-icon" />
          <h3>Money-back Guarantee</h3>
          <p>We offer a full money-back guarantee for the first two months of service.</p>
        </a>
      </div>
      <div class="services-box-container">
        <a href="javascript:void(0)" class="services-box" @click.prevent>
          <SvgIntersect class="svg-icon" />
          <h3>Free Upgrades</h3>
          <p>We will upgrade any pre-existing D3 Finance solution with the latest technology and best practice principles
            as they
            emerge. </p>
        </a>
      </div>
    </div>
    <a href="#contact" class="universal-btn">Work Together</a>
  </section>
</template>

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

.my-promise-contents>a {
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
  cursor: pointer;
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

.my-promise-contents>a:hover {
  transform: scale(1.01);
  /* Scale up slightly on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* Increase box shadow on hover */
}

.my-promise-contents>a:hover {
  border-color: var(--main-color);
  /* Add a border on hover */
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

  .my-promise-contents>a {
    width: 100%;
    /* Set anchor tags to full width */
    margin-bottom: 1rem;
    /* Add spacing between stacked items */
  }
}
</style>