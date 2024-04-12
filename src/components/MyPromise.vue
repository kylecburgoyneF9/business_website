<template>
  <!-- 'portfolio' section design and elements -->
  <section class="my-promise" id="portfolio">
    <div class="my-promise-header">
      <h2 class="heading">My <span>Promise</span></h2>
      <p>When you team up with D3 Finance, you'll find reassurance in having an executive-level partner who comprehends
        your operation’s distinctive needs and challenges. Together, we'll identify the precise strategies required to
        propel you and your team toward its next phase of success.</p>
      <p>We offer month-to-month services so that if at any point you feel that we’re not delivering to bottom-line, you
        can walk away.</p>
      <p>We only take on clients who can invest in our services and where we can deliver on high ROI opportunities for
        our clients. </p>

    </div>
    <a href="#contact" class="universal-btn">Contact Us</a>
  </section>
</template>

<style scoped>
.my-promise {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
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
  margin-bottom: 5rem;
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