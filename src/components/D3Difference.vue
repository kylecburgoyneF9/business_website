<template>
  <!-- 'portfolio' section design and elements -->
  <section class="d3-difference" id="d3-difference">
    <div class="d3-difference-contents">
      <h2 class="heading">The D3 <span>Difference</span></h2>
      <p>The <strong>"D3 Difference"</strong> sits at the intersection of finance and technology. Few other fractional
        CFO services firms
        possess the same level of knowledge and capability in capturing high ROI opportunities using today’s suite of
        automation, integrations, and AI technologies. This niche cross functional skillset enables D3 to deliver the
        highest of RIO to FP&A departments and operators in need of better data visibility or the configuration of an
        automation solution. This skillset also directly supplements D3’s fractional CFO services, as we can see other
        high
        ROI technology opportunities throughout the business, not just with the FP&A function. </p>
      <p>Our firm enjoys showcasing its capabilities across many social media platforms to educate CFOs and executive
        business operators on where our services can deliver value to their businesses. Again, this is something
        few other firms do. I think this is an important mechanism for any financial or technical advisory firm from a
        marketing perspective, but it's important from a 'giving back' perspective as well. I can say definitively that
        I would not be the professional, nor person, I am without the many creators out there from whom I have
        benefited. It's time for me to start being one myself.</p>
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
  min-height: 100vh;
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