<template>
  <!-- 'portfolio' section design and elements -->
  <section class="d3-values" id="d3-difference">
    <div class="d3-values-contents">
      <h2 class="heading">Our <span>Values</span></h2>
      <p>I believe that culture is set by the tone at the top and that ‘leading by example’ is the ONLY way to lead. D3
        is here to be a leader. Within our culture, we hold these values to be foundational to success in both life and
        business. As a business owner myself, I know what it’s like to have to go through the trials and tribulations of
        starting and operating a business. </p>
      <p><strong>Veteran owned or operated businesses will receive discounted services from D3.</strong></p>
      <div class="values-review-cards-container">
        <div class="values-review-card-contents">
          <div class="values-review-card-text">
            <h3>Gratitude</h3>
            <p>‘Gratitude is the mother of virtue.’ Be thankful for what you've been given and own it. </p>
          </div>
        </div>
        <div class="values-review-card-contents">
          <div class="values-review-card-text">
            <h3>Accountability</h3>
            <p>Believe in the fruition and freedom of the truth. See the fine line separating what you can and cannot
              control. Seek truth, where it may lead. Seek strong character, wherever it may lead. </p>
          </div>
        </div>
        <div class="values-review-card-contents">
          <div class="values-review-card-text">
            <h3>Infatigueability</h3>
            <p>‘Life is not about how hard you can hit, its about how hard you can get it, and keep going.’ Learn to
              thrive on adversity. Failure is just feedback. </p>
          </div>
        </div>
      </div>
    </div>
    <a href="#contact" class="universal-btn">Work Together</a>
  </section>
</template>

<style scoped>
.values-review-cards-container {
  display: flex;
  flex-direction: column;
  /* Ensure cards stack vertically */
  align-items: center;
  /* Center cards horizontally */
}

.values-review-cards-container .values-review-card-contents {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  background-color: var(--second-bg-color);
  padding: 2rem;
  /*border-radius: 5%;*/
  margin-bottom: 2rem;
  padding: 10px 20px;
  gap: 2rem;
  border: var(--dk-blue) solid 1.5px;
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1);
  width: 70%;
}

.values-review-cards-container .values-review-card-contents .values-review-card-text h3 {
  font-size: 2.6rem;
}

.values-review-cards-container .values-review-card-contents .values-review-card-text p {
  font-size: 1.5rem;
}

.d3-values {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: white;
}

.d3-values-contents .heading {
  margin-bottom: 2rem;
}

.d3-values-contents {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.d3-values-contents {
  display: flex;
  width: 100%;
  /* Ensure the flex container spans the entire width */
  /* min-height: calc(100vh - 200px); */
  /* Adjust the height as needed */
  margin-bottom: 6rem;
  gap: 2.5rem;
  justify-content: center;
}

.d3-values-contents p {
  margin-bottom: 2rem;
  font-size: 1.6rem;
}

.d3-values-contents p:nth-child(3) {
  margin-bottom: 4rem;
  font-size: 1.6rem;
}

.d3-values-contents>a {
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

.d3-values-contents h3 {
  position: relative;
  z-index: 2;
  font-size: 3rem;
  color: var(--text-color);
}

.d3-values-contents>a:hover {
  transform: scale(1.01);
  /* Scale up slightly on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* Increase box shadow on hover */
}

.d3-values-contents>a:hover {
  border-color: var(--main-color);
  /* Add a border on hover */
}

.d3-values-contents-consulting,
.d3-values-contents-coaching {
  padding: 1rem;
  /* Optional: Add additional styling specific to each subsection */
}

.d3-values>.universal-btn {
  max-width: 250px;
  margin-bottom: 5rem;
}

@media (max-width: 768px) {
  .d3-values-contents {
    flex-direction: column;
    align-items: center;
    /* Stack items vertically on smaller screens */
  }

  .d3-values-contents>a {
    width: 100%;
    /* Set anchor tags to full width */
    margin-bottom: 1rem;
    /* Add spacing between stacked items */
  }

  .values-review-cards-container .values-review-card-contents {
    flex-direction: column;
    text-align: center;
    padding: 20px;
    width: 100%;
  }

}
</style>