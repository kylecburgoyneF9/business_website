<template>
  <!-- 'portfolio' section design and elements -->
  <section class="d3-values" id="d3-difference">
    <div class="d3-values-contents">
      <h2 class="heading">The D3 <span>Values</span></h2>
      <p>The D3 Difference lies at the confluence of finance, technology, and operations, distinguishing us from other
        fractional CFO services firms. With our team's niche technical proficiencies and operational acumen, we offer a
        unique skill set that enables us to leverage today's automation and AI technologies, empowering business
        operators to make the most informed, data-driven financial decisions they can make today.</p>
      <p>Beyond our CFO services, our specialized cross-functional expertise positions D3 to identify and seize high-ROI
        opportunities within FP&A departments seeking enhanced data visibility and relief from labor-intensive
        processes. Additionally, we serve a unique set of CFO services professionals looking to deliver tailored data
        solutions to their clients through automation and AI technologies.</p>
      <p>We take pride in sharing our expertise across various social media platforms to educate CFOs and
        executive-level business operators on how our services can add value to their organizations. This outreach is
        not merely a marketing endeavor for us; it's our way of giving back to the broader business community. I owe
        much of my professional and personal growth to the countless creators whose work has inspired me, and I'm
        excited to be a contributor to this community.</p>
    </div>
    <a href="#contact" class="universal-btn">Work Together</a>
  </section>
</template>

<style scoped>
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
  color: white;
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
}
</style>