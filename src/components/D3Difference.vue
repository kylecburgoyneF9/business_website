<template>
  <!-- 'portfolio' section design and elements -->
  <section class="d3-difference" id="d3-difference">
    <div class="d3-difference-contents">
      <h2 class="heading">The D3 <span>Difference</span></h2>
      <p>The D3 Difference is “better DATA...better DECISIONS...better DOLLARS”. Our team's niche automation and AI
        technical capabilities allow us to capture, collate, and deliver financial data to users and decision makers
        like few other firms can. We design all of our technology implementations to deliver maximum value while still
        maintaining an ‘easy-to-manage’ experience for our clients. </p>
      <p><strong>By combining these technology capabilities with our tenured finance expertise, we uniquely enable
          business operators and FP&A professionals, alike, to make the most informed, data-driven financial decisions
          they can today. </strong></p>
    </div>
    <a href="#contact" class="universal-btn">Work Together</a>
  </section>
</template>

<style scoped>
.d3-difference {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: white;
}

.d3-difference-contents .heading {
  margin-bottom: 2rem;
}

.d3-difference-contents {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.d3-difference-contents {
  display: flex;
  width: 100%;
  /* Ensure the flex container spans the entire width */
  /* min-height: calc(100vh - 200px); */
  /* Adjust the height as needed */
  margin-bottom: 6rem;
  gap: 2.5rem;
  justify-content: center;
}

.d3-difference-contents p {
  margin-bottom: 2rem;
  font-size: 1.6rem;
}

.d3-difference-contents p:nth-child(3) {
  margin-bottom: 4rem;
  font-size: 1.6rem;
}

.d3-difference-contents>a {
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

.d3-difference-contents h3 {
  position: relative;
  z-index: 2;
  font-size: 3rem;
  color: white;
}

.d3-difference-contents>a:hover {
  transform: scale(1.01);
  /* Scale up slightly on hover */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  /* Increase box shadow on hover */
}

.d3-difference-contents>a:hover {
  border-color: var(--main-color);
  /* Add a border on hover */
}

.d3-difference-contents-consulting,
.d3-difference-contents-coaching {
  padding: 1rem;
  /* Optional: Add additional styling specific to each subsection */
}

.d3-difference>.universal-btn {
  max-width: 250px;
  margin-bottom: 5rem;
}

@media (max-width: 768px) {
  .d3-difference-contents {
    flex-direction: column;
    align-items: center;
    /* Stack items vertically on smaller screens */
  }

  .d3-difference-contents>a {
    width: 100%;
    /* Set anchor tags to full width */
    margin-bottom: 1rem;
    /* Add spacing between stacked items */
  }
}
</style>